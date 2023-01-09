import type { Knex } from 'knex';

const tableName = 'brands';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, t => {
    // this creates an "id" column that gets autoincremented
    t.increments('id').primary();

    t.string('name').notNullable();
    t.string('description').defaultTo(null);
    t.string('price').notNullable();
    t.string('category') .defaultTo(null);
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
