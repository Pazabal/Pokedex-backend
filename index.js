const express = require('express');
const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const pokemonRouter = require('./routes/pokemon');
const typesRouter = require('./routes/types');
const movesRouter = require('./routes/moves');
const pokemonsxTypesRouter = require('./routes/pokemonsxtypes');
const pokemonsxMovesRouter = require('./routes/pokemonsxmoves');
const authRouter = require('./routes/auth');
// const validateToken = require('./middlewares/validateToken');

app.use(express.static(path.join(__dirname, "public")));
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//parse application/json
app.use(bodyParser.json());
//Solo en development
// app.use(cors());



// app.use('/', validateToken)
app.use('/', authRouter);
app.use('/pokemon' , pokemonRouter);
app.use('/types' , typesRouter);
app.use('/moves' , movesRouter);
app.use('/pokemonsxtypes' , pokemonsxTypesRouter);
app.use('/pokemonsxmoves' , pokemonsxMovesRouter);

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/', (req, res) => {
    res.send('servidor funcionando')
});

app.listen(process.env.PORT || 4000, () => {
    console.log(`servidor funcionando en 4000`)
})
