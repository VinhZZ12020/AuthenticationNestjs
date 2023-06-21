import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
