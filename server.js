const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// السماح بقراءة بيانات الـ JSON والـ Form المرسلة من لوحة التحكم
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// مصفوفة المنتجات الافتراضية المحفوظة على السيرفر
let kilanyProducts = [
  { 
    id: 1,
    name: "سماعة بلوتوث أصلية", 
    price: 350, 
    stock: 15,
    desc: "سماعة صوت مجسم عالية الدقة مع بطارية تدوم حتى 24 ساعة وضمان سنة.", 
    vendorName: "سوق الكيلاني",
    img: "" 
  }
];

// 1. مسار جلب المنتجات (يعرضها للموقع الرئيسي وللجميع)
app.get('/api/products', (req, res) => {
  res.json(kilanyProducts);
});

// 2. مسار إضافة منتج جديد (يستقبل البيانات من صفحة الأدمن السرية ويحفظها)
app.post('/api/add-product', (req, res) => {
  const { name, price, stock, desc, img, vendorName } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({ success: false, message: "اسم المنتج والسعر مطلوبان" });
  }

  const newProd = {
    id: Date.now(),
    name: name,
    price: Number(price),
    stock: Number(stock) || 1,
    desc: desc || "لا يوجد وصف.",
    vendorName: vendorName || "سوق الكيلاني",
    img: img || ""
  };

  kilanyProducts.push(newProd);
  res.json({ success: true, product: newProd });
});

// تشغيل الملفات الثابتة (HTML, CSS) لتظهر الصفحات بشكل صحيح
app.use(express.static(path.join(__dirname)));

// بدء تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
