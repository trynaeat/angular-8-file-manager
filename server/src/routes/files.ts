import * as Router from 'koa-router';
import { Db } from 'mongodb';
import { authenticate } from '../auth/auth';

export const router = new Router();

router.get('/files', authenticate(), async ctx => {
  const db = <Db>ctx.mongoDb;
  let page, size;
  try {
    page = parseInt(ctx.query.page);
    size = parseInt(ctx.query.size);
  } catch (err) {
    return ctx.response.status = 400;
  }

  if (!page || !size || page < 1) {
    return ctx.response.status = 400;
  }
  try {
    const totalCount = await db.collection('files').count();
    const data = await db.collection('files')
      .find({}, { projection: { description : 1, filename : 1 } })
      .skip((page - 1) * size)
      .limit(size)
      .toArray();
    ctx.body = { data, totalCount };
  } catch (err) {
    console.log(err);
    ctx.response.status = 500;
  }
});
