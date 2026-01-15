# Cash Formula

A production-ready members-only SaaS web application that lets users create premium affiliate review pages for Amazon products using AI.

![Cash Formula](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Supabase](https://img.shields.io/badge/Supabase-Auth%20%2B%20DB-3ECF8E?style=for-the-badge&logo=supabase)

## Features

- 🔍 **Amazon Product Search** - Search millions of products via RapidAPI
- 🤖 **AI-Generated Content** - Create professional review pages with ChatGPT
- 📄 **Premium Public Pages** - Standalone, shareable review pages with affiliate links
- 🎨 **Futuristic Dark UI** - Glassmorphism, animations, and proof widgets
- 📱 **Mobile-First Design** - Fully responsive across all devices
- 🔐 **Secure Authentication** - Supabase Auth with RLS policies
- 📊 **Dynamic Proof Engine** - Animated tickers, proof cards, and live popups

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Animations**: Framer Motion
- **Validation**: Zod
- **APIs**: RapidAPI (Amazon Data, ChatGPT)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- RapidAPI account with subscriptions to:
  - [Amazon Online Data API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/amazon-online-data-api)
  - [ChatGPT-42](https://rapidapi.com/rphrp1985/api/chatgpt-42)

### Installation

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd cash-formula
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RAPIDAPI_KEY=your_rapidapi_key
RAPIDAPI_AMAZON_HOST=amazon-online-data-api.p.rapidapi.com
RAPIDAPI_CHATGPT_HOST=chatgpt-42.p.rapidapi.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. **Set up Supabase database**

Go to your Supabase project's SQL Editor and run the migration file:

```bash
# Copy contents from:
supabase/migrations/001_initial_schema.sql
```

5. **Enable Supabase Auth**

In your Supabase dashboard:
- Go to Authentication > Settings
- Enable Email provider
- Configure email templates as needed

6. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cash-formula/
├── app/
│   ├── (app)/                    # Authenticated app routes
│   │   ├── layout.tsx            # App layout with sidebar
│   │   └── app/
│   │       ├── page.tsx          # Command Center
│   │       ├── build/            # Build Profit Page
│   │       ├── pages/            # My Money Pages
│   │       ├── traffic/          # Traffic Boost
│   │       ├── training/         # Cash Formula Training
│   │       ├── gold/             # Gold: DFY Profits
│   │       ├── platinum/         # Platinum: Viral Engine
│   │       ├── system/           # $1K-$5K System
│   │       └── support/          # Support & Trust
│   ├── (auth)/                   # Auth routes
│   │   ├── login/
│   │   └── signup/
│   ├── api/                      # API route handlers
│   │   ├── amazon/
│   │   │   ├── search/
│   │   │   └── reviews/
│   │   ├── generate/
│   │   │   ├── review/
│   │   │   └── post/
│   │   └── pages/[slug]/
│   ├── p/[slug]/                 # Public review pages
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   └── ui/                       # UI components
│       ├── Sidebar.tsx
│       ├── PromoCard.tsx
│       ├── ProofWidget.tsx
│       ├── ProofPopup.tsx
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── StatsCard.tsx
│       └── VideoPlaceholder.tsx
├── lib/
│   ├── supabase/                 # Supabase clients
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── types.ts                  # TypeScript types
│   ├── validations.ts            # Zod schemas
│   └── utils.ts                  # Utility functions
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
└── middleware.ts                 # Next.js middleware
```

## Database Schema

### Tables

- **profiles** - User profiles linked to auth.users
- **pages** - User-created review pages
- **dfy_pages** - Done-for-you pages (admin seeded)
- **viral_posts** - Generated social media posts

### RLS Policies

All tables have Row Level Security enabled:
- Users can only access their own data
- DFY pages are readable by all authenticated users
- Public pages are accessed via server-side API with service role

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/amazon/search` | GET | Search Amazon products |
| `/api/amazon/reviews` | GET | Fetch product reviews |
| `/api/generate/review` | POST | Generate AI review content |
| `/api/generate/post` | POST | Generate viral social post |
| `/api/pages/[slug]` | GET | Get public page data |

## Routes

### Public Routes
- `/` - Landing page
- `/login` - Sign in
- `/signup` - Create account
- `/p/[slug]` - Public review pages

### Protected Routes (require auth)
- `/app` - Command Center
- `/app/build` - Build Profit Page
- `/app/pages` - My Money Pages
- `/app/traffic` - Traffic Boost
- `/app/training` - Training Videos
- `/app/gold` - Done-For-You Pages
- `/app/platinum` - Viral Engine
- `/app/system` - $1K-$5K System
- `/app/support` - Support & Trust

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

Build the production bundle:

```bash
npm run build
npm start
```

## Security

- API keys are stored in environment variables (server-side only)
- Supabase RLS policies protect all data
- Input validation with Zod on all API routes
- Rate limiting on generation endpoints

## License

MIT License - feel free to use this for your own projects.

## Support

For issues or questions, use the in-app support form or create a GitHub issue.

