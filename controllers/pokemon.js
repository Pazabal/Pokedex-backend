const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getAllPokemons = async () => {
    let pokemonFinal = {datos_pokemon:{},  types:[]}
    return knex 
    .column('id' , 'name' , 'weight','height' ,'description', 'image', 'hp', 'atk', 'def', 'satk','sdef', 'spd', 'type')
    .select()
    .from('pokemon')
    // .then((arrayDePokemon) => {
    //     return pokemonFinal['datos_pokemon'] = arrayDePokemon
    //     })
    // await knex
    // .select('types.name')
    // .from('types')
    // .innerJoin('pokemonsxtypes', 'types.id', "pokemonsxtypes.types_id")
    // .innerJoin('pokemon', 'pokemonsxtypes.pokemon_id', 'pokemon.id')
    // .where('pokemon.id', pokemonFinal.datos_pokemon.id)
    // .then((pokemonsTypes) => {
    //     console.log(pokemonsTypes)
    //     pokemonsTypes.map((type) => {
    //         pokemonFinal.types.push(type)
    //         })
    //     })
    // return pokemonFinal
    // }
}

const getPokemonById = async (id) =>{
    let pokemonFinal = {datos_pokemon:{}, moves:[], types:[]}
    await knex('pokemon')
    .where('id', id)
    .select('name', 'id', 'weight', 'height', 'description', 'image', 'hp', 'atk', 'def', 'satk', 'sdef', 'spd')
    .then((arrayDePokemon) => {
    return pokemonFinal['datos_pokemon'] = arrayDePokemon[0]
    })
    await knex
    .select("moves.name")
    .from("moves")
    .innerJoin("pokemonsxmoves", "moves.id", "pokemonsxmoves.moves_id")
    .innerJoin("pokemon", "pokemonsxmoves.pokemon_id", "pokemon.id")
    .where("pokemon.id", pokemonFinal.datos_pokemon.id)
    .then((pokemonsMoves) => {
    pokemonsMoves.map((move) => {
    pokemonFinal.moves.push(move)
    })
    return pokemonFinal
    })
    await knex
    .select('types.name')
    .from('types')
    .innerJoin('pokemonsxtypes', 'types.id', "pokemonsxtypes.types_id")
    .innerJoin('pokemon', 'pokemonsxtypes.pokemon_id', 'pokemon.id')
    .where('pokemon.id', pokemonFinal.datos_pokemon.id)
    .then((pokemonsTypes) => {
        pokemonsTypes.map((type) => {
            pokemonFinal.types.push(type)
        })
        
    })
    .catch((er) =>{
        res.json (er)
    })
    return pokemonFinal
   
  }


  const getFirstPokemon = async () =>{
    let pokemonFinal = {datos_pokemon:{}, moves:[], types:[]}
    await knex.select('*')
    .from('pokemon')
    .first()
    .then((arrayDePokemon) => {
        console.log(arrayDePokemon)
        return pokemonFinal['datos_pokemon'] = arrayDePokemon
        })
        await knex
        .select("moves.name")
        .from("moves")
        .innerJoin("pokemonsxmoves", "moves.id", "pokemonsxmoves.moves_id")
        .innerJoin("pokemon", "pokemonsxmoves.pokemon_id", "pokemon.id")
        .where("pokemon.id", pokemonFinal.datos_pokemon.id)
        .then((pokemonsMoves) => {
        pokemonsMoves.map((move) => {
        pokemonFinal.moves.push(move)
        })
        return pokemonFinal
        })
        await knex
        .select('types.name')
        .from('types')
        .innerJoin('pokemonsxtypes', 'types.id', "pokemonsxtypes.types_id")
        .innerJoin('pokemon', 'pokemonsxtypes.pokemon_id', 'pokemon.id')
        .where('pokemon.id', pokemonFinal.datos_pokemon.id)
        .then((pokemonsTypes) => {
            pokemonsTypes.map((type) => {
                pokemonFinal.types.push(type)
            })
            
        })
        .catch((er) =>{
            res.json (er)
        })
        return pokemonFinal
       
  }
  
    const createPokemon = async (body) => {
        let pokemonid = '';
        await knex ('pokemon')
        .insert(body.pokemon)
        .returning('id')
        .then((arrayDePokemon) => { //array de pokemones
            pokemonid = arrayDePokemon[0].id
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
        const pokemonTypes = body.types.map((type) => ({
            pokemon_id: pokemonid, 
            types_id: type.types_id
        }));
        await knex('pokemonsxtypes')
        .insert(pokemonTypes)
        .then((res) => {
            console.log(res)
        }) 
 
        console.log(pokemonTypes);
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
    deletePokemon,
    getFirstPokemon
}