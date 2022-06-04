import express, { Request, Response, Express } from 'express';

const HTTP_PORT = 3000;

export default class ExpressServer {
  app: Express;

  constructor() {
    this.app = express();
  }

  setupRoutes() {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });
  }

  setup() {
      this.setupRoutes();
  }

  listen() {
    this.app.listen(HTTP_PORT);
  }

  static init() {
    const server = new ExpressServer();
    server.setup();
    server.listen();
  }
}
