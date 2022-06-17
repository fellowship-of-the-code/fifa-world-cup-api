import { db } from '../main';
import { ConnStatus } from '../infra/database/sequelize/mysql-sequelize';

export type healthcheck = {
  message: string
  database: ConnStatus
};

export default class HealthCheckController {
  public static async healthcheck(): Promise<healthcheck> {
    return {
      message: 'Hello World!',
      database: await db.getConnStatus(),
    };
  }
}
