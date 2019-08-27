import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

const PORT = 3000;
const HOSTNAME = '0.0.0.0';

router.get('/*', ctx => {
  ctx.body = 'Hello, World!';
});

app.use(router.routes())
  .use(router.allowedMethods());

app.listen(PORT, HOSTNAME);

console.log(`Server listening on port ${PORT}`);
