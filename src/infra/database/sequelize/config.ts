import { Options } from 'sequelize';

export const DB_NAME = 'fifa-world-cup';
export const DB_USER = 'galvao-bueno';
export const DB_USER_PASSWORD = 'amigos-da-rede-globo';
export const DB_DEFAULT_OPTIONS: Options = {
  host: 'db',
  dialect: 'mysql',
};

export default {
  DB_NAME,
  DB_USER,
  DB_USER_PASSWORD,
  DB_DEFAULT_OPTIONS,
};
