const express = require('express');
const router = express.Router();
const pokemonsxMovesQueries = require('../controllers/pokemonsxmoves')

router.get('/', async (req, res) => {
    const pokemonsxMoves = await pokemonsxMovesQueries.getAllPokemonsxMoves();
    res.json(pokemonsxMoves)
    
})

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    const pokemonsxMoves = await pokemonsxMovesQueries.getPokemonsxMovesById(id);
    res.json(pokemonsxMoves)
    
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newPokemonsxMoves = await pokemonsxMovesQueries.createPokemonsxMoves(body);
    res.json(newPokemonsxMoves)
    
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatePokemonsxMoves = await pokemonsxMovesQueries.updatePokemonsxMoves(id, body);
    res.json(updatePokemonsxMoves)
    
})

router.delete('/:id' ,async (req, res) => {
    const id = req.params.id
    const deletePokemonsxMoves = await pokemonsxMovesQueries.deletePokemonsxMoves(id);
    res.json(deletePokemonsxMoves)
    
})

module.exports = router;