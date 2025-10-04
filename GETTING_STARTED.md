# Getting Started - Quick Guide for Beginners

This guide will help you run your EduAdmin e-learning dashboard on your computer.

## What You Have

You now have a complete admin dashboard application with:
- **Frontend**: A beautiful React dashboard (what users see in the browser)
- **Backend**: An Express server that provides data (the API)

## Step 1: Install Node.js (If You Haven't)

1. Go to [nodejs.org](https://nodejs.org)
2. Download and install the LTS version
3. Verify installation:
   ```bash
   node --version
   npm --version
   ```

## Step 2: Run the Application Locally

### Option A: Run Frontend Only (With Mock APIs)

This is the **EASIEST** way to see your dashboard:

1. Open terminal in the project folder
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
4. Open your browser to: `http://localhost:5173`

**Note**: This uses fake/mock data that's built into the frontend.

### Option B: Run Both Frontend + Backend (Full Setup)

This connects the frontend to a real backend server:

**Terminal 1 - Backend Server:**
```bash
cd server
npm install
npm run dev
```
Server will run at: `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
# In the main project folder
npm install
npm run dev
```
Frontend will run at: `http://localhost:5173`

**Important**: You need to create a `.env` file in the main folder:
```
VITE_API_URL=http://localhost:3001
```

## Step 3: View Your Dashboard

Open your browser and go to:
```
http://localhost:5173
```

You should see:
- 📊 Statistics cards (students, courses, etc.)
- 📈 Activity charts
- 👥 Recent students list
- 📚 Course table with search

## Common Issues & Solutions

### "Command not found: npm"
**Solution**: Install Node.js (see Step 1)

### "Port already in use"
**Solution**: Another app is using that port. Either:
- Close the other app
- Or change the port in the code

### "Cannot find module"
**Solution**: Run `npm install` in that directory

### Frontend shows "Loading..." forever
**Solution**: 
- If using Option B, make sure backend server is running
- Check browser console (F12) for errors

### CORS errors in browser console
**Solution**: Make sure backend `.env` has:
```
FRONTEND_URL=http://localhost:5173
```

## Next Steps

### 1. Explore the Dashboard
- Click on different menu items in the sidebar
- Try searching for courses
- Look at the statistics and charts

### 2. Customize the Data
- Edit `server/data/mockData.js` to change courses, students, etc.
- Restart the backend server to see changes

### 3. Modify the Design
- Colors and styles are in `src/App.css`
- Components are in `src/components/` folder

### 4. Deploy Online (Advanced)
- Read `DEPLOYMENT.md` for full deployment instructions
- Deploy frontend to Vercel (free)
- Deploy backend to Railway or Render (free tier available)

## Project Structure

```
admin_dashboard/
├── src/                    # Frontend code
│   ├── components/         # React components
│   ├── api/               # API functions
│   ├── App.jsx            # Main app component
│   └── App.css            # Styles
├── server/                # Backend code
│   ├── data/              # Mock data
│   ├── index.js           # Express server
│   └── package.json       # Backend dependencies
├── package.json           # Frontend dependencies
└── DEPLOYMENT.md          # Deployment guide
```

## Learn More

- **React Documentation**: [react.dev](https://react.dev)
- **Express Documentation**: [expressjs.com](https://expressjs.com)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev)

## Need Help?

If you're stuck:
1. Check the error message carefully
2. Google the error message
3. Make sure all dependencies are installed (`npm install`)
4. Restart the servers
5. Check that you're in the correct directory

---

## Quick Commands Reference

**Frontend:**
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
```

**Backend:**
```bash
cd server            # Go to server folder
npm install          # Install dependencies
npm run dev          # Start with auto-reload
npm start            # Start production server
```

**Stop Running Server:**
- Press `Ctrl + C` in the terminal

That's it! You're ready to go! 🚀
