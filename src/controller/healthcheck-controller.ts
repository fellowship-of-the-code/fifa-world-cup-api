import MysqlSequelize, { ConnStatus } from '../infra/database/sequelize/mysql-sequelize';

export type healthcheck = {
  message: string
  database: ConnStatus
};

export default class HealthCheckController {
  public static async healthcheck(): Promise<healthcheck> {
    const db = new MysqlSequelize();
    return {
      message: 'Hello World!',
      database: await db.getConnStatus(),
    };
  }
}
