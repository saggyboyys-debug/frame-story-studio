# FriVaar Productions — Official Website

A cinematic company profile and portfolio website for FriVaar Productions — a registered music video and sound recording production company based in Bassi, Punjab, India.

---

## Project Overview

This is a full-stack web application built with React on the frontend and Vercel Serverless Functions on the backend. The site showcases the company's portfolio of Punjabi music videos, details their services, tells the brand story, and includes a working contact form that delivers inquiries directly to the company's inbox via email.

**Live site:** https://frivaarproductions.com *(once deployed)*

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool and dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| React Router DOM | Client-side routing |
| Lucide React | Icon library |

### Backend
| Technology | Purpose |
|---|---|
| Vercel Serverless Functions | API endpoints (no separate server) |
| Nodemailer | Email delivery via SMTP |
| Gmail SMTP | Email provider |

### Deployment
| Service | Purpose |
|---|---|
| Vercel | Frontend + serverless functions hosting |
| GitHub | Version control and CI/CD |

---

## Pages

| Page | Route | Description |
|---|---|---|
| Home | / | Hero, services overview, featured work, about preview, CTA |
| Portfolio | /portfolio | 9 real projects, filter by category, YouTube modal |
| Services | /services | 6 services in alternating layout |
| About | /about | Company story, values, founders, quote |
| Contact | /contact | Contact form with email delivery |

---

## Running Locally

### Prerequisites
- Node.js 18+
- npm
- A Gmail account (for contact form email delivery)

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/frame-story-studio.git
cd frame-story-studio
```

### Step 2 — Install dependencies

```bash
npm install
```

### Step 3 — Set up environment variables

Copy the example env file:

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_gmail_app_password
CONTACT_EMAIL=frivaarproductions@gmail.com
```

See the Gmail App Password section below for how to get SMTP_PASS.

### Step 4 — Run the development server

```bash
npm run dev
```

The site will be available at: http://localhost:8080

The `/api` routes are proxied to work locally via the Vite dev server proxy config in `vite.config.ts`.

---

## Setting Up Gmail App Password (for Nodemailer)

Gmail requires an App Password instead of your normal Gmail password when using SMTP with two-factor authentication.

**Step-by-step:**

1. Go to your Google Account: https://myaccount.google.com
2. Click **Security** in the left sidebar
3. Under "How you sign in to Google", click **2-Step Verification** and make sure it is ON
4. Go back to Security and scroll to **App passwords** (search for it if needed)
5. Click **App passwords**
6. Under "Select app" choose **Mail**
7. Under "Select device" choose **Other** and type "FriVaar Website"
8. Click **Generate**
9. Copy the 16-character password shown
10. Paste it as the value of `SMTP_PASS` in your `.env.local`

**Important:** This App Password is shown only once. Save it immediately.

---

## Deploying to Vercel

### Step 1 — Push to GitHub
Make sure your latest code is pushed to GitHub.

### Step 2 — Import to Vercel
1. Go to https://vercel.com
2. Click **Add New Project**
3. Select your GitHub repository
4. Click **Deploy** — Vercel auto-detects Vite

### Step 3 — Add Environment Variables
In the Vercel dashboard for your project:
1. Go to **Settings** → **Environment Variables**
2. Add each variable from your `.env.example`:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
   - `CONTACT_EMAIL`
3. Set them for **Production**, **Preview**, and **Development** environments
4. Click **Save** then **Redeploy**

### Step 4 — Connect Custom Domain
1. In Vercel dashboard go to **Settings** → **Domains**
2. Add your domain: `frivaarproductions.com`
3. Vercel will show you DNS records to add
4. Log into your domain registrar (Namecheap/GoDaddy etc.)
5. Add the DNS records Vercel gives you
6. Wait 10–30 minutes for DNS to propagate
7. Vercel automatically provisions an SSL certificate

---

## Project Structure

```
frame-story-studio/
├── api/                        # Vercel Serverless Functions
│   ├── contact.js              # POST /api/contact (sends email)
│   └── health.js               # GET /api/health (status check)
├── public/                     # Static assets
├── src/
│   ├── assets/                 # Images and logo
│   ├── components/
│   │   ├── home/               # Homepage sections
│   │   ├── layout/             # Navbar and Footer
│   │   ├── portfolio/          # VideoCard, VideoModal, FilterTabs
│   │   └── ui/                 # Reusable UI components
│   ├── data/
│   │   ├── projects.ts         # All 9 portfolio videos
│   │   └── services.ts         # Services data
│   ├── hooks/                  # Custom React hooks
│   ├── pages/                  # Route-level page components
│   ├── App.tsx                 # Router setup
│   ├── index.css               # Global styles and theme variables
│   └── main.tsx                # React entry point
├── .env.example                # Environment variable template
├── .gitignore                  # Includes .env and .env.local
├── vercel.json                 # Vercel deployment configuration
├── vite.config.ts              # Vite config with dev proxy
├── tailwind.config.ts          # Tailwind theme (gold + dark palette)
└── package.json
```

---

## Adding New Videos to the Portfolio

Edit the file: `src/data/projects.ts`

Add a new object to the projects array:

```typescript
{
  id: 10,
  title: "Your Video Title",
  artist: "Artist Name",
  category: "Music Videos",  // or "Rap"
  year: "2026",
  youtubeId: "VIDEO_ID_FROM_YOUTUBE_URL",
  thumbnail: "https://img.youtube.com/vi/VIDEO_ID_FROM_YOUTUBE_URL/maxresdefault.jpg"
}
```

The YouTube ID is the part after `v=` in the YouTube URL.
Example: `youtube.com/watch?v=Kf1IE7YSVFw` → ID is `Kf1IE7YSVFw`

Commit and push to GitHub — Vercel auto-deploys within 30 seconds.

---

## Brand Guidelines

| Element | Value |
|---|---|
| Primary background | #0A0A0A |
| Surface | #111111 |
| Card | #1A1A1A |
| Gold accent | #D4A017 |
| Gold hover | #F5C842 |
| White text | #F0F0F0 |
| Muted text | #888888 |
| Borders | #2A2A2A |
| Heading font | Cinzel (serif) |
| Body font | Inter (sans-serif) |

---

## Social Media

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/fvproductions_5/ |
| Facebook | https://www.facebook.com/p/FriVaar-Productions-100065422062991/ |
| YouTube | https://www.youtube.com/channel/UCdWamqRiDXmN7Nq7FU97IEA |

---

## License

© 2025 FriVaar Productions. All rights reserved.
