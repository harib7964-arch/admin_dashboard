# Deployment Guide

This guide covers deploying the EduAdmin e-learning platform with a React frontend on Vercel and Express backend on Railway/Render.

## Architecture

- **Frontend:** React + Vite hosted on Vercel
- **Backend:** Express.js API hosted on Railway or Render
- **Communication:** REST API with CORS enabled

---

## Backend Deployment (Railway or Render)

### Option 1: Deploy to Railway

1. **Create Account:** Sign up at [railway.app](https://railway.app)

2. **Create New Project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository

3. **Configure Service:**
   - Set root directory to `server/`
   - Railway will auto-detect the Node.js project

4. **Environment Variables:**
   Add these in Railway dashboard:
   ```
   NODE_ENV=production
   FRONTEND_URL=https://your-app.vercel.app
   ```

5. **Deploy:**
   - Railway will automatically deploy on push to main branch
   - Note your backend URL (e.g., `https://your-app.up.railway.app`)

### Option 2: Deploy to Render

1. **Create Account:** Sign up at [render.com](https://render.com)

2. **Create Web Service:**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Select this repository

3. **Configure Service:**
   - **Name:** eduadmin-backend
   - **Root Directory:** `server`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

4. **Environment Variables:**
   ```
   NODE_ENV=production
   FRONTEND_URL=https://your-app.vercel.app
   ```

5. **Deploy:**
   - Click "Create Web Service"
   - Note your backend URL (e.g., `https://your-app.onrender.com`)

---

## Frontend Deployment (Vercel)

1. **Create Account:** Sign up at [vercel.com](https://vercel.com)

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

3. **Environment Variables:**
   Add this in Vercel project settings:
   ```
   VITE_API_URL=https://your-backend-url.onrender.com
   ```
   Replace with your actual backend URL from Railway/Render

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically
   - Your app will be live at `https://your-app.vercel.app`

5. **Update Backend CORS:**
   Go back to your backend hosting (Railway/Render) and update the `FRONTEND_URL` environment variable with your Vercel URL

---

## Local Development

### Backend

1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env` file:
   ```
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   NODE_ENV=development
   ```

4. Start server:
   ```bash
   npm run dev
   ```

### Frontend

1. From project root:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```
   VITE_API_URL=http://localhost:3001
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

4. Open browser at `http://localhost:5173`

---

## Testing the Deployment

1. **Check Backend Health:**
   ```bash
   curl https://your-backend-url.onrender.com/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

2. **Test API Endpoint:**
   ```bash
   curl https://your-backend-url.onrender.com/api/courses
   ```

3. **Check Frontend:**
   - Open your Vercel URL in browser
   - Dashboard should load with data from backend
   - Open DevTools Network tab to verify API calls

---

## Troubleshooting

### CORS Errors

**Problem:** Browser shows CORS error

**Solution:**
1. Verify `FRONTEND_URL` environment variable on backend matches your Vercel URL exactly
2. Redeploy backend after changing environment variables
3. Check browser console for the exact origin being blocked

### API Calls Failing

**Problem:** Frontend can't reach backend

**Solution:**
1. Check `VITE_API_URL` in Vercel environment variables
2. Verify backend is running: visit `https://your-backend-url.onrender.com/health`
3. Check backend logs in Railway/Render dashboard

### Build Failures

**Frontend Build Error:**
- Check if all dependencies are in `package.json`
- Verify build command is correct
- Check Vercel build logs

**Backend Build Error:**
- Ensure Node.js version compatibility
- Check for missing dependencies
- Review Railway/Render build logs

---

## Continuous Deployment

Both platforms support automatic deployments:

- **Vercel:** Auto-deploys on push to main branch
- **Railway/Render:** Auto-deploys on push to main branch

To trigger a deployment:
```bash
git add .
git commit -m "Update application"
git push origin main
```

---

## Production Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] Environment variables configured on both platforms
- [ ] CORS properly configured
- [ ] API calls working from frontend to backend
- [ ] All features tested in production
- [ ] SSL/HTTPS enabled (automatic on both platforms)
- [ ] Error monitoring set up (optional)
- [ ] Database connected (if applicable)

---

## Cost Considerations

### Free Tiers

**Vercel:**
- 100 GB bandwidth/month
- Unlimited deployments
- Perfect for frontend hosting

**Railway:**
- $5 free credit/month
- Sufficient for small projects

**Render:**
- Free tier available
- May sleep after inactivity
- Wakes up on first request

### Upgrading

For production applications with higher traffic:
- **Vercel Pro:** $20/month (better performance, analytics)
- **Railway:** Pay as you go (scales with usage)
- **Render:** Starting at $7/month (always-on instances)

---

## Support

For deployment issues:
- Check platform documentation
- Review application logs in dashboard
- Verify environment variables
- Test API endpoints independently
