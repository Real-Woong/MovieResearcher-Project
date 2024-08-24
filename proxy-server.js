import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

// CORS 설정 추가
app.use(cors());

app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:5000',
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '/auth',
  },
}));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`CORS Proxy Server running on port ${PORT}`);
});
