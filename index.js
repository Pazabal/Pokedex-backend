
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const pokemonRouter = require('./routes/pokemon');
const typesRouter = require('./routes/types');
const movesRouter = require('./routes/moves');
const pokemonsxTypesRouter = require('./routes/pokemonsxtypes');
const pokemonsxMovesRouter = require('./routes/pokemonsxmoves');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use('/pokemon' , pokemonRouter);
app.use('/types' , typesRouter);
app.use('/moves' , movesRouter);
app.use('/pokemonsxtypes' , pokemonsxTypesRouter);
app.use('/pokemonsxmoves' , pokemonsxMovesRouter);

app.get('/', (req, res) => {
    res.send('servidor funcionando')
});

app.listen(process.env.PORT || 4000, () => {
    console.log('servidor funcionando en 4000')
})
