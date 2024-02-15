const http = require('node:http');
const express = require('express') ;
const { engine } = require('express-handlebars') ;
const path = require('path');




const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use('/script', express.static(path.join(__dirname, 'public/js')));


app.get('/', (req, res) => {
    res.render('accueil');
});
app.get('/connexion',(req, res) => {
    res.render('connexion');
});

app.get('/actualites',(req, res) => {
    res.render('actualites');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});