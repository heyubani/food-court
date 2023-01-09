import type { Knex } from "knex";
import 'dotenv/config';
import { knexSnakeCaseMappers } from 'objection';

module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    directory: './src/database/migrations',
    stub: './src/database/migration.stub',
  },
  seeds: {
    directory: './src/database/seeds',
    stub: './src/database/seed.stub'
  },
  ...knexSnakeCaseMappers()
} as Knex.Config;
