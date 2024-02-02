const express = require('express');
const path = require('path');

const app = express();
const folderpath = path.join(__dirname,'public'); 

const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(folderpath));


// Using pug to render html
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// Route for the interactives page
app.get('/interactives', (req, res) => {
    res.render('interactives');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
