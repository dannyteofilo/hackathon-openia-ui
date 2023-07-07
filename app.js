const express = require('express');
const app = express();
const authRoutes = require('./src/routes/auth.routes.js');

app.use(express.json());

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.use('/auth', authRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
