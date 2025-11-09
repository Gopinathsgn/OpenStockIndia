'use server';

import { getDateRange, validateArticle, formatArticle } from '@/lib/utils';
import { POPULAR_BSE_STOCKS } from '@/lib/constants';
import { extractExchange } from '@/lib/utils/symbolTransform';
import { cache } from 'react';

const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1';
const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';
const NEXT_PUBLIC_FINNHUB_API_KEY = process.env.NEXT_PUBLIC_FINNHUB_API_KEY ?? '';

async function fetchJSON<T>(url: string, revalidateSeconds?: number): Promise<T> {
    const options: RequestInit & { next?: { revalidate?: number } } = revalidateSeconds
        ? { cache: 'force-cache', next: { revalidate: revalidateSeconds } }
        : { cache: 'no-store' };

    const res = await fetch(url, options);
    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`Fetch failed ${res.status}: ${text}`);
    }
    return (await res.json()) as T;
}

export { fetchJSON };

/**
 * Fetches market news using Finnhub API
 * @param symbols - Optional array of stock symbols to fetch news for
 * @returns Array of market news articles
 */
export async function getNews(symbols?: string[]): Promise<MarketNewsArticle[]> {
    try {
        const range = getDateRange(5);
        const token = process.env.FINNHUB_API_KEY ?? NEXT_PUBLIC_FINNHUB_API_KEY;
        if (!token) {
            throw new Error('FINNHUB API key is not configured');
        }
        const cleanSymbols = (symbols || [])
            .map((s) => s?.trim().toUpperCase())
            .filter((s): s is string => Boolean(s));

        const maxArticles = 6;

        // If we have symbols, try to fetch company news per symbol and round-robin select
        if (cleanSymbols.length > 0) {
            const perSymbolArticles: Record<string, RawNewsArticle[]> = {};

            await Promise.all(
                cleanSymbols.map(async (sym) => {
                    try {
                        const url = `${FINNHUB_BASE_URL}/company-news?symbol=${encodeURIComponent(sym)}&from=${range.from}&to=${range.to}&token=${token}`;
                        const articles = await fetchJSON<RawNewsArticle[]>(url, 300);
                        perSymbolArticles[sym] = (articles || []).filter(validateArticle);
                    } catch (e) {
                        console.error('Error fetching company news for', sym, e);
                        perSymbolArticles[sym] = [];
                    }
                })
            );

            const collected: MarketNewsArticle[] = [];
            // Round-robin up to 6 picks
            for (let round = 0; round < maxArticles; round++) {
                for (let i = 0; i < cleanSymbols.length; i++) {
                    const sym = cleanSymbols[i];
                    const list = perSymbolArticles[sym] || [];
                    if (list.length === 0) continue;
                    const article = list.shift();
                    if (!article || !validateArticle(article)) continue;
                    collected.push(formatArticle(article, true, sym, round));
                    if (collected.length >= maxArticles) break;
                }
                if (collected.length >= maxArticles) break;
            }

            if (collected.length > 0) {
                // Sort by datetime desc
                collected.sort((a, b) => (b.datetime || 0) - (a.datetime || 0));
                return collected.slice(0, maxArticles);
            }
            // If none collected, fall through to general news
        }

        // General market news fallback or when no symbols provided
        const generalUrl = `${FINNHUB_BASE_URL}/news?category=general&token=${token}`;
        const general = await fetchJSON<RawNewsArticle[]>(generalUrl, 300);

        const seen = new Set<string>();
        const unique: RawNewsArticle[] = [];
        for (const art of general || []) {
            if (!validateArticle(art)) continue;
            const key = `${art.id}-${art.url}-${art.headline}`;
            if (seen.has(key)) continue;
            seen.add(key);
            unique.push(art);
            if (unique.length >= 20) break; // cap early before final slicing
        }

        const formatted = unique.slice(0, maxArticles).map((a, idx) => formatArticle(a, false, undefined, idx));
        return formatted;
    } catch (err) {
        console.error('getNews error:', err);
        throw new Error('Failed to fetch news');
    }
}

/**
 * Searches for stocks using Alpha Vantage API for Indian BSE stocks
 * @param query - Optional search query. If empty, returns popular BSE stocks (static data)
 * @returns Array of stocks with watchlist status
 * @note Empty query returns static POPULAR_BSE_STOCKS (0 API calls), 
 * Search query calls Alpha Vantage SYMBOL_SEARCH (1 API call, 30min cache)
 */
export const searchStocks = cache(async (query?: string): Promise<StockWithWatchlistStatus[]> => {
    try {
        const trimmed = typeof query === 'string' ? query.trim() : '';

        // 1: No query = return static popular BSE stocks (ZERO API CALLS)
        if (!trimmed) {
            return POPULAR_BSE_STOCKS.map((stock) => ({
                symbol: stock.symbol,
                name: stock.name,
                exchange: stock.exchange,
                type: stock.type,
                isInWatchlist: false,
            }));
        }

        // 2: Search query = call Alpha Vantage SYMBOL_SEARCH (1 API CALL)
        const token = process.env.ALPHA_VANTAGE_API_KEY;
        if (!token) {
            console.error('ALPHA_VANTAGE_API_KEY not configured');
            return [];
        }

        const url = `${ALPHA_VANTAGE_BASE_URL}?function=SYMBOL_SEARCH&keywords=${encodeURIComponent(trimmed)}&apikey=${token}`;

        // Cache for 30 minutes to reduce API calls
        const data = await fetchJSON<AlphaVantageSearchResponse>(url, 1800);

        const results = data.bestMatches || [];

        // Filter to Indian stocks only and transform to our format
        const mapped: StockWithWatchlistStatus[] = results
            .filter((match) => {
                const region = match['4. region'];
                return region && region.toLowerCase().includes('india');
            })
            .map((match) => {
                const symbol = match['1. symbol']; //ex: RELIANCE.BSE
                const name = match['2. name'];
                const type = match['3. type'];
                const exchange = extractExchange(symbol); 

                return {
                    symbol,
                    name,
                    exchange,
                    type: type === 'Equity' ? 'Stock' : type,
                    isInWatchlist: false,
                };
            })
            .slice(0, 15); // Limit to 15 results

        return mapped;
    } catch (err) {
        console.error('Error in stock search:', err);

        // Check if error is due to rate limiting
        if (err instanceof Error && err.message.includes('rate limit')) {
            console.error('Alpha Vantage rate limit reached. (free tier allows 25 calls/day)');
        }

        return [];
    }
});
