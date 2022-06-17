import { Sequelize } from 'sequelize';
import config from './config';

export default class MysqlSequelize {
  private sequelize!: Sequelize;

  public constructor() {
    this.sequelize = new Sequelize(
      config.DB_NAME,
      config.DB_USER,
      config.DB_USER_PASSWORD,
      config.DB_DEFAULT_OPTIONS,
    );
  }

  public connect():void {
    this.sequelize.authenticate();
  }
}
