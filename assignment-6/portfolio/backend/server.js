const express       = require('express');
const mongoose      = require('mongoose');
const cors          = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/portfolio')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Error:', err));

app.use('/student', studentRoutes);

app.listen(3001, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
