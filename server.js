const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
  { id: 1, name: "هودي كيلاني اسود", price: 650, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500", desc: "هودي قطن تقيل - مقاسات M / L / XL" },
  { id: 2, name: "تيشيرت كيلاني ابيض", price: 350, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500", desc: "تيشيرت قطن 100% - مريح وشيك" },
  { id: 3, name: "كاب كيلاني", price: 250, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500", desc: "كاب عملي - لون اسود" },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Kilani Store | متجر كيلاني</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box;font-family:Arial}
  body{background:#f5f5f5}
  header{background:#111;color:#fff;padding:25px;text-align:center}
  header h1{font-size:30px;letter-spacing:2px}
  header p{color:#ccc;margin-top:6px}
  .container{max-width:1000px;margin:20px auto;padding:0 15px;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px}
  .card{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.1)}
  .card img{width:100%;height:240px;object-fit:cover}
  .card-body{padding:15px}
  .card-body h3{font-size:19px;margin-bottom:6px}
  .card-body p{color:#777;font-size:14px;margin-bottom:10px}
  .price{font-weight:bold;font-size:21px}
  .btn{display:block;background:#111;color:#fff;text-align:center;padding:13px;border-radius:9px;text-decoration:none;margin-top:12px;font-weight:bold}
  .btn-wa{background:#25D366}
  footer{text-align:center;padding:20px;color:#888;font-size:14px}
</style>
</head>
<body>
<header>
  <h1>KILANI STORE</h1>
  <p>اهلا بيك في متجر كيلاني - جودة تستاهلها</p>
</header>
<div class="container" id="products"></div>
<footer>© 2026 Kilani Store - جميع الحقوق محفوظة</footer>
<script>
  fetch('/api/products').then(r=>r.json()).then(data=>{
    document.getElementById('products').innerHTML = data.map(p=>\`
      <div class="card">
        <img src="\${p.image}">
        <div class="card-body">
          <h3>\${p.name}</h3>
          <p>\${p.desc}</p>
          <div class="price">\${p.price} جنيه</div>
          <a class="btn" href="https://wa.me/201000000000?text=عايز اطلب \${p.name} - \${p.price} جنيه" target="_blank">اطلب دلوقتي</a>
        </div>
      </div>
    \`).join('');
  });
</script>
</body>
</html>
  `);
});

app.listen(PORT, () => console.log('Server running on ' + PORT));
