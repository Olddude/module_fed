const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const log4js = require('log4js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = {
  PORT: 8080,
  HOST: 'localhost',
  ORIGIN: '*',
  LOG_LEVEL: 'debug',
  SECRET: 'secret'
};

const logger = log4js.getLogger();
logger.level = config.LOG_LEVEL;

const app = express();

app
  .use(cors({ origin: config.ORIGIN }))
  .use(morgan('dev', { stream: { write: message => logger.info(message) } }))
  .use(express.static(path.resolve(__dirname, 'public')))
  .use(cookieParser(config.SECRET))
  .use(bodyParser.json());

const server = http.createServer(app);

server.listen(config.PORT, config.HOST, () => {
  logger.info(`listening on http://${config.HOST}:${config.PORT}`);
});
