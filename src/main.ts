import ExpressServer from './infra/http/express/express-server';
import MysqlSequelize from './infra/database/sequelize/mysql-sequelize';

export default class Main {
  public static main(): void {
    (new MysqlSequelize()).init();
    (new ExpressServer()).init();
  }
}
