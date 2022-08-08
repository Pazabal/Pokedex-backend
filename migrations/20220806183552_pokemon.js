/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('pokemon', (table) => {
      table.increments('id');
      table.string('name');
      table.float('height');
      table.float('weight');
      table.text('description');
      table.string('image');
      table.integer('hp');
      table.integer('atk');
      table.integer('def');
      table.integer('satk');
      table.integer('sdef');
      table.integer('spd');
    })
  
    
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('pokemon');
  };
