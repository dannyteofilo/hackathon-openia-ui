const express = require('express');
const app = express();
const authRoutes = require('./src/routes/auth.routes.js');
const { protectRoute } = require('./src/middlewares/protectRoute.js');
require('dotenv').config();
const port = process.env.PORT || 3000;

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

app.get('/ia', protectRoute, (req, res) => {
    res.render('ia');
});

app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
