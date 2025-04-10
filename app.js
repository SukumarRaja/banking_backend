const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const accountsRoutes = require('./routes/accountRoutes');
const sequelize = require('./config/db');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/accounts', accountsRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
