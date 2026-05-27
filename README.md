# PopX

A React app with landing, login, registration, and account settings screens.

## Tech Stack
- React 19 + React Router v7
- Vite
- CSS Modules

## Project Structure

```
src/
├── context/
│   └── UserContext.jsx       # Global user state
├── pages/
│   ├── Home.jsx              # Landing page
│   ├── Login.jsx             # Sign in
│   ├── Register.jsx          # Create account
│   ├── Settings.jsx          # Account settings
│   ├── Form.module.css       # Shared form styles
│   └── Settings.module.css
├── App.jsx                   # Router setup
├── main.jsx                  # Entry point
└── index.css                 # Global styles
```

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Vercel

**Option 1 — Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option 2 — Vercel Dashboard**
1. Push to a GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Framework preset: Vite (auto-detected)
4. Click Deploy

## Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

## Routes

| Path        | Page             |
|-------------|------------------|
| /           | Landing / Home   |
| /login      | Sign In          |
| /register   | Create Account   |
| /settings   | Account Settings |
