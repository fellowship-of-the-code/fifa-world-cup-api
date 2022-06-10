import express, { Request, Response, Express } from 'express';

export const HTTP_PORT = 3000;

export default class ExpressServer {
  private app: Express;

  public constructor() {
    this.app = express();
  }

  public init(): void {
    this.setup().getApp().listen(HTTP_PORT);
  }

  public setup(): ExpressServer {
    this.setupRoutes();
    return this;
  }

  private setupRoutes(): void {
    this.app.get('/healthcheck', (req: Request, res: Response) => {
      res.json({ message: 'Hello World!' });
    });
  }

  public getApp(): Express {
    return this.app;
  }
}
