import ExpressServer from './infra/http/express/express-server';
import SequelizeMysql from './infra/database/sequelize/sequelize-mysql';

export default class Main {
  public static main(): void {
    (new SequelizeMysql()).init();
    (new ExpressServer()).init();
  }
}
