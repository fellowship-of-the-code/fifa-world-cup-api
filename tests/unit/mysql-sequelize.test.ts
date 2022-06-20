import { Sequelize } from 'sequelize';
import MysqlSequelize from '../../src/infra/database/sequelize/mysql-sequelize';

jest.mock('sequelize');

const sequelizeMock = (Sequelize as unknown as jest.Mock);

describe('MysqlSequelize.connect', () => {
  it('should be a function', () => {
    const db = new MysqlSequelize();
    expect(db.connect).toBeInstanceOf(Function);
  });

  it('should call authenticate fuction to connect to database', () => {
    const authenticate = jest.fn();
    sequelizeMock.mockReturnValueOnce({
      authenticate,
    });

    const db = new MysqlSequelize();
    db.connect();

    expect(authenticate).toHaveBeenCalled();
  });
});

describe('MysqlSequelize.isConnected', () => {
  it('should be a function', () => {
    const db = new MysqlSequelize();
    expect(db.isConnected).toBeInstanceOf(Function);
  });

  it('should return true when it is able to connect to database', async () => {
    sequelizeMock.mockReturnValueOnce({
      authenticate: jest.fn(),
    });

    const db = new MysqlSequelize();
    const isConnected = await db.isConnected();

    expect(isConnected).toBe(true);
  });

  it('should return false when it is unable to connect to database', async () => {
    sequelizeMock.mockReturnValueOnce({
      authenticate: jest.fn().mockRejectedValueOnce(new Error('Error while connecting')),
    });

    const db = new MysqlSequelize();
    const isConnected = await db.isConnected();

    expect(isConnected).toBe(false);
  });
});
