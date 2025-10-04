# Setup Checklist ✅

Follow this checklist to get your dashboard running. Check off each item as you complete it.

## Prerequisites

- [ ] Node.js is installed on your computer
  - Check: Open terminal and run `node --version`
  - If not installed: Download from [nodejs.org](https://nodejs.org)

- [ ] You have a code editor (VS Code recommended)
  - Download from [code.visualstudio.com](https://code.visualstudio.com)

- [ ] You can open a terminal/command prompt
  - Windows: Search for "Command Prompt" or "PowerShell"
  - Mac: Search for "Terminal"

## Quick Start (Frontend Only)

- [ ] Open terminal in the project folder `D:\admin_dashboard`

- [ ] Install frontend dependencies:
  ```bash
  npm install
  ```
  Wait for it to finish (might take 1-2 minutes)

- [ ] Start the development server:
  ```bash
  npm run dev
  ```

- [ ] Open your browser to: `http://localhost:5173`

- [ ] You should see the dashboard! 🎉

## Full Setup (Frontend + Backend)

### Backend Setup:

- [ ] Open terminal in the project folder

- [ ] Go to server folder:
  ```bash
  cd server
  ```

- [ ] Install backend dependencies:
  ```bash
  npm install
  ```

- [ ] Create `.env` file in the `server` folder with:
  ```
  PORT=3001
  FRONTEND_URL=http://localhost:5173
  NODE_ENV=development
  ```

- [ ] Start the backend server:
  ```bash
  npm run dev
  ```

- [ ] Keep this terminal open - server should say "Server is running on port 3001"

### Frontend Setup:

- [ ] Open a NEW terminal (keep backend running)

- [ ] Navigate back to project root:
  ```bash
  cd ..
  ```
  Or open new terminal in `D:\admin_dashboard`

- [ ] Create `.env` file in the main folder with:
  ```
  VITE_API_URL=http://localhost:3001
  ```

- [ ] Install frontend dependencies (if not done already):
  ```bash
  npm install
  ```

- [ ] Start the frontend:
  ```bash
  npm run dev
  ```

- [ ] Open browser to: `http://localhost:5173`

- [ ] Dashboard should load with data from backend! 🎉

## Testing

- [ ] Can you see stats cards (Total Students, Active Courses, etc.)?
- [ ] Are the numbers loading (not showing "Loading..." forever)?
- [ ] Can you see the activity chart?
- [ ] Is the course table showing data?
- [ ] Try clicking sidebar menu items
- [ ] Try searching for a course in the course table
- [ ] Open browser console (F12) - no red errors?

## Troubleshooting

If something doesn't work:

- [ ] Both servers running? (You need 2 terminals for full setup)
- [ ] Check for error messages in terminal
- [ ] Check browser console (F12) for errors
- [ ] `.env` files created correctly?
- [ ] Try stopping servers (Ctrl+C) and restarting
- [ ] Run `npm install` again
- [ ] Make sure ports 3001 and 5173 aren't used by other apps

## What's Next?

- [ ] Read `GETTING_STARTED.md` for more details
- [ ] Read `ARCHITECTURE.md` to understand how it works
- [ ] Explore the code in `src/components/`
- [ ] Try modifying the mock data in `server/data/mockData.js`
- [ ] Read `DEPLOYMENT.md` when ready to deploy online

## Quick Commands

**Stop a server:**
```
Ctrl + C (in the terminal)
```

**Restart after changes:**
```bash
# Frontend
npm run dev

# Backend
cd server
npm run dev
```

**See what's running on ports:**
```bash
# Windows
netstat -ano | findstr :3001
netstat -ano | findstr :5173

# Mac/Linux
lsof -i :3001
lsof -i :5173
```

---

✨ **You're all set!** Your admin dashboard should now be running.
