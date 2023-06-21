import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
	imports: [
		UsersModule,
		// PassportModule.register({ session: true }),
		PassportModule,
		JwtModule.register({
			secret: 'secret',
			signOptions: { expiresIn: '10s' }
		})
	],
	providers: [ AuthService, LocalStrategy, JwtStrategy ],
	exports: [ AuthService ]
})
export class AuthModule {}
