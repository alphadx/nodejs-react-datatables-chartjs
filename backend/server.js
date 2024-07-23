const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/data', (req, res) => {
  res.json({
    chart1: [10, 20, 30, 40],
    chart2: [40, 30, 20, 10]
  });
});
app.listen(4000, () => {
  console.log('Server running on port 4000');
});
