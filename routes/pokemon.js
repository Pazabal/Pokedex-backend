const express = require('express');
const router = express.Router();
const pokemonQueries = require('../controllers/pokemon')

router.get('/', async (req, res) => {
    const pokemon = await pokemonQueries.getAllPokemons();
    res.json(pokemon)
})

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    const pokemon = await pokemonQueries.getPokemonById();
    res.json(pokemon)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newPokemon = await pokemonQueries.createPokemon();
    res.json(newPokemon)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatePokemon = await pokemonQueries.updatePokemon();
    res.json(updatePokemon)
})

router.delete('/:id' ,async (req, res) => {
    const id = req.params.id
    const deletePokemon = await pokemonQueries.deletePokemon();
    res.json(deletePokemon)
})

module.exports = router;
