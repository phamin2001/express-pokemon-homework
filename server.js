const express  = require('express');
const app      = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const Pokemon = require('./pokemon');


app.use(express.static('public'));

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false }));



// new route
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs');
});



// index route
app.get('/pokemon', (req, res) => {
    // res.send(Pokemon);

    res.render('index.ejs', {
        pokemonArray: Pokemon
    });
});

app.post('/pokemon', (req, res) => {
    Pokemon.push(req.body);
    res.redirect('/pokemon');
});

app.put('/pokemon/:id', (req, res) => {
    console.log('updating a pokeman');
    Pokemon[req.params.id] = req.body;
    res.redirect('/pokemon');
});

// delete route
app.delete('/pokemon/:id',(req, res) => {
    console.log('delete route is called.');
    Pokemon.splice(req.params.id, 1);
    res.redirect('/pokemon');
});

// eidt route
app.get('/pokemon/:id/edit', (req, res) => {
    console.log('edit route is called.')
    res.render('edit.ejs', {
        singlePokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});

// show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
        pokemon: Pokemon[req.params.id],
        id: [req.params.id]
    });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});