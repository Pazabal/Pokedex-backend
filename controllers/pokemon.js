const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllPokemons = () => {
    return knex 
    .column('id' , 'name' , 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd')
    .select()
    .from('pokemon')
}

const getPokemonById = (id) => {
    return knex('pokemon')
    .where('id', id)
    .select('name', 'id')
}

const createPokemon = (body) => {
    return knex('pokemon')
    .insert(body)
}

const updatePokemon = ()