/** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pokemonsxtypes', (table) => {
    table.increments('pokemonsxtypes_id');
    table.integer('pokemon_id').references('pokemon.id'); //tabla pokemon en columna id
    table.integer('type1_id').references('types.id'); //1- nombre columna 2-a que tabla se hace referencia
    table.integer('type2_id').references('types.id'); //se puede hacer opcional??
    table.integer('type3_id').references('types.id');
  })
};

/** 
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pokemonsxtypes');
};
