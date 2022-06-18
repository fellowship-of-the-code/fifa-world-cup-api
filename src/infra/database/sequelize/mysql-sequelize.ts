import { Sequelize } from 'sequelize';
import config from './config';

export type ConnStatus = 'connected' | 'disconnected'

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

  public async connect(): Promise<void> {
    await this.sequelize.authenticate();
  }

  public async isConnected(): Promise<boolean> {
    try {
      await this.connect();
      return true;
    } catch (e) {
      return false;
    }
  }

  public async getConnectionStatus(): Promise<ConnStatus> {
    return await this.isConnected() ? 'connected' : 'disconnected';
  }
}
