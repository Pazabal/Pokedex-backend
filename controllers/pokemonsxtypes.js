const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllPokemonsxTypes = () => {
    return knex
    .column('pokemon_id', 'types_id', 'pokemonsxtypes_id')
    .select()
    .from('pokemonsxtypes')
}

const getPokemonsxTypesById = (id) => {
    return knex('pokemonsxtypes')
    .where('pokemonsxtypes_id' , id)
    .select('pokemonsxtypes_id' , 'pokemon_id', 'types_id')
}

const createPokemonsxTypes = (body) => {
    return knex('pokemonsxtypes')
    .insert(body)
}

const updatePokemonsxTypes = (id, body) => {
    return knex('pokemonsxtypes')
    .where('pokemonsxtypes_id' ,id)
    .update(body)
}

const deletePokemonsxTypes = (id) => {
    return knex('pokemonsxtypes')
    .where('pokemonsxtypes_id', id)
    .del()
}

module.exports = {
    getAllPokemonsxTypes,
    getPokemonsxTypesById,
    createPokemonsxTypes,
    updatePokemonsxTypes,
    deletePokemonsxTypes

}