const express  = require('express');
const app      = express();
const Pokemon = require('./pokemon');
app.use(express.static(__dirname + '/public'));


// index route
app.get('/pokemon', (req, res) => {
    // res.send(Pokemon);

    res.render('index.ejs', {
        pokemon: Pokemon
    })
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});