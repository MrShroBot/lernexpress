const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 3000;

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.use(express.urlencoded());

app.get('/', (req,res) => {
    let name = req.query.name ??'Kaspar';
    let age = req.query.age ?? 'NA';
    res.render('index.njk');
});

app.post('/test', (req,res) => {
    req.json(req.body);
});

let articlesController = require('./src/controllers/articleController');
app.use(articlesController);

app.listen(port, () => {
    console.log(`example port http://localhost:${port}`);
});