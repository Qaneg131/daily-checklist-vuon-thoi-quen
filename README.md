# 🌱 Daily Checklist - Vườn Thói Quen

Web app checklist mỗi ngày kiểu game hóa:

- **Checklist sức khỏe mặc định:** uống đủ nước 2L, tập thể dục 30 phút, ngủ trước 23h, thiền 10 phút, đọc sách, ăn rau / không nước ngọt
- **Tự thêm / xóa nhiệm vụ**, tự đặt số xu thưởng
- **Hoàn thành = nhận thưởng thường** (xu cộng ngay khi chốt ngày)
- **Không hoàn thành = xu của nhiệm vụ đó bị bỏ vào Hòm Khóa**, sau **30 ngày / hết tháng** mới mở ra nhận lại được
- **Chuỗi streak + Vườn cây:** hoàn thành **≥50%** thì giữ streak, cây lớn dần 🌱 → 🌿 → 🪴 → 🌳 → 🌸
  - Dưới **50%** khi kết thúc ngày = **mất streak, cây chết**, streak về 0
- **Rương thưởng sưu tầm ngẫu nhiên:**
  - 🥉 **Rương Đồng** — hoàn thành **100%** trong ngày → vật phẩm Thường
  - 🥈 **Rương Bạc** — streak **7 ngày** → vật phẩm Hiếm
  - 🥇 **Rương Vàng** — streak **30 ngày** → vật phẩm Epic
- Dữ liệu lưu ở `localStorage` trên trình duyệt, không cần database.

## Chạy local

Yêu cầu: Node.js 18+

```bash
git clone <repo-url>
cd daily-checklist-vuon-thoi-quen
npm run dev
# mở http://localhost:5173
```

Hoặc chỉ cần mở thẳng file `index.html` bằng trình duyệt cũng chạy được.

## Cấu trúc

- `index.html` — toàn bộ app (UI + logic)
- `server.js` — server tĩnh siêu nhẹ, không cần cài thêm thư viện
- `package.json` — lệnh `npm run dev` / `npm start`
