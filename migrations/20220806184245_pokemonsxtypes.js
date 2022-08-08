/** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pokemonsxtypes', (table) => {
    table.increments('pokemonsxtypes_id');
    table.integer('pokemon_id').references('pokemon.id'); //tabla pokemon en columna id
    table.integer('type_id').references('types.id'); //1- nombre columna 2-a que tabla se hace referencia
   
  })
};

/** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pokemonsxtypes');
};
