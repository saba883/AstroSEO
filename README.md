# AstroSEO - Business Formation Services in Saudi Arabia

A modern web application for business formation and registration services in Saudi Arabia, built with React, TypeScript, and Vite.

## Features

- 🚀 Professional service pages for LLC formation, MISA licenses, and more
- 📍 Location-specific pages for major Saudi cities
- 💳 Interactive cost calculator
- 📱 Fully responsive design
- 🎨 Modern UI with shadcn/ui components
- 🔍 SEO optimized
- 🌐 Multi-language ready

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Drizzle ORM
- **Database**: PostgreSQL (Neon)
- **Deployment**: Netlify

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/saba883/AstroSEO.git
cd AstroSEO
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your credentials:
```env
DATABASE_URL=your_neon_database_url
OPENAI_API_KEY=your_openai_api_key
SESSION_SECRET=your_random_session_secret
```

5. Push database schema:
```bash
npm run db:push
```

6. Seed the database (optional):
```bash
npm run db:seed
```

7. Start the development server:
```bash
npm run dev
```

## Deployment to Netlify

### Method 1: Deploy with Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod --dir=dist/public
```

### Method 2: Deploy via GitHub Integration

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/public`
   - **Node version**: 20

3. Add environment variables in Netlify dashboard:
   - `DATABASE_URL`
   - `OPENAI_API_KEY`
   - `SESSION_SECRET`
   - `NODE_ENV=production`

4. Deploy!

## Project Structure

```
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities
│   └── public/          # Static assets
├── server/              # Express backend
│   ├── routes.ts        # API routes
│   └── storage.ts       # Database queries
├── shared/              # Shared types and schemas
└── netlify.toml         # Netlify configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema
- `npm run db:seed` - Seed database with sample data

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For business inquiries: +966 50 768 8714

---

Built with ❤️ for businesses in Saudi Arabia
