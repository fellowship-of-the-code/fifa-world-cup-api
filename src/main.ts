import ExpressServer from './infra/http/express/express-server';
import SequelizeMysql from './infra/database/sequelize/sequelize-mysql';

(new SequelizeMysql()).testConnAndLog();
ExpressServer.server().setup().listen();
