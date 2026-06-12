# Training Tracker — Project Log

## URL
https://training-tracker-production-0ad8.up.railway.app

## GitHub
https://github.com/PlayMaGame/training-tracker

## Stack
- Frontend: single `index.html` (vanilla JS, CSS) — `server/`
- Backend: Node.js Express (`server.js`) — `server/`
- Storage: JSON file (`data.json`)
- Deployment: Railway.app

## Admin
- Triple-click title "Очередь" → password `runni123`
- Stored in sessionStorage, resets on tab close
- Admin can: register/delete players, move queue→training, check skills, move training→passed, leave/delete reviews, delete from anywhere

## Student
- Read-only: register with IGN, see queue position, training progress bars, passed list with visible reviews

## Key Behavior
- Polling every 2s (GET `/api/state`) for real-time sync
- GET `/api/state` — public read
- POST `/api/state` — requires `?token=runni123`
- 12 skills with RU/EN descriptions: Keybinds, Attack Markers, Blocking, Charged vs Fast, Feints, Kicks, Parrying, Window Pressure, Stamina Mgmt, Spear Throws, Anim Shortening, 1v1 Meta (GS)
- localStorage fallback on frontend

## Files
- `server/index.html` — frontend
- `server/server.js` — Express backend
- `server/package.json` — deps (express)
- `deploy` script copies `server/` to repo root for Railway

## To continue
- Clone repo: `git clone https://github.com/PlayMaGame/training-tracker`
- Edit `server/index.html` for UI changes, `server/server.js` for backend changes
- Deploy: push to main → Railway auto-deploys
- Need Railway CLI or dashboard to check logs/restart
