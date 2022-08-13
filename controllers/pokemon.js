const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllPokemons = () => {
    return knex 
    .column('id' , 'name' , 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd')
    .select()
    .from('pokemon')
}

// knex.select('*')
//     .from('pokemon')
//     .join('pokemonsxmoves', 'pokemon_id', 'pokemon.id')
//     .join('moves','id', 'pokemonsxmoves.moves_id')
//     .join('pokemonsxtypes', 'pokemon_id','pokemon.id')
//     .join('types', 'id', 'pokemonsxtypes.type_id')
    



const getPokemonById = (id) => {
    return knex('pokemon')
    .where('id',id)
    .select('name', 'id', 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd')
}

// const createPokemon = (body) => {
//     return knex('pokemon')
//     .insert(body)
    
    // .returning('id')
    // .where('id', '=', id)
    // .then( (id) => {
    //     const pokemonsToInsertMoves = body.moves.map(move =>
    //         ({moves_id: move.moves_id, pokemon_id: id}));
    
    //      return knex('pokemonsxmoves').insert(pokemonsToInsertMoves)
    //         // console.log("create pokemon");

    // })
    // .then( (id) =>{
    //     const pokemonsToInsertTypes = body.types.map(type =>
    //         ({types_id: type.id, pokemon_id: id}))
    //     return knex('pokemonsxtypes').insert(pokemonsToInsertTypes)
    // })
// }
    // const createPokemon = async (body) => {
    //     await knex("pokemon")
    //       .insert(body.pokemon)
    //       .returning("id")
    //       .then((ArrayConId) => {
    //         const pokemonConHabilidades = body.moves.map((habilidad) => ({
    //           pokemon_id: ArrayConId[0].id,
    //           move_id: habilidad.id,
    //         }));
      
    //         return pokemonConHabilidades;
    //       })
    //       .then((objetoPokemonMoves) => {
    //         knex("pokemon_moves")
    //           .insert(objetoPokemonMoves)
    //           .then((respuesta) => {
    //             res
    //               .status(200)
    //               .json({ mensaje: "el pokemon fue creado", response: respuesta });
    //           });
    //       });
    //   };
    const createPokemon = async (body) => {
        return knex ('pokemon')
        .insert(body.pokemon)
        .returning('id')
        .then((arrayDePokemon) => { //array de pokemones
            const pokemonConHabilidades = body.moves.map((habilidad) => ({
                pokemon_id: arrayDePokemon[0].id,
                moves_id: habilidad.moves_id,
            }));
            return pokemonConHabilidades;
        })
        .then ((pokemonConHabilidades) => { //insert moves
            knex('pokemonsxmoves')
            .insert(pokemonConHabilidades)
            .then((res) => {
                console.log(res)
            })
        })
        .then((arrayDePokemon) => {
            const pokemonConHabilidades = body.types.map((habilidad) => ({
                pokemon_id: arrayDePokemon[0].id,
                type_id: habilidad.type_id,
            }));
            return pokemonConHabilidades;
        })
        .then ((pokemonConHabilidades) => {
            knex('pokemonsxtypes')
            .insert(pokemonConHabilidades)
            .then((res) => {
                console.log(res)
            })
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