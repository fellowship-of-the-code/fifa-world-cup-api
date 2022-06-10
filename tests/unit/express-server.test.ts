import express from 'express';
import ExpressServer, { HTTP_PORT } from '../../src/infra/http/express/express-server';

jest.mock('express');

const mocked = (express as unknown as jest.Mock);

describe('ExpressServer.init', () => {
  it('should be a function', () => {
    const server = new ExpressServer();
    expect(server.init).toBeInstanceOf(Function);
  });

  it('should start listening to right port', () => {
    const listen = jest.fn();
    mocked.mockReturnValue({
      get: jest.fn(),
      listen,
    });

    (new ExpressServer()).init();

    expect(listen).toHaveBeenCalledWith(HTTP_PORT);
  });

  it('should setup express server', () => {
    const get = jest.fn();
    mocked.mockReturnValue({
      get,
      listen: jest.fn(),
    });

    (new ExpressServer()).init();

    expect(get).toHaveBeenCalledWith('/healthcheck', expect.anything());
  });
});
