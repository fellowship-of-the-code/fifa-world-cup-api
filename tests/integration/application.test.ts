import { Express } from 'express';
import supertest from 'supertest';
import ExpressServer from '../../src/infra/http/express/express-server';

describe('Express Server', () => {
  let app: Express;

  beforeAll(() => {
    app = (new ExpressServer()).getApp();
  });

  it('/healthcheck', async () => {
    const response = await supertest(app)
      .get('/healthcheck');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({ message: 'Hello World!' });
  });
});
