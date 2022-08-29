const express = require('express');
const router = express.Router();
const pokemonQueries = require('../controllers/pokemon')

router.get('/', async (req, res) => {
    const pokemon = await pokemonQueries.getAllPokemons();
    res.json(pokemon)
   
})

router.get('/firstpokemon', async (req,res)=>{
    const pokemon = await pokemonQueries.getFirstPokemon()
    res.json(pokemon)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newPokemon = await pokemonQueries.createPokemon(body);
    res.json(newPokemon)
    
})

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    await pokemonQueries.getPokemonById(id)
    .then((pokemon)=>{
       return res.json(pokemon) 
    })
    .catch((er) =>{
        return res.json (er)
    })
    
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatePokemon = await pokemonQueries.updatePokemon(id, body);
    res.json(updatePokemon)
   
})

router.delete('/:id' ,async (req, res) => {
    const id = req.params.id
    const deletePokemon = await pokemonQueries.deletePokemon(id);
    res.json(deletePokemon)
    
})

module.exports = router;
