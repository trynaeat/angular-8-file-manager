import * as Router from 'koa-router';
import * as passwordHash from 'password-hash';
import * as jwt from 'jwt-simple';
import { config } from '../config';

export const router = new Router();

router.post('/login', async ctx => {
  if(ctx.request.body.username && ctx.request.body.password) {
    var username = ctx.request.body.username;
    var password = ctx.request.body.password;
    let user;
    try {
      user = await ctx.mongoDb.collection('users').findOne({ username: username });
    } catch (err) {
      return ctx.response.status = 500;
    }
    if(user && passwordHash.verify(password, user.password)) {
      var payload = {
        exp: Math.round(Date.now() / 1000 + 30 * 60), //Expire token in 30 minutes
        id: user._id,
        username: user.username,
      };
      var token = jwt.encode(payload, config.jwtSecret);
      ctx.body = {
        token,
      };
    } else {
      ctx.status = 401;
      ctx.body = { msg : 'User not found.' };
    }
  } else {
    ctx.status = 401;
  }
});
