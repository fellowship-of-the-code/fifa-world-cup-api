import express from 'express';
import ExpressServer, { HTTP_PORT } from '../../src/infra/http/express/express-server';

jest.mock('express');

const expressMock = (express as unknown as jest.Mock);

describe('ExpressServer.init', () => {
  it('should be a function', () => {
    const server = new ExpressServer();
    expect(server.init).toBeInstanceOf(Function);
  });

  it('should start listening to right port', () => {
    const listen = jest.fn();
    expressMock.mockReturnValueOnce({
      get: jest.fn(),
      listen,
    });

    const server = new ExpressServer();
    server.init();

    expect(listen).toHaveBeenCalledWith(HTTP_PORT);
  });

  it('should setup express server routes', () => {
    const get = jest.fn();
    expressMock.mockReturnValueOnce({
      get,
      listen: jest.fn(),
    });

    const server = new ExpressServer();
    server.init();

    expect(get).toHaveBeenCalledWith('/healthcheck', expect.anything());
  });
});

describe('ExpressServer.setup', () => {
  it('should be a function', () => {
    const server = new ExpressServer();
    expect(server.setup).toBeInstanceOf(Function);
  });

  it('should setup express server routes', () => {
    const get = jest.fn();
    expressMock.mockReturnValueOnce({
      get,
      listen: jest.fn(),
    });

    const server = new ExpressServer();
    server.setup();

    expect(get).toHaveBeenCalledWith('/healthcheck', expect.anything());
  });
});

describe('ExpressServer.getApp', () => {
  it('should be a function', () => {
    const server = new ExpressServer();
    expect(server.getApp).toBeInstanceOf(Function);
  });

  it('should return app', () => {
    const appMock = {
      get: jest.fn(),
      listen: jest.fn(),
    };
    expressMock.mockReturnValueOnce(appMock);

    const server = new ExpressServer();
    const app = server.getApp();

    expect(app).toEqual(appMock);
  });
});
