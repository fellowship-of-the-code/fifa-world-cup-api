import express, { Request, Response, Express } from 'express';

const HTTP_PORT = 3000;

class ExpressServer {
  app: Express;

  constructor() {
    this.app = express();
    this.setup();
  }

  setupRoutes() {
    this.app.get('/healthcheck', (req: Request, res: Response) => {
      res.json({ message: 'Hello World!' });
    });
  }

  setup() {
    this.setupRoutes();
  }

  listen() {
    this.app.listen(HTTP_PORT);
  }

  getApp() {
    return this.app;
  }

  static server() {
    return new ExpressServer();
  }
}

export default ExpressServer;
