import MysqlSequelize from '../../src/infra/database/sequelize/mysql-sequelize';

describe('MysqlSequelize.connect', () => {
  it('should be a function', () => {
    const db = new MysqlSequelize();
    expect(db.connect).toBeInstanceOf(Function);
  });
});
