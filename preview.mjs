import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname } from 'path';

const DIST = join(process.cwd(), 'src/.vuepress/dist');
const PORT = 3456;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
};

const server = createServer((req, res) => {
  let url = req.url.split('?')[0].split('#')[0];

  // 剥离 base 前缀 /subata/
  const BASE = '/subata/';
  if (url.startsWith(BASE)) url = url.slice('/subata'.length);
  if (url === '/') url = '/index.html';

  // 静态资源直接从 dist 读取
  const ext = extname(url);
  if (ext) {
    const file = join(DIST, url);
    if (existsSync(file)) {
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(readFileSync(file));
      return;
    }
  }

  // SPA fallback：所有路由都返回 index.html（Vue Router 接管）
  const index = join(DIST, 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  readFileSync(index).pipe(res);
});

server.listen(PORT, () => {
  console.log(`本地预览: http://localhost:${PORT}/subata/`);
});
