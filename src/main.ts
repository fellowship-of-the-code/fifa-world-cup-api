import ExpressServer from './infra/http/express/express-server';
import MysqlSequelize from './infra/database/sequelize/mysql-sequelize';

export const db = new MysqlSequelize();
export const server = new ExpressServer();

export default class Main {
  public static main(): void {
    db.connect();
    server.init();
  }
}
