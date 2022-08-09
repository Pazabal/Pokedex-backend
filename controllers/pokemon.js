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
    .select('name', 'id', 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd')
}

const createPokemon = (body) => {
    knex('pokemon')
    .insert(body)
   
    
}

const updatePokemon = (id, body) => {
    return knex('pokemon')
    .where(id, 'id')
    .update(body)
}

const deletePokemon = (id) =>{
    return knex('pokemon')
    .where(id, 'id')
    .del()
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon

}