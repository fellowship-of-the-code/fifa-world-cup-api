import MysqlSequelize from '../../src/infra/database/sequelize/mysql-sequelize';

describe('MysqlSequelize.init', () => {
  it('should be a function', () => {
    const database = new MysqlSequelize();
    expect(database.init).toBeInstanceOf(Function);
  });
});
