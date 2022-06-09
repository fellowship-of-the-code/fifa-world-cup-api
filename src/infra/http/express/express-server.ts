import express, { Request, Response, Express } from 'express';

const HTTP_PORT = 3000;

export default class ExpressServer {
  private app!: Express;

  public constructor() {
    this.setup();
  }

  private setup(): void {
    this.app = express();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.get('/healthcheck', (req: Request, res: Response) => {
      res.json({ message: 'Hello World!' });
    });
  }

  public init(): void {
    this.app.listen(HTTP_PORT);
  }

  public getApp(): Express {
    return this.app;
  }
}
