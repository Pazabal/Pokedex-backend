const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllMoves = () => {
    return knex
    .column('id', 'name')
    .select()
    .from('moves')
}

const getMovesById = (id) => {
    return knex('moves')
    .where('id', id)
    .select('name', 'id')
}

const createMoves = (body) => {
    return knex('moves')
    .insert(body)
}
const updateMoves = (id, body) => {
    return knex('moves')
    .where('id', id)
    .update(body)
}
const deleteMoves = (id) => {
    return knex('moves')
    .where('id', id)
    .del()
}
module.exports = {
    deleteMoves,
    updateMoves,
    createMoves,
    getMovesById,
    getAllMoves
}