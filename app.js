const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
app.get('/', (req, res) => {
  res.send('Welcome to my Express app!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

const userRoutes = require('./api/user/userRoutes');
app.use('/api', userRoutes);
  