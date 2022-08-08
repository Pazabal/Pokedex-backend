/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pokemonsxtypes').del()
  await knex('pokemonsxtypes').insert([
    {pokemon_id: 1, type1_id: 3, type2_id: 4, type3_id: 0},
    {pokemon_id: 2, type1_id: 3, type2_id: 4, type3_id: 0},
    {pokemon_id: 3, type1_id: 3, type2_id: 4, type3_id: 0},
    {pokemon_id: 4, type1_id: 2, type2_id: 0, type3_id: 0},
    {pokemon_id: 5, type1_id: 2, type2_id: 0, type3_id: 0},
    {pokemon_id: 6, type1_id: 2, type2_id: 8, type3_id: 0},
    {pokemon_id: 7, type1_id: 1, type2_id: 0, type3_id: 0},
    {pokemon_id: 8, type1_id: 1, type2_id: 0, type3_id: 0},
    {pokemon_id: 9, type1_id: 1, type2_id: 0, type3_id: 0},
    {pokemon_id: 10, type1_id: 7, type2_id: 0, type3_id: 0},
    {pokemon_id:11, type1_id: 7, type2_id: 0, type3_id: 0},
    {pokemon_id: 12, type1_id: 7, type2_id: 8, type3_id: 0},
    {pokemon_id: 13, type1_id: 7, type2_id: 4, type3_id: 0},
    {pokemon_id: 14, type1_id: 7, type2_id: 4, type3_id: 0},
    {pokemon_id:15, type1_id: 7, type2_id: 4, type3_id: 0},
    {pokemon_id: 16, type1_id: 9, type2_id: 8, type3_id: 0},
    {pokemon_id: 17, type1_id: 9, type2_id: 8, type3_id: 0},
    {pokemon_id: 18, type1_id: 9, type2_id: 8, type3_id: 0},
    {pokemon_id: 19, type1_id: 9, type2_id: 0, type3_id: 0},
    {pokemon_id: 20, type1_id: 9, type2_id: 0, type3_id: 0},
    {pokemon_id: 21, type1_id: 9, type2_id: 8, type3_id: 0},
    {pokemon_id: 22, type1_id: 4, type2_id: 0, type3_id: 0},
    {pokemon_id: 23, type1_id: 4, type2_id: 0, type3_id: 0},
    {pokemon_id: 24, type1_id: 6, type2_id: 0, type3_id: 0},
    {pokemon_id: 25, type1_id: 6, type2_id: 0, type3_id: 0},
    {pokemon_id: 26, type1_id: 14, type2_id: 0, type3_id: 0},
    {pokemon_id: 27, type1_id: 14, type2_id: 0, type3_id: 0},
    {pokemon_id: 28, type1_id: 14, type2_id: 0, type3_id: 0},
    {pokemon_id: 29, type1_id: 4, type2_id: 0, type3_id: 0},
    {pokemon_id: 30, type1_id: 4, type2_id: 0, type3_id: 0}
   
  ]);
};
