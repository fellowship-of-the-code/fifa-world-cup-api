import express, { Request, Response, Express } from 'express';

const HTTP_PORT = 3000;

export default class ExpressServer {
  private app: Express;

  public constructor() {
    this.app = express();
  }

  private setupRoutes(): void {
    this.app.get('/healthcheck', (req: Request, res: Response) => {
      res.json({ message: 'Hello World!' });
    });
  }

  public setup(): ExpressServer {
    this.setupRoutes();
    return this;
  }

  public listen(): ExpressServer {
    this.app.listen(HTTP_PORT);
    return this;
  }

  public getApp(): Express {
    return this.app;
  }

  public static server(): ExpressServer {
    return new ExpressServer();
  }
}
