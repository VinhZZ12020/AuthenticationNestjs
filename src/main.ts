import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// save in session method security
	// app.use(
	// 	session({
	// 		secret: 'keyboard cat',
	// 		resave: false,
	// 		saveUninitialized: false,
	// 		cookie: { maxAge: 10 * 60 * 1000 }
	// 	})
	// );

	// app.use(passport.initialize());
	// app.use(passport.session());
	await app.listen(3000);
}
bootstrap();
