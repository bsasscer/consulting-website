const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/hello', (req, res) => {
    res.send('<h1>Hello you!</h1>');
});

// set up development server
app.listen(3000, () => {
    console.log('The app is running on localhost: 3000')
});
