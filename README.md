# 🌱 Daily Checklist - Vườn Thói Quen

Web app checklist mỗi ngày kiểu game hóa, có **thanh điều hướng dưới** gồm 5 mục: 🌳 Cây • 🎒 Bộ sưu tập • 🏠 Home • 💰 Chi tiêu • 📝 Ghi nhớ

## Home — Checklist
- Nhiệm vụ sức khỏe mặc định + tự thêm / xóa nhiệm vụ
- **Uống nước 3 lít = 10 cốc × 300ml:** bấm từng cốc, đủ 10/10 mới hoàn thành nhiệm vụ nước và nhận +1 Nước tưới cây
- **Tập thể dục xong = +1 Phân** bón cây
- Hoàn thành ≥50% ngày = giữ / tăng streak; dưới 50% = mất streak, cây chết
- **Xong 100% checklist + bấm Kết thúc ngày = nhận ngay** Vàng nhiệm vụ + **1 Rương Đồng miễn phí (5 vật phẩm)** — không chờ qua ngày mới
- Home **không còn Hòm khóa** — đã chuyển logic khóa sang Quỹ chi tiêu VND

## 🌳 Cây
- Streak càng dài cây càng lớn, có trái và chim chóc / bướm xung quanh
- Cây chỉ **lớn** khi đủ cả 2 trong ngày: **Tưới nước** (từ uống đủ nước) + **Bón phân** (từ tập thể dục), có hoạt ảnh lớn lên, +điểm lớn
- Thiếu 1 trong 2 thì cây chỉ **sống**, không lớn
- **Trái theo chuỗi:** mốc chuỗi **5 ngày = 1 trái, 10 = 2, 15 = 3** — cứ mỗi 5 ngày chuỗi cây thêm 1 trái
- Trái có tỉ lệ màu: **🟢 Xanh lá 60% bán 10 vàng • 🔴 Đỏ 30% bán 25 vàng • 🟡 Vàng 10% bán 50 vàng**

## 🎒 Bộ sưu tập & Rương (mua bằng Vàng)
- Vật phẩm chia theo **7 bộ** (Vườn Xanh, Biển Xanh, Bầu Trời, Khu Rừng, Hoàng Hôn, Núi Tuyết, Vũ Trụ), hiện cả vật phẩm chưa có
- Độ hiếm: **Thường = xám, Hiếm = xanh biển, Sử thi = tím, Huyền thoại = cam**
- Trùng vật phẩm cộng bản sao lên sao: **0★→1★ cần 5 bản sao, 1★→2★ cần thêm 10, 2★→3★ cần thêm 15**
- 🥉 **Rương Đồng 100 vàng:** 5 vật phẩm
- 🥈 **Rương Bạc 500 vàng:** 10 vật phẩm, chắc chắn 1 Sử thi
- 🥇 **Rương Vàng 1.000 vàng:** 30 vật phẩm, có tỉ lệ ra 1 Huyền thoại

> **Vàng mua rương khác hoàn toàn với Quỹ chi tiêu VND.**

## 💰 Quỹ chi tiêu (VND)
- Xong **100% checklist** ngày khi chốt ngày: **Quỹ khả dụng +100.000đ**, tiêu ngay; quỹ **luôn cộng dồn tích lũy**, không reset
- Ghi chi tiêu **theo danh mục** (Ăn uống, Mua đồ, Di chuyển, Hóa đơn, Giải trí, Sức khỏe, Khác) để trừ dần, có tổng theo từng danh mục
- Có mục **Nạp thêm** vào quỹ khả dụng
- Chưa xong 100%: 100.000đ vào **Quỹ khóa**, mở vào **ngày 1 tháng sau**

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
