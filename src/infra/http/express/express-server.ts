import express, { Express } from 'express';
import HealthCheckAdapter from '../../../adapters/healthcheck-adapter';
import HealthCheckController from '../../../controller/healthcheck-controller';

export const HTTP_PORT = 3000;

export default class ExpressServer {
  private app: Express;

  public constructor() {
    this.app = express();
  }

  public init(): void {
    this
      .setup()
      .start();
  }

  public setup(): ExpressServer {
    this.setupRoutes();
    return this;
  }

  private setupRoutes(): void {
    this.getApp().get('/healthcheck', HealthCheckAdapter.healthcheck(HealthCheckController.healthcheck));
  }

  private start(): void {
    this
      .getApp()
      .listen(HTTP_PORT);
  }

  public getApp(): Express {
    return this.app;
  }
}
