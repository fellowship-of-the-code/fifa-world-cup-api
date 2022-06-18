import { Express } from 'express';
import supertest from 'supertest';
import { Sequelize } from 'sequelize';
import ExpressServer from '../../src/infra/http/express/express-server';

jest.mock('sequelize');

const mockSeq = (Sequelize as unknown as jest.Mock);

describe('Express Server', () => {
  let app: Express;

  beforeAll(() => {
    app = (new ExpressServer()).setup().getApp();
  });

  it('/healthcheck', async () => {
    const response = await supertest(app)
      .get('/healthcheck');

    mockSeq.mockReturnValue({
      authenticate: jest.fn(),
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({ message: 'Hello World!' });
  });
});
