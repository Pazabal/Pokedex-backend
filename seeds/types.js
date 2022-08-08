/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('types').del()
  await knex('types').insert([
    {name: 'water'},
    {name: 'fire'},
    {name: 'grass'},
    {name: 'poison'},
    {name: 'ghost'},
    {name: 'electric'},
    {name: 'bug'},
    {name: 'flying'},
    {name: 'normal'},
    {name: 'psychic'},
    {name: 'steel'},
    {name: 'rock'},
    {name: 'dark'},
    {name: 'ground'},
    {name: 'dragon'},
    {name: 'fairy'},
    {name: 'fighting'},
    {name: 'ice'}
    
  ]);
};
