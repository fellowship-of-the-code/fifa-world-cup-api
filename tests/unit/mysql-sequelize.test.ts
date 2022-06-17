import { Sequelize } from 'sequelize';
import MysqlSequelize from '../../src/infra/database/sequelize/mysql-sequelize';

jest.mock('sequelize');

const mocked = (Sequelize as unknown as jest.Mock);

describe('MysqlSequelize.connect', () => {
  it('should be a function', () => {
    const db = new MysqlSequelize();
    expect(db.connect).toBeInstanceOf(Function);
  });

  it('should call authenticate fuction to connect to database', () => {
    const authenticate = jest.fn();
    mocked.mockReturnValue({
      authenticate,
    });

    const db = new MysqlSequelize();
    db.connect();

    expect(authenticate).toHaveBeenCalled();
  });
});
