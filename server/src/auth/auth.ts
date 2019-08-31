import { ExtractJwt, Strategy } from 'passport-jwt';
import * as passport from 'koa-passport';
import { config } from '../config';

const params = {
	secretOrKey: config.jwtSecret,
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

function auth(jwt_payload: object, done: Function) {
	done(null, jwt_payload);
}

export function initialize() {
	const headerStrategy = new Strategy(params, auth);

	passport.use('jwt', headerStrategy);
	return passport.initialize();
}

export function authenticate() {
	return passport.authenticate('jwt');
}
