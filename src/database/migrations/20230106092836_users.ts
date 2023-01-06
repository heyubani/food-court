import type { Knex } from "knex";

const tableName = 'users';

export async function up(knex: Knex) {
  return knex.schema.createTable(tableName, (t: {
    [x: string]: any; increments: () => void; 
}) => {
    // this creates an "id" column that gets autoincremented
    t.increments();

    t.uuid('userId')
       .notNullable()
       .unique();
    t.string('first_name')
       .notNullable();
    t.string('last_name')
    .notNullable();
    t.string('email')
       .notNullable()
       .unique();
    t.string('gender') 
       .notNullable();
    t.string('password')
       .notNullable();
    t.boolean('is_admin').defaultTo(false);
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(tableName);
}
