<div align="center">
  <br />
  <a href="#" target="_blank">
    <img src="./public/assets/images/dashboard_india.png" alt="OpenStockIndia Banner" />
  </a>

  ### 🇮🇳 Indian Stock Market Edition

  > **Fork Notice:** This is OpenStockIndia, a specialized fork of [OpenStock](https://github.com/Open-Dev-Society/OpenStock) by Open Dev Society, optimized specifically for the Indian stock market (BSE). This fork is maintained separately as a permanent India-focused variant (mostly for my personal use).

  © Open Dev Society (Original Project). This fork is licensed under AGPL-3.0; if you modify, redistribute, or deploy it (including as a web service), you must release your source code under the same license and credit the original authors.
  <br />
  <br/>

  <div>
    <img src="https://img.shields.io/badge/-Next.js-black?style=for-the-badge&logoColor=white&logo=next.js&color=000000" alt="Next.js badge" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6"/>
    <img src="https://img.shields.io/badge/-Tailwind%20CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=38B2AC"/>
    <img src="https://img.shields.io/badge/-shadcn/ui-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000"/>
    <img src="https://img.shields.io/badge/-Radix%20UI-black?style=for-the-badge&logoColor=white&logo=radixui&color=000000"/>
    <img src="https://img.shields.io/badge/-Better%20Auth-black?style=for-the-badge&logoColor=white&logo=betterauth&color=000000"/>
    <img src="https://img.shields.io/badge/-MongoDB-black?style=for-the-badge&logoColor=white&logo=mongodb&color=00A35C"/>
    <img src="https://img.shields.io/badge/-Inngest-black?style=for-the-badge&logoColor=white&logo=inngest&color=000000"/>
    <img src="https://img.shields.io/badge/-Nodemailer-black?style=for-the-badge&logoColor=white&logo=gmail&color=EA4335"/>
    <img src="https://img.shields.io/badge/-TradingView-black?style=for-the-badge&logoColor=white&logo=tradingview&color=2962FF"/>
    <img src="https://img.shields.io/badge/-Alpha%20Vantage-black?style=for-the-badge&logoColor=white&color=0052CC"/>
    <img src="https://img.shields.io/badge/-Finnhub-black?style=for-the-badge&logoColor=white&color=30B27A"/>
    <img src="https://img.shields.io/badge/-CodeRabbit-black?style=for-the-badge&logoColor=white&logo=coderabbit&color=9146FF"/>
  </div>
</div>

# OpenStock - India Edition

OpenStockIndia is an open-source stock market tracking platform specifically built for Indian investors. Track BSE stocks in real-time, explore detailed company insights, set personalized alerts, and access Indian market data — built openly, for everyone, forever free.

Note: OpenStockIndia is community-built and not a brokerage. Market data may be delayed based on provider rules and your configuration. Nothing here is financial advice.

## 🇮🇳 What's Different in India Edition

This fork is specifically optimized for the Indian stock market with the following enhancements:

### Key Features for Indian Investors
- **BSE Stock Integration**: Full support for Bombay Stock Exchange (BSE) stocks via TradingView Widgets and Alpha Vantage API 
- **Indian Stock Screener**: Advanced screening tools tailored for Indian equities 
- **Popular BSE Stocks**: Quick access to top Indian stocks (Reliance, TCS, HDFC Bank, Infosys, and more)
- **ETF Heatmap**: Visualize Indian ETF performance at a glance
- **Localized Experience**: Symbol formats, charts, and widgets configured for Indian markets

### Screenshots

<div align="center">

#### Dashboard with Indian (BSE) Stocks
<img src="./public/assets/images/dashboard_india.png" alt="Indian Stock Dashboard" width="800"/>

#### Indian ETF Heatmap
<img src="./public/assets/images/ETF_Heatmap.png" alt="Indian ETF Heatmap" width="800"/>

#### Indian Stock Screener
<img src="./public/assets/images/screener_india.png" alt="Indian Stock Screener" width="800"/>

#### Indian Stock Search
<img src="./public/assets/images/search_india.png" alt="Stock Search" width="800"/>

#### Indian Stock Details
<img src="./public/assets/images/stock_details_india.png" alt="Stock Details" width="800"/>

</div>

### Maintenance
This is a **permanent separate fork** maintained independently from the original OpenStock project. While we respect and credit the original Open Dev Society project, OpenStockIndia will continue to evolve specifically for Indian market needs.

**Original Project**: [OpenStock by Open Dev Society](https://github.com/Open-Dev-Society/OpenStock)

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. 🌍 [Open Dev Society Manifesto](#manifesto)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🔋 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🐳 [Docker Setup](#docker-setup)
7. 🔐 [Environment Variables](#environment-variables)
8. 🧱 [Project Structure](#project-structure)
9. 📡 [Data & Integrations](#data--integrations)
10. 🧪 [Scripts & Tooling](#scripts--tooling)
11. 🤝 [Contributing](#contributing)
12. 🛡️ [Security](#security)
13. 📜 [License](#license)
14. 🙏 [Acknowledgements](#acknowledgements)

## ✨ Introduction

OpenStockIndia is a modern stock market platform specifically designed for Indian investors, powered by Next.js (App Router), shadcn/ui and Tailwind CSS, Better Auth for authentication, MongoDB for persistence, TradingView widgets for charts and market views, Alpha Vantage for comprehensive BSE stock search and data, Finnhub for market news. This India Edition focuses exclusively on the Bombay Stock Exchange (BSE) with localized features, popular Indian stocks, screeners, and ETF tracking tailored for the Indian market.

## 🌍 Open Dev Society Manifesto <a name="manifesto"></a>

We live in a world where knowledge is hidden behind paywalls. Where tools are locked in subscriptions. Where information is twisted by bias. Where newcomers are told they’re not “good enough” to build.

We believe there’s a better way.

- Our Belief: Technology should belong to everyone. Knowledge should be open, free, and accessible. Communities should welcome newcomers with trust, not gatekeeping.
- Our Mission: Build free, open-source projects that make a real difference:
    - Tools that professionals and students can use without barriers.
    - Knowledge platforms where learning is free, forever.
    - Communities where every beginner is guided, not judged.
    - Resources that run on trust, not profit.
- Our Promise: We will never lock knowledge. We will never charge for access. We will never trade trust for money. We run on transparency, donations, and the strength of our community.
- Our Call: If you’ve ever felt you didn’t belong, struggled to find free resources, or wanted to build something meaningful — you belong here.

Because the future belongs to those who build it openly.

## ⚙️ Tech Stack

Core
- Next.js 15 (App Router), React 19
- TypeScript
- Tailwind CSS v4 (via @tailwindcss/postcss)
- shadcn/ui + Radix UI primitives
- Lucide icons

Auth & Data
- Better Auth (email/password) with MongoDB adapter
- MongoDB + Mongoose
- TradingView embeddable widgets
- Alpha Vantage API for Indian BSE stock search
- Finnhub API for market news

Automation & Comms
- Inngest (events, cron, AI inference via Gemini)
- Nodemailer (Gmail transport)
- next-themes, cmdk (command palette), react-hook-form

Language composition
- TypeScript (~93.4%), CSS (~6%), JavaScript (~0.6%)

## 🔋 Features

### 🇮🇳 India-Specific Features
- **BSE Stock Integration**
    - Comprehensive Bombay Stock Exchange (BSE) stock coverage via TradingView embeddable widgets and Alpha Vantage API for search
    - Symbol format optimized for Indian markets (SYMBOL.BSE)
- **Indian Stock Screener**
    - Screening tools tailored for Indian equities
    - Filter and discover BSE stocks based on custom criteria
- **Popular Indian Stocks**
    - Quick access to top BSE stocks (Reliance, TCS, HDFC Bank, Infosys, ICICI Bank, and more)
    - Static data for popular stocks to conserve Alpha Vantage API quota
- **Indian ETF Heatmap**
    - Visual representation of Indian ETF performance
    - Real-time heatmap for quick market insights
- **Localized Experience**
    - Symbol formats, charts, and TradingView widgets configured for BSE

### Core Features
- Authentication
    - Email/password auth with Better Auth + MongoDB adapter
    - Protected routes enforced via Next.js middleware
    - Global Search & Command Palette
    - Fast BSE stock search backed by Alpha Vantage
    - Debounced search queries with 30-minute caching
    - Cmd/Ctrl + K keyboard shortcut for quick access
- Watchlist
    - Per-user watchlist stored in MongoDB (unique symbol per user)
- Stock details
    - TradingView symbol info, candlestick/advanced charts, baseline, technicals
    - Company profile and financials widgets
- Market overview
    - Heatmap, quotes, and top stories (TradingView widgets)
- Personalized onboarding
    - Collects country, investment goals, risk tolerance, preferred industry
- Email & automation
    - AI-personalized welcome email (Gemini via Inngest)
    - Daily news summary emails (cron) personalized using user watchlists
- Polished UI
    - shadcn/ui components, Radix primitives, Tailwind v4 design tokens
    - Dark theme by default
- Keyboard shortcut
    - Cmd/Ctrl + K for quick actions/search

## 🤸 Quick Start

Prerequisites
- Node.js 20+ and pnpm or npm
- MongoDB connection string (MongoDB Atlas or local via Docker Compose)
- Alpha Vantage API key (for Indian BSE stock search - free tier: 25 calls/day, Premium may required for more search suggestions)
- Finnhub API key (optional, for news only - free tier supported)
- Gmail account for email (or update Nodemailer transport)
- Optional: Google Gemini API key (for AI-generated welcome intros)

Clone and install
```bash
git clone https://github.com/Open-Dev-Society/OpenStock.git
cd OpenStock

# choose one:
pnpm install
# or
npm install
```

Configure environment
- Create a `.env` file (see [Environment Variables](#environment-variables)).
- Verify DB connectivity:
```bash
pnpm test:db
# or
npm run test:db
```

Run development
```bash
# Next.js dev (Turbopack)
pnpm dev
# or
npm run dev
```

Run Inngest locally (workflows, cron, AI)
```bash
npx inngest-cli@latest dev
```

Build & start (production)
```bash
pnpm build && pnpm start
# or
npm run build && npm start
```

Open http://localhost:3000 to view the app.

## 🐳 Docker Setup

You can run OpenStock and MongoDB easily with Docker Compose.

1) Ensure Docker and Docker Compose are installed.

2) docker-compose.yml includes two services:
- openstock (this app)
- mongodb (MongoDB database with a persistent volume)

3) Create your `.env` (see examples below). For the Docker setup, use a local connection string like:
```env
MONGODB_URI=mongodb://root:example@mongodb:27017/openstock?authSource=admin
```

4) Start the stack:
```bash
# from the repository root
docker compose up -d mongodb && docker compose up -d --build
```

5) Access the app:
- App: http://localhost:3000
- MongoDB is available inside the Docker network at host mongodb:27017

Notes
- The app service depends_on the mongodb service.
- Credentials are defined in Compose for the MongoDB root user; authSource=admin is required on the connection string for root.
- Data persists across restarts via the docker volume.

Optional: Example MongoDB service definition used in this project:
```yaml
services:
  mongodb:
    image: mongo:7
    container_name: mongodb
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: example
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5

volumes:
  mongo-data:
```

## 🔐 Environment Variables

Create `.env` at the project root. Choose either a hosted MongoDB (Atlas) URI or the local Docker URI.

Hosted (MongoDB Atlas):
```env
# Core
NODE_ENV=development

# Database (Atlas)
MONGODB_URI=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Alpha Vantage (for Indian BSE stock search)
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key
ALPHA_VANTAGE_BASE_URL=https://www.alphavantage.co/query

# Finnhub (for news only)
FINNHUB_API_KEY=your_finnhub_key
# Optional client-exposed variant if needed by client code:
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# Inngest AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# Email (Nodemailer via Gmail; consider App Passwords if 2FA)
NODEMAILER_EMAIL=youraddress@gmail.com
NODEMAILER_PASSWORD=your_gmail_app_password
```

Local (Docker Compose) MongoDB:
```env
# Core
NODE_ENV=development

# Database (Docker)
MONGODB_URI=mongodb://root:example@mongodb:27017/openstock?authSource=admin

# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Alpha Vantage (for Indian BSE stock search)
ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key
ALPHA_VANTAGE_BASE_URL=https://www.alphavantage.co/query

# Finnhub (for news only)
FINNHUB_API_KEY=your_finnhub_key
NEXT_PUBLIC_FINNHUB_API_KEY=
FINNHUB_BASE_URL=https://finnhub.io/api/v1

# Inngest AI (Gemini)
GEMINI_API_KEY=your_gemini_api_key

# Email (Nodemailer via Gmail; consider App Passwords if 2FA)
NODEMAILER_EMAIL=youraddress@gmail.com
NODEMAILER_PASSWORD=your_gmail_app_password
```

Notes
- Keep private keys server-side whenever possible.
- If using `NEXT_PUBLIC_` variables, remember they are exposed to the browser.
- In production, prefer a dedicated SMTP provider over a personal Gmail.
- Do not hardcode secrets in the Dockerfile; use `.env` and Compose.

## 🧱 Project Structure

```
app/
  (auth)/
    layout.tsx
    sign-in/page.tsx
    sign-up/page.tsx
  (root)/
    layout.tsx
    page.tsx
    help/page.tsx
    stocks/[symbol]/page.tsx
  api/inngest/route.ts
  globals.css
  layout.tsx
components/
  ui/…          # shadcn/radix primitives (button, dialog, command, input, etc.)
  forms/…       # InputField, SelectField, CountrySelectField, FooterLink
  Header.tsx, Footer.tsx, SearchCommand.tsx, WatchlistButton.tsx, …
database/
  models/watchlist.model.ts
  mongoose.ts
lib/
  actions/…     # server actions (auth, finnhub, user, watchlist)
  better-auth/…
  inngest/…     # client, functions, prompts
  nodemailer/…  # transporter, email templates
  constants.ts, utils.ts
scripts/
  test-db.mjs
types/
  global.d.ts
next.config.ts          # i.ibb.co image domain allowlist
postcss.config.mjs      # Tailwind v4 postcss setup
components.json         # shadcn config
public/assets/images/   # logos and screenshots
```

## 📡 Data & Integrations

- Finnhub
    - Stock search, company profiles, and market news.
    - Set `FINNHUB_API_KEY` and `FINNHUB_BASE_URL` (default: https://finnhub.io/api/v1).
    - Free tiers may return delayed quotes; respect rate limits and terms.

- TradingView
    - Embeddable widgets used for charts, heatmap, quotes, and timelines.
    - External images from `i.ibb.co` are allowlisted in `next.config.ts`.

- Better Auth + MongoDB
    - Email/password with MongoDB adapter.
    - Session validation via middleware; most routes are protected, with public exceptions for `sign-in`, `sign-up`, assets and Next internals.

- Inngest
    - Workflows:
        - `app/user.created` → AI-personalized Welcome Email
        - Cron `0 12 * * *` → Daily News Summary per user
    - Local dev: `npx inngest-cli@latest dev`.

- Email (Nodemailer)
    - Gmail transport. Update credentials or switch to your SMTP provider.
    - Templates for welcome and news summary emails.

## 🧪 Scripts & Tooling

Package scripts
- `dev`: Next.js dev server with Turbopack
- `build`: Production build (Turbopack)
- `start`: Run production server
- `lint`: ESLint
- `test:db`: Validate DB connectivity

Developer experience
- TypeScript strict mode
- Tailwind CSS v4 (no separate tailwind.config needed)
- shadcn/ui components with Radix primitives
- cmdk command palette, next-themes, lucide-react icons

## 🤝 Contributing

You belong here. Whether you’re a student, a self-taught dev, or a seasoned engineer — contributions are welcome.

- Open an issue to discuss ideas and bugs
- Look for “good first issue” or “help wanted”
- Keep PRs focused; add screenshots for UI changes
- Be kind, guide beginners, no gatekeeping — that’s the ODS way

## 🛡️ Security

If you discover a vulnerability:
- Do not open a public issue
- Email: opendevsociety@cc.cc
- We’ll coordinate responsible disclosure and patch swiftly

## 📜 License

OpenStock is and will remain free and open for everyone. This project is licensed under the AGPL-3.0 License - see the LICENSE file for details.

## 🙏 Acknowledgements

### OpenStockIndia Fork Acknowledgements
- **[Open Dev Society](https://github.com/Open-Dev-Society)** - For creating the original OpenStock project that serves as the foundation for this India Edition
- **[OpenStock Original Project](https://github.com/Open-Dev-Society/OpenStock)** - The upstream open-source stock market tracking platform

### Technology & Service Acknowledgements
- TradingView for embeddable market widgets configured for Indian markets
- Alpha Vantage for providing comprehensive BSE stock data API that powers serarch
- Finnhub for accessible market data and news
- shadcn/ui, Radix UI, Tailwind CSS, Next.js community
- Inngest for dependable background jobs and workflows
- Better Auth for simple and secure authentication
- All contributors who make open tools possible

— Built openly, for Indian investors, forever free.

> **Fork License Notice:** This is a fork of OpenStock by Open Dev Society. Both the original project and this fork are licensed under AGPL-3.0. If you modify, redistribute, or deploy this software (including as a web service), you must release your source code under the same license and credit both the original OpenStock authors (Open Dev Society) and OpenStockIndia contributors.

## Our Honourable Contributors
- [ravixalgorithm](https://github.com/ravixalgorithm) - Developed the entire application from the ground up, including authentication, UI design, API and AI integration, and deployment.
- [Priyanshuu00007](https://github.com/Priyanshuu00007) - Created the official OpenStock logo and contributed to the project’s visual identity.
- [chinnsenn](https://github.com/chinnsenn) - Set up Docker configuration for the repository, ensuring a smooth development and deployment process.
- [koevoet1221](https://github.com/koevoet1221) - Resolved MongoDB Docker build issues, improving the project’s overall stability and reliability.

### OpenStockIndia (India Edition) Contributors
- [Gopinathsgn](https://github.com/Gopinathsgn) - Created OpenStockIndia fork with comprehensive Indian BSE market support, integrated Alpha Vantage API for BSE stock search, developed Indian stock screener interface, implemented ETF heatmap for Indian ETFs, added popular BSE stocks feature, and configured localized experience for Indian investors.

## Special thanks
Huge thanks to [Adrian Hajdin (JavaScript Mastery)](https://github.com/adrianhajdin) — his excellent Stock Market App tutorial was instrumental in building OpenStock for the open-source community under the Open Dev Society.

GitHub: [adrianhajdin](https://github.com/adrianhajdin)
YouTube tutorial: [Stock Market App Tutorial](https://www.youtube.com/watch?v=gu4pafNCXng)
YouTube channel: [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
