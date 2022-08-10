const express = require('express');
const router = express.Router();
const movesQueries = require('../controllers/moves')

router.get('/', async (req, res) => {
    const moves = await movesQueries.getAllMoves();
    res.json(moves)
})

router.get('/:id' , async (req, res) => {
    const id = req.params.id
    const moves = await movesQueries.getMovesById(id);
    res.json(moves)
})

router.post('/' , async (req, res) => {
    const body = req.body
    const newMoves = await movesQueries.createMoves(body);
    res.json(newMoves)
})

router.put('/:id' , async (req, res) => {
    const id = req.params.id
    const body = req.body
    const updateMoves = await movesQueries.updateMoves(id , body);
    res.json(updateMoves)
})

router.delete('/:id' ,async (req, res) => {
    const id = req.params.id
    const deleteMoves = await movesQueries.deleteMoves(id);
    res.json(deleteMoves)
})

module.exports = router;