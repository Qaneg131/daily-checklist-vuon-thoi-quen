# 🌱 Daily Checklist - Vườn Thói Quen

Web app checklist mỗi ngày kiểu game hóa, giao diện **tươi sáng, responsive đẹp trên mobile**, có **thanh điều hướng dưới** gồm 5 mục: 🌳 Cây • 🎒 Bộ sưu tập • 🏠 Home • 💰 Chi tiêu • 📝 Ghi nhớ

> Lưu trữ: bản GitHub này lưu dữ liệu ở `localStorage` của từng trình duyệt — mỗi người mở link live sẽ có vườn / quỹ riêng trên máy của mình, không cần tài khoản. Muốn đăng nhập tài khoản và đồng bộ nhiều máy thì cần thêm backend (ví dụ Supabase/Firebase) — xem mục nâng cấp trong app chính trên Muse.

## Home — Checklist
- Nhiệm vụ sức khỏe mặc định + tự thêm / xóa nhiệm vụ
- **Uống nước 3 lít = 10 cốc × 300ml:** bấm từng cốc, đủ 10/10 mới hoàn thành nhiệm vụ nước và nhận +1 Nước tưới cây
- **Tập thể dục xong = +1 Phân** bón cây
- Hoàn thành ≥50% ngày = giữ / tăng streak; dưới 50% = mất streak, cây chết
- **Tích xong 100% checklist = nhận ngay** Vàng nhiệm vụ + **1 Rương Đồng miễn phí (5 vật phẩm)** với animation mở rương hồi hộp — không cần bấm chốt ngày, hệ thống **tự chốt lúc 24h đêm**
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
- 3 quỹ: **Khả dụng** (tiêu ngay) • **Khóa** • **Tiết kiệm** (để dành)
- Đạt **100% checklist**: **+100.000đ vào Khả dụng ngay khi tích xong**; quỹ **luôn cộng dồn tích lũy**, không reset
- Ghi chi tiêu **theo danh mục** (Ăn uống, Mua đồ, Di chuyển, Hóa đơn, Giải trí, Sức khỏe, Khác) để trừ dần, có tổng theo từng danh mục
- Có mục **Nạp thêm** vào Khả dụng
- Chưa xong 100% khi tự chốt 24h: 100.000đ vào **Khóa** — tiền vào ngày nào trong tháng (kể cả ngày 31) thì **ngày 1 tháng sau vẫn mở đủ**, và khi mở được chọn chuyển qua **Khả dụng** hoặc **Tiết kiệm**

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

## 👤 Tài khoản + đồng bộ đám mây (Supabase, miễn phí)

App đã có sẵn: nút **👤 Tài khoản** (đăng ký / đăng nhập / đăng xuất), tự đồng bộ toàn bộ dữ liệu (checklist, vàng, cây, bộ sưu tập, 3 quỹ, ghi nhớ) theo từng tài khoản, và **hồ sơ cục bộ** để nhiều người dùng chung 1 máy khi chưa bật mây.

Để bật mây thật (bạn bè mỗi người 1 tài khoản, đăng nhập máy nào cũng thấy dữ liệu của mình), chủ repo làm 1 lần, khoảng 5 phút:

1. Vào [supabase.com](https://supabase.com) → đăng ký miễn phí → **New project** (đặt tên bất kỳ, chờ project khởi tạo)
2. Trong project: **SQL Editor** → dán toàn bộ file `supabase-schema.sql` trong repo này → **Run**
3. **Project Settings → API**: copy **Project URL** và **anon / publishable key**
4. Điền 2 giá trị đó vào file `config.js` trong repo → commit / push lại (hoặc gửi cho Mao điền hộ — anon key là khóa công khai cho trình duyệt, an toàn khi để ở client vì dữ liệu đã khóa bằng Row Level Security: mỗi tài khoản chỉ thấy dữ liệu của mình)
5. (Khuyên) **Authentication → Providers → Email**: giữ bật; nếu muốn đăng ký dùng ngay không cần xác nhận email thì tắt **Confirm email**
6. Mở web live → bấm **👤 Tài khoản** → Đăng ký → Đăng nhập. Từ đó mọi thay đổi tự đẩy lên mây sau ~1 giây và tự tải về khi đăng nhập ở máy khác.

> Chưa điền `config.js` thì app vẫn chạy bình thường ở chế độ lưu trên máy (và dùng được Hồ sơ cục bộ).
