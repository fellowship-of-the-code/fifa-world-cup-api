import { Sequelize } from 'sequelize';
import config from './config';

export default class MysqlSequelize {
  private sequelize!: Sequelize;

  public init(): void {
    this.setup();
    this.connect();
  }

  private setup():void {
    this.sequelize = new Sequelize(
      config.DB_NAME,
      config.DB_USER,
      config.DB_USER_PASSWORD,
      config.DB_DEFAULT_OPTIONS,
    );
  }

  private connect():void {
    this.sequelize.authenticate();
  }
}
