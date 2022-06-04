import supertest from 'supertest';
import ExpressServer from '../../src/infra/http/express/express-server';

const app = ExpressServer.server().getApp();

describe('Express Server', () => {
  it('/', async () => {
    const response = await supertest(app)
      .get('/healthcheck');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({ message: 'Hello World!' });
  });
});
