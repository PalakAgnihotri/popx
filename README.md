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
