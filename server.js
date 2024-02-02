const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname,'public')));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for the about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Route for the interactives page
app.get('/interactives', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'interactives.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
