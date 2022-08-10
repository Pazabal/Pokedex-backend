const express = require('express');
const router = express.Router();
const pokemonsxTypesQueries = require('../controllers/pokemonsxtypes')

router.get('/', async (req, res) => {
    const pokemonsxTypes = await pokemonsxTypesQueries.getAllPokemonsxTypes();
    res.json(pokemonsxTypes)
})

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    const pokemonsxTypes = await pokemonsxTypesQueries.getPokemonsxTypesById(id);
    res.json(pokemonsxTypes)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newPokemonsxTypes = await pokemonsxTypesQueries.createPokemonsxTypes(body);
    res.json(newPokemonsxTypes)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updatePokemonsxTypes = await pokemonsxTypesQueries.updatePokemonsxTypes(id,body);
    res.json(updatePokemonsxTypes)
})

router.delete('/id' ,async (req, res) => {
    const id = req.params.id
    const deletePokemonsxTypes = await pokemonsxTypesQueries.deletePokemonsxTypes(id);
    res.json(deletePokemonsxTypes)
})

module.exports = router;