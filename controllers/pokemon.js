const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllPokemons = () => {
    return knex 
    .column('id' , 'name' , 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd')
    .select()
    .from('pokemon')
}

knex.select('*')
    .from('pokemon')
    .join('pokemonsxmoves', 'pokemon_id', 'pokemon.id')
    .join('moves','id', 'pokemonsxmoves.moves_id')
    .join('pokemonsxtypes', 'pokemon_id','pokemon.id')
    .join('types', 'id', 'pokemonxtypes.type_id');
    



const getPokemonById = (id) => {
    return knex('pokemon')
    .where('id',id)
    .select('name', 'id', 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd')
}

const createPokemon = (body) => {
    knex('pokemon')
    .insert(body)
    .returning('id')
    // .where('id', '=', id)
    .then( (id) => {
        const pokemonsToInsertMoves = body.moves.map(move =>
            ({moves_id: move.moves_id, pokemon_id: id}));
    
         return knex('pokemonsxmoves').insert(pokemonsToInsertMoves)
            // console.log("create pokemon");

    })
    .then( (id) =>{
        const pokemonsToInsertTypes = body.types.map(type =>
            ({types_id: type.id, pokemon_id: id}))
        return knex('pokemonsxtypes').insert(pokemonsToInsertTypes)
    })
   
   
}

const updatePokemon = (id, body) => {
    return knex('pokemon')
    .where('id', id)
    .update(body)
}

const deletePokemon = (id) =>{
    return knex('pokemon')
    .where('id' , id)
    .del()
}

module.exports = {
    getAllPokemons,
    getPokemonById,
    createPokemon,
    updatePokemon,
    deletePokemon

}