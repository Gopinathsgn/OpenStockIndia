/**
 * Converts stock symbol format
 * Alpha Vantage format: "RELIANCE.BSE" (symbol.exchange)
 * TradingView format: "BSE:RELIANCE" (exchange:symbol)
 */

/**
 * Converts Alpha Vantage symbol format to TradingView format
 * @param alphaVantageSymbol - Symbol in format "RELIANCE.BSE"
 * @returns Symbol in format "BSE:RELIANCE"
 */
export function toTradingViewFormat(alphaVantageSymbol: string): string {
    if (!alphaVantageSymbol) return 'BSE:SENSEX';
    const parts = alphaVantageSymbol.split('.');

    if (parts.length === 2) {
        const [symbol, exchange] = parts;
        return `${exchange}:${symbol}`;
    }
    return alphaVantageSymbol;
}

/**
 * Extracts exchange from Alpha Vantage symbol format
 * @param alphaVantageSymbol - Symbol in format "RELIANCE.BSE"
 * @returns Exchange code like "BSE"
 */
export function extractExchange(alphaVantageSymbol: string): string {
    const parts = alphaVantageSymbol.split('.');
    return parts.length === 2 ? parts[1] : 'BSE';
}

/**
 * Extracts plain symbol from Alpha Vantage format (without exchange suffix)
 * @param alphaVantageSymbol - Symbol in format "RELIANCE.BSE"
 * @returns Plain symbol like "RELIANCE"
 */
export function extractSymbol(alphaVantageSymbol: string): string {
    return alphaVantageSymbol.split('.')[0];
}

/**
 * Converts TradingView symbol format to Alpha Vantage format
 * @param tradingViewSymbol - Symbol in format "BSE:RELIANCE"
 * @returns Symbol in format "RELIANCE.BSE"
 */
export function fromTradingViewFormat(tradingViewSymbol: string): string {
    if (!tradingViewSymbol) return '';

    const parts = tradingViewSymbol.split(':');
    if (parts.length === 2) {
        const [exchange, symbol] = parts;
        return `${symbol}.${exchange}`;
    }

    // If already in Alpha Vantage format or invalid format, return as-is
    return tradingViewSymbol;
}
