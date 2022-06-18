import MysqlSequelize, { ConnStatus } from '../infra/database/sequelize/mysql-sequelize';

export type HealthCheck = {
  message: string
  database: ConnStatus
};

export default class HealthCheckController {
  public static async healthcheck(): Promise<HealthCheck> {
    const db = new MysqlSequelize();
    return {
      message: 'Hello World!',
      database: await db.getConnectionStatus(),
    };
  }
}
