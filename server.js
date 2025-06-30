import express from 'express';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy API requests to your Railway backend with streaming support
app.use('/api', createProxyMiddleware({
  target: 'https://chatbot-demo-production-6c16.up.railway.app',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // Remove /api prefix when forwarding
  },
  // Enable streaming for SSE
  headers: {
    'Connection': 'keep-alive',
  },
  // Don't buffer responses for streaming
  buffer: false,
  // Handle streaming responses
  onProxyReq: (proxyReq, req, res) => {
    // Add CORS headers for preflight
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Cache-Control');
      res.status(200).end();
      return;
    }
  },
  onProxyRes: (proxyRes, req, res) => {
    // Add CORS headers to all responses
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Cache-Control');
    
    // Handle SSE streaming
    if (proxyRes.headers['content-type'] && proxyRes.headers['content-type'].includes('text/event-stream')) {
      res.header('Content-Type', 'text/event-stream');
      res.header('Cache-Control', 'no-cache');
      res.header('Connection', 'keep-alive');
    }
  },
  onError: (err, req, res) => {
    console.log('Proxy Error:', err);
    res.status(500).json({ error: 'Backend service unavailable' });
  }
}));

// Handle React routing - send all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend server running on port ${PORT}`);
  console.log(`Proxying API requests to: https://chatbot-demo-production-6c16.up.railway.app`);
});