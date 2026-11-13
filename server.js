import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5173;
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.svg':'image/svg+xml' };
http.createServer((req,res)=>{
  let p = req.url.split('?')[0]; if(p==='/') p='/index.html';
  const file = path.join(__dirname, p);
  if(!file.startsWith(__dirname) || !fs.existsSync(file)){ res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, {'Content-Type': types[path.extname(file)]||'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
}).listen(PORT, ()=> console.log(`🌱 Daily Checklist chạy tại http://localhost:${PORT}`));
