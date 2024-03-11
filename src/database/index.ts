import Knex from 'knex';
import KnexConfig from './knexfile'; // Adjust the path accordingly

// Initialize Knex with the configuration from knexfile.ts
const knex = Knex(KnexConfig);

// Export the initialized Knex instance
export default knex;
