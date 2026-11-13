# 🌱 Daily Checklist - Vườn Thói Quen

Web app checklist mỗi ngày kiểu game hóa, có **thanh điều hướng dưới** gồm 5 mục: 🌳 Cây • 🎒 Bộ sưu tập • 🏠 Home • 💰 Chi tiêu • 📝 Ghi nhớ

## Home — Checklist
- Nhiệm vụ sức khỏe mặc định + tự thêm / xóa nhiệm vụ
- **Uống nước 3 lít = 10 cốc × 300ml:** bấm từng cốc, đủ 10/10 mới hoàn thành nhiệm vụ nước và nhận +1 Nước tưới cây
- **Tập thể dục xong = +1 Phân** bón cây
- Hoàn thành ≥50% ngày = giữ / tăng streak; dưới 50% = mất streak, cây chết
- Home **không còn Hòm khóa** — đã chuyển logic khóa sang Quỹ chi tiêu VND

## 🌳 Cây
- Streak càng dài cây càng lớn, có trái và chim chóc / bướm xung quanh
- Cây chỉ **lớn** khi đủ cả 2 trong ngày: **Tưới nước** (từ uống đủ nước) + **Bón phân** (từ tập thể dục), có hoạt ảnh lớn lên, +điểm lớn và ra trái
- Thiếu 1 trong 2 thì cây chỉ **sống**, không lớn
- **Thu hoạch trái bán lấy Vàng:** 1 trái = 20 vàng

## 🎒 Bộ sưu tập & Rương (mua bằng Vàng)
- Vật phẩm chia theo **từng bộ** (Vườn Xanh, Biển Xanh, Bầu Trời...), hiện cả vật phẩm chưa có
- Độ hiếm: **Thường = xám, Hiếm = xanh biển, Sử thi = tím, Huyền thoại = cam**
- Trùng vật phẩm cộng bản sao lên sao: **0★→1★ cần 5 bản sao, 1★→2★ cần thêm 10, 2★→3★ cần thêm 15**
- 🥉 **Rương Đồng 100 vàng:** 5 vật phẩm
- 🥈 **Rương Bạc 500 vàng:** 10 vật phẩm, chắc chắn 1 Sử thi
- 🥇 **Rương Vàng 1.000 vàng:** 30 vật phẩm, có tỉ lệ ra 1 Huyền thoại

> **Vàng mua rương khác hoàn toàn với Quỹ chi tiêu VND.**

## 💰 Quỹ chi tiêu (VND)
- Hoàn thành nhiệm vụ ngày (≥50%) khi chốt ngày: **Quỹ khả dụng +100.000đ**
- Ghi lại chi tiêu để trừ dần khỏi quỹ khả dụng
- Không hoàn thành ngày: 100.000đ vào **Quỹ khóa**, mở vào **ngày 1 tháng sau**

## 📝 Ghi nhớ
- Thêm / xóa các ghi chú cần nhớ, lưu ở trình duyệt

Dữ liệu lưu ở `localStorage`, không cần database.

## Chạy local

Yêu cầu: Node.js 18+

```bash
git clone https://github.com/Qaneg131/daily-checklist-vuon-thoi-quen.git
cd daily-checklist-vuon-thoi-quen
npm run dev
# mở http://localhost:5173
```

Hoặc mở thẳng file `index.html` bằng trình duyệt cũng chạy được.
