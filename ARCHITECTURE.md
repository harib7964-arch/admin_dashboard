# Architecture Overview

## Simple Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    YOUR BROWSER                         │
│  (Chrome, Firefox, etc. at http://localhost:5173)      │
│                                                         │
│  ┌───────────────────────────────────────────────┐    │
│  │         REACT FRONTEND                        │    │
│  │  • Dashboard UI                               │    │
│  │  • Sidebar Navigation                         │    │
│  │  • Charts & Tables                            │    │
│  │  • Search & Filters                           │    │
│  └───────────────┬───────────────────────────────┘    │
└──────────────────┼──────────────────────────────────────┘
                   │
                   │ HTTP Requests
                   │ (fetch API calls)
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│         EXPRESS BACKEND SERVER                          │
│       (Node.js at http://localhost:3001)                │
│                                                         │
│  ┌───────────────────────────────────────────────┐    │
│  │              API ENDPOINTS                    │    │
│  │  • GET /api/courses                           │    │
│  │  • GET /api/students                          │    │
│  │  • GET /api/analytics/stats                   │    │
│  │  • POST /api/courses                          │    │
│  │  • etc...                                     │    │
│  └───────────────┬───────────────────────────────┘    │
│                  │                                      │
│                  ▼                                      │
│  ┌───────────────────────────────────────────────┐    │
│  │           MOCK DATA                           │    │
│  │  (server/data/mockData.js)                    │    │
│  │  • Courses                                    │    │
│  │  • Students                                   │    │
│  │  • Analytics                                  │    │
│  └───────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## How It Works

### Step-by-Step Flow:

1. **User Opens Browser**
   - You go to `http://localhost:5173`
   - React app loads in your browser

2. **Dashboard Loads**
   - React components render (Sidebar, Header, Stats Cards, etc.)
   - Components need data to display

3. **API Calls Made**
   - Frontend calls backend: `fetch('http://localhost:3001/api/courses')`
   - This happens in `src/api/index.js`

4. **Backend Responds**
   - Express server receives request
   - Fetches data from mock data file
   - Sends JSON response back

5. **Data Displayed**
   - Frontend receives data
   - React components update with real data
   - You see courses, students, charts, etc.

## Two Ways to Run

### Method 1: Frontend Only (Simpler)
```
BROWSER → REACT APP → Mock Data (built-in)
```
- Data simulated with 500ms delay
- No backend server needed
- Good for quick testing

### Method 2: Frontend + Backend (Recommended)
```
BROWSER → REACT APP → EXPRESS API → Mock Data File
```
- Realistic API calls
- Better for development
- Prepares you for real database later

## Key Files

### Frontend Files:
- `src/App.jsx` - Main component that puts everything together
- `src/components/` - Individual UI components
- `src/api/index.js` - Functions to call backend API
- `src/App.css` - Styling for the dashboard

### Backend Files:
- `server/index.js` - Express server with all routes
- `server/data/mockData.js` - Fake data (courses, students, etc.)
- `server/package.json` - Backend dependencies

## Environment Variables

These tell your app where things are:

**Frontend `.env`:**
```
VITE_API_URL=http://localhost:3001
```
Tells frontend where to find the backend.

**Backend `.env`:**
```
PORT=3001
FRONTEND_URL=http://localhost:5173
```
Tells backend what port to use and which frontend to allow.

## Future Enhancements

Right now: `Frontend → Backend → Mock Data`

Later you could add:
```
Frontend → Backend → Real Database (MongoDB, PostgreSQL, etc.)
                  ↓
            Authentication
                  ↓
            File Storage
```

## Common Ports

- **5173** - Vite development server (Frontend)
- **3001** - Express API server (Backend)
- **3000** - Alternative port (sometimes used)

Make sure nothing else is using these ports!
