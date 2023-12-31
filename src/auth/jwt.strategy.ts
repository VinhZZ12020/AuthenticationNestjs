import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: 'secret',
			ignoreExpiration: false
			// passReqToCallback: true,
		});
	}
	async validate(payload: any) {
		return {
			id: payload.sub,
			name: payload.name
		};
	}
}
