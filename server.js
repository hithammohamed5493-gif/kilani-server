const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Kilani Server is working');
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'منتج تجريبي', price: 100 }
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
