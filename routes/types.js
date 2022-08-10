const express = require('express');
const router = express.Router();
const typesQueries = require('../controllers/types')

router.get('/', async (req, res) => {
    const types = await typesQueries.getAllTypes();
    res.json(types)
})

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    const types = await typesQueries.getTypeById(id);
    res.json(types)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newTypes = await typesQueries.createType(body);
    res.json(newTypes)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateTypes = await typesQueries.updateType(id, body);
    res.json(updateTypes)
})

router.delete('/:id' ,async (req, res) => {
    const id = req.params.id
    const deleteTypes = await typesQueries.deleteType(id);
    res.json(deleteTypes)
})

module.exports = router;
