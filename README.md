# Pastebin Lite

A minimal pastebin application built with Next.js and PostgreSQL (Neon).

## Features

- Create text pastes with shareable links
- Optional expiration by time (minutes)
- Optional expiration by view count
- Clean, modern UI with glassmorphism design
- View tracking

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your Neon database:
   - Create a free account at [Neon](https://neon.tech)
   - Create a new project and database
   - Copy the connection string

3. Create `.env.local` file:
```
DATABASE_URL="your-neon-connection-string"
```

4. Run the database schema:
   - Connect to your Neon database console
   - Execute the SQL from `schema.sql`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add the `DATABASE_URL` environment variable
4. Deploy!

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Neon)
- **Deployment**: Vercel

## API Endpoints

### Create Paste
```
POST /api/paste
Body: {
  content: string,
  expiresIn?: number (minutes),
  maxViews?: number
}
```

### Get Paste
```
GET /api/paste/[id]
```
