configDB = require('../knexfile');
knex = require('knex')(configDB.development);

const getAllPokemonsxMoves = () => {
    return knex
    .column('id', 'pokemon_id', 'moves_id')
    .select()
    .from('pokemonsxmoves')
}

const getPokemonsxMovesById = (id) => {
    return knex('pokemonsxmoves')
    .where('id', id)
    .select('pokemon_id', 'id', 'moves_id')
} 
const createPokemonsxMoves = (body) => {
    return knex('pokemonsxmoves')
    .insert(body)
}

const updatePokemonsxMoves = (id, body) => {
    return knex('pokemonsxmoves')
    .where('id', id)
    .update(body)
}
const deletePokemonsxMoves = (id) => {
    return knex('pokemonsxmoves')
    .where('id', id)
    .del()
}
module.exports = {
    getAllPokemonsxMoves,
    getPokemonsxMovesById,
    createPokemonsxMoves,
    deletePokemonsxMoves,
    updatePokemonsxMoves
}