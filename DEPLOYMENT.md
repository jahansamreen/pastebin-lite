# Deployment Guide

## Step 1: Set Up Neon Database

1. Go to [Neon](https://neon.tech) and create a free account
2. Create a new project
3. Copy your connection string (it looks like: `postgresql://username:password@host/database?sslmode=require`)
4. In the Neon SQL Editor, run the following SQL:

```sql
CREATE TABLE IF NOT EXISTS pastes (
  id TEXT PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP,
  max_views INTEGER,
  view_count INTEGER DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_pastes_id ON pastes(id);
CREATE INDEX IF NOT EXISTS idx_pastes_expires_at ON pastes(expires_at);
```

## Step 2: Deploy to Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit - Pastebin Lite"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. In the "Environment Variables" section, add:
   - Key: `DATABASE_URL`
   - Value: Your Neon connection string
6. Click "Deploy"

## Step 3: Test Your Deployment

Once deployed, Vercel will give you a URL (e.g., `https://your-app.vercel.app`)

Test the application:
1. Visit the URL
2. Create a paste
3. Verify you can view it
4. Test expiration features

## Candidate ID

Remember to submit with Candidate ID: **fwak30T2A**
