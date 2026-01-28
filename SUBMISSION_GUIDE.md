# Complete Submission Guide - Pastebin Lite

## 📋 Overview

This guide will walk you through the complete process of deploying and submitting your assignment. Follow each step carefully.

---

## Step 1: Set Up Neon Database (5-10 minutes)

### 1.1 Create Neon Account
1. Go to **https://neon.tech**
2. Click "Sign Up" (you can use GitHub, Google, or email)
3. Verify your email if needed

### 1.2 Create Database Project
1. After logging in, click **"Create a project"** or **"New Project"**
2. Give it a name: `pastebin-lite`
3. Select region closest to you
4. Click **"Create project"**

### 1.3 Run Database Schema
1. In your Neon dashboard, find **"SQL Editor"** in the left sidebar
2. Copy the SQL from the file `schema.sql` in your project folder
3. Paste it into the SQL Editor
4. Click **"Run"** or press Ctrl+Enter
5. You should see success message: "CREATE TABLE" and "CREATE INDEX"

### 1.4 Get Connection String
1. In Neon dashboard, go to **"Dashboard"** or **"Connection Details"**
2. Find the **"Connection string"** section
3. Make sure **"Pooled connection"** is selected
4. Click **"Copy"** to copy the connection string
5. It looks like: `postgresql://username:password@ep-xxx.region.aws.neon.tech/dbname?sslmode=require`
6. **Save this somewhere safe** - you'll need it for Vercel

---

## Step 2: Push Code to GitHub (5 minutes)

### 2.1 Create GitHub Repository
1. Go to **https://github.com**
2. Click the **"+"** icon in top-right → **"New repository"**
3. Name it: `pastebin-lite`
4. Keep it **Public** (or Private if you prefer)
5. **DO NOT** initialize with README (we already have code)
6. Click **"Create repository"**
7. Copy the repository URL (looks like: `https://github.com/yourusername/pastebin-lite.git`)

### 2.2 Push Your Code
Open PowerShell/Terminal in your project folder and run:

```bash
# Navigate to project folder
cd "c:\Users\Samreen Jahan\Downloads\Home assignment\pastebin-lite"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Pastebin Lite assignment"

# Set main branch
git branch -M main

# Add your GitHub repo (replace with YOUR repo URL)
git remote add origin https://github.com/YOUR-USERNAME/pastebin-lite.git

# Push to GitHub
git push -u origin main
```

**Note:** If you get an error about authentication, you may need to:
- Use GitHub Desktop app (easier option)
- Or set up a Personal Access Token

---

## Step 3: Deploy to Vercel (5 minutes)

### 3.1 Create Vercel Account
1. Go to **https://vercel.com**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub

### 3.2 Import Project
1. In Vercel dashboard, click **"Add New..."** → **"Project"**
2. You'll see your GitHub repositories
3. Find **"pastebin-lite"** and click **"Import"**

### 3.3 Configure Project
1. **Framework Preset**: Should auto-detect as "Next.js" ✓
2. **Root Directory**: Leave as `./`
3. **Build Command**: Leave default (`next build`)
4. **Output Directory**: Leave default (`.next`)

### 3.4 Add Environment Variable
1. Click **"Environment Variables"** section
2. Add a new variable:
   - **Name**: `DATABASE_URL`
   - **Value**: Paste your Neon connection string (from Step 1.4)
3. Make sure it's set for **Production**, **Preview**, and **Development**

### 3.5 Deploy
1. Click **"Deploy"**
2. Wait 1-2 minutes for deployment
3. You'll see "Congratulations!" when done
4. Click **"Visit"** to see your live application

---

## Step 4: Test Your Deployment (2 minutes)

### 4.1 Test Creating a Paste
1. Visit your Vercel URL (e.g., `https://pastebin-lite-xxx.vercel.app`)
2. Enter some test text in the text area
3. Optionally set expiration (e.g., 60 minutes or 5 views)
4. Click **"Create Paste"**
5. You should be redirected to a page showing your paste

### 4.2 Test Viewing
1. Copy the URL of the paste page
2. Open it in a new browser tab/window
3. Verify the content displays correctly
4. Check that view count increments

### 4.3 Test Expiration (Optional)
1. Create a paste with "Max Views: 1"
2. View it once
3. Try to view it again - should show "Paste has expired"

---

## Step 5: Submit Your Assignment

### 5.1 Prepare Submission Details

You'll need to provide:

1. **Deployed Application URL**: Your Vercel URL (e.g., `https://pastebin-lite-xxx.vercel.app`)
2. **GitHub Repository URL**: Your GitHub repo (e.g., `https://github.com/yourusername/pastebin-lite`)
3. **Candidate ID**: `fwak30T2A`

### 5.2 Submit via Email/Portal

Based on the email you received, submit through the link provided:
- **Exercise Link**: Use the link from your email
- Or reply to the email from Pooja Banagiri (HR Team)

Include in your submission:
```
Candidate ID: fwak30T2A
Live Application: [Your Vercel URL]
Source Code: [Your GitHub URL]

Notes:
- Built with Next.js 15, TypeScript, and Tailwind CSS
- Database: Neon PostgreSQL
- Features: Paste creation, time/view-based expiration, view tracking
```

---

## 🆘 Troubleshooting

### Issue: Git push fails with authentication error
**Solution**: 
- Use GitHub Desktop app instead
- Or create a Personal Access Token at github.com/settings/tokens

### Issue: Vercel deployment fails
**Solution**: 
- Check that DATABASE_URL is set correctly in Vercel
- Make sure the connection string includes `?sslmode=require`
- Check build logs in Vercel dashboard

### Issue: Application shows database errors
**Solution**: 
- Verify you ran the schema.sql in Neon
- Check DATABASE_URL is correct (no extra spaces)
- Make sure Neon database is active (not paused)

### Issue: Can't find GitHub repo in Vercel
**Solution**: 
- Make sure you authorized Vercel to access GitHub
- Refresh the repository list
- Check repository is not private (or grant Vercel access to private repos)

---

## ✅ Checklist Before Submission

- [ ] Neon database created and schema executed
- [ ] Code pushed to GitHub
- [ ] Vercel deployment successful
- [ ] Can create pastes on live site
- [ ] Can view pastes on live site
- [ ] Expiration features work
- [ ] Have Vercel URL ready
- [ ] Have GitHub URL ready
- [ ] Submitted with Candidate ID: fwak30T2A

---

## 📞 Need Help?

If you get stuck:
1. Check the troubleshooting section above
2. Review the error messages carefully
3. Check Vercel deployment logs
4. Verify all environment variables are set

Good luck with your submission! 🚀
