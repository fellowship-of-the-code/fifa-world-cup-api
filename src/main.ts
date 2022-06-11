import ExpressServer from './infra/http/express/express-server';
import MysqlSequelize from './infra/database/sequelize/mysql-sequelize';

export default class Main {
  public static main(): void {
    const database = new MysqlSequelize();
    const server = new ExpressServer();

    database.init();
    server.init();
  }
}
