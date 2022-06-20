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

  it('/healthcheck all good', async () => {
    mockSeq.mockReturnValueOnce({
      authenticate: jest.fn(),
    });
    const response = await supertest(app)
      .get('/healthcheck');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({
      message: 'Hello World!',
      database: 'connected',
    });
  });

  it('/healthcheck database disconnected', async () => {
    mockSeq.mockReturnValueOnce({
      authenticate: jest.fn().mockRejectedValue(new Error('Error while connecting')),
    });
    const response = await supertest(app)
      .get('/healthcheck');

    expect(response.statusCode).toEqual(200);
    expect(response.body).toMatchObject({
      message: 'Hello World!',
      database: 'disconnected',
    });
  });
});
