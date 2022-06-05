import express, { Request, Response, Express } from 'express';

const HTTP_PORT = 3000;

class ExpressServer {
  app: Express;

  constructor() {
    this.app = express();
  }

  setupRoutes(): void {
    this.app.get('/healthcheck', (req: Request, res: Response) => {
      res.json({ message: 'Hello World!' });
    });
  }

  setup(): ExpressServer {
    this.setupRoutes();
    return this;
  }

  listen(): ExpressServer {
    this.app.listen(HTTP_PORT);
    return this;
  }

  getApp(): Express {
    return this.app;
  }

  static server(): ExpressServer {
    return new ExpressServer();
  }
}

export default ExpressServer;
