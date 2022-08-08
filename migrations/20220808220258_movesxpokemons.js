/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pokemonsxmoves' , (table) =>{
    table.increments('id')
    table.integer('pokemon_id').references('pokemon.id')
    table.integer('moves_id').references('moves.id')
    
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pokemonsxmoves')
};
