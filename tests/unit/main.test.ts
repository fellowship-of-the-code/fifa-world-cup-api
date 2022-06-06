import supertest from 'supertest';
import { Express } from 'express';
import ExpressServer from '../../src/infra/http/express/express-server';

describe('Express Server', () => {
  let app: Express;

  beforeAll(() => {
    app = ExpressServer.server().setup().getApp();
  });

  it('/', async () => {
    const response = await supertest(app)
      .get('/healthcheck');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({ message: 'Hello World!' });
  });
});
