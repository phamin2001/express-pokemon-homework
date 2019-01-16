const express  = require('express');
const app      = express();
const Pokemon = require('./pokemon');
app.use(express.static('public'));


// index route
app.get('/pokemon', (req, res) => {
    // res.send(Pokemon);

    res.render('index.ejs', {
        pokemonArray: Pokemon
    });
});

// show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id]
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});