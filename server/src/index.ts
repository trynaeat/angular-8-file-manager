import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as Router from 'koa-router';
import * as cors from '@koa/cors';
import { config } from './config';
import { MongoClient } from 'mongodb';
import { initialize } from './auth/auth';
import { router as loginRoutes } from './routes/login';
import * as https from 'https';
import * as fs from 'fs';

const httpsOptions = {
  key: fs.readFileSync(`${__dirname}/../ssl/server.key`),
  cert: fs.readFileSync(`${__dirname}/../ssl/server.crt`),
  ca: fs.readFileSync(`${__dirname}/../ssl/rootCA.crt`),
  requestCert: true,
  rejectUnauthorized: false
};

const app = new Koa();
const router = new Router();

const PORT = 3000;
const HOSTNAME = '0.0.0.0';

router.get('/*', ctx => {
  ctx.body = 'Hello, World!';
});

app.use(cors());
app.use(bodyParser());
app.use(initialize());

app.use(loginRoutes.routes())
  .use(router.routes())
  .use(router.allowedMethods());

console.log('Connecting to MongoDB');
MongoClient.connect(config.dbUrl, { useNewUrlParser: true })
  .then(result => {
    app.context.mongoDb = result.db('file-manager');
    console.log('Connected to MongoDB instance.');
    https.createServer(httpsOptions, app.callback())
      .listen(PORT, HOSTNAME);

    console.log(`Server listening on port ${PORT}`);
  });