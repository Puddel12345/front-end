# Frontend Chat App - Railway Deployment

This folder contains the production-ready frontend for the Jo chatbot with real-time streaming.

## Features

- ✅ Real-time streaming with Railway backend
- ✅ iPhone-style UI design 
- ✅ Connection status indicators
- ✅ Thinking mode display
- ✅ Express server with proxy for API calls
- ✅ Docker containerization

## Deployment on Railway

1. **Create new Railway project**:
   ```bash
   railway login
   railway init
   ```

2. **Deploy**:
   ```bash
   railway up
   ```

3. **Set environment variables** (if needed):
   - No specific environment variables required
   - Backend URL is hardcoded to: `https://chatbot-demo-production-6c16.up.railway.app`

## Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build the app**:
   ```bash
   npm run build
   ```

3. **Start production server**:
   ```bash
   npm start
   ```

## Docker

Build and run locally:
```bash
docker build -t frontend-chat-app .
docker run -p 3000:3000 frontend-chat-app
```

## API Integration

The frontend automatically connects to the Railway backend:
- Backend: `https://chatbot-demo-production-6c16.up.railway.app`
- Streaming endpoint: `/chat/stream`
- Health check: `/health`

## Key Differences from Bolt.new Version

- Removed Bolt.new environment detection
- Always uses real Railway API (no mock responses)
- Added connection status indicators
- Uses Express server with proxy for production deployment