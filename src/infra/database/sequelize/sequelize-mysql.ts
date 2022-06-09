import { Sequelize, Options } from 'sequelize';

const DB_NAME = 'fifa-world-cup';
const DB_USER = 'galvao-bueno';
const DB_USER_PASSWORD = 'amigos-da-rede-globo';

export default class SequelizeMysql {
  private sequelize!: Sequelize;

  public constructor() {
    this.setup();
  }

  private setup():void {
    this.sequelize = new Sequelize(
      DB_NAME,
      DB_USER,
      DB_USER_PASSWORD,
      SequelizeMysql.getOptions(),
    );
  }

  public static getOptions(): Options {
    return {
      host: 'db',
      dialect: 'mysql',
    };
  }

  public connect():void {
    this.sequelize.authenticate();
  }

  public async testConnAndLog(): Promise<void> {
    try {
      await this.connect();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}
