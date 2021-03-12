import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class IsAuthenticatedGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }
  canActive(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { user } = request;

    return !!user;
  }
}