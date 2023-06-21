import { Controller, Get, Post, Request } from '@nestjs/common';

import { LocalAuthGuard } from './auth/local-auth.guard';
import { UseGuards } from '@nestjs/common';

import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
@Controller()
export class AppController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	// POST/login
	@Post('login')
	login(@Request() req): any {
		return this.authService.login(req.user);
	}

	@UseGuards(JwtAuthGuard)
	// Get /protected
	@Get('protected')
	getHello(@Request() req): string {
		//Todo : require an Bearer token
		return req.user;
	}
}
