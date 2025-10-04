# 🚀 START HERE - Your First Time Setup

## Choose Your Path:

### 🟢 Path A: EASY (Recommended for First Time)
**Just want to see it working? Start here!**

1. Open terminal in this folder (`D:\admin_dashboard`)
2. Run these commands one at a time:
   ```bash
   npm install
   npm run dev
   ```
3. Open browser: `http://localhost:5173`
4. Done! ✅

**Result**: Dashboard with fake data built-in

---

### 🔵 Path B: FULL SETUP (Backend + Frontend)
**Want the complete experience? Do this!**

#### Terminal 1 - Backend:
```bash
cd server
npm install
npm run dev
```
**Leave this running!**

#### Terminal 2 - Frontend:
```bash
# Open NEW terminal
npm install
npm run dev
```

Open browser: `http://localhost:5173`

**Result**: Dashboard connected to real API server

---

## 📚 More Help?

Read these files in order:

1. **CHECKLIST.md** - Step-by-step checklist ✅
2. **GETTING_STARTED.md** - Detailed beginner guide 📖
3. **ARCHITECTURE.md** - How it all works 🏗️
4. **DEPLOYMENT.md** - Deploy online when ready 🌐

## ⚡ Quick Reference

**Your project is at:** `D:\admin_dashboard`

**Two servers:**
- Frontend: `http://localhost:5173` (what you see)
- Backend: `http://localhost:3001` (provides data)

**Stop server:** Press `Ctrl + C`

**Check if Node.js installed:**
```bash
node --version
```

## 🆘 Having Problems?

**"Command not found"**
→ Install Node.js from [nodejs.org](https://nodejs.org)

**"Port already in use"**
→ Close other apps using that port or restart computer

**Dashboard shows "Loading..." forever**
→ Check browser console (press F12) for errors

**Still stuck?**
→ Read GETTING_STARTED.md for detailed troubleshooting

---

## 🎯 What You'll See

When working, your dashboard shows:
- 📊 4 stats cards at top
- 📈 Activity line chart
- 👥 List of recent students
- 📚 Table of courses with search
- 🎨 Beautiful sidebar navigation

## 🎨 Want to Customize?

**Change colors/styles:**
- Edit `src/App.css`

**Change data:**
- Edit `server/data/mockData.js`

**Change components:**
- Edit files in `src/components/`

After changes, save the file and page auto-reloads!

---

**Remember:** Start with Path A (Easy) first! 🟢

Good luck! 🍀
