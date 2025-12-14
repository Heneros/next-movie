import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    const user = req.user;

    if (!user) {
      return;
      ///  console.log('Current user:', user);
    }

    const safeRequestMeta = {
      method: req?.method,
      url: req?.originalUrl ?? req?.url,
      ip: req?.ip,
      params: req?.params,
      query: req?.query,
    };

    return next.handle().pipe(
      map((data) => {
        return {
          users: data,
          _request: safeRequestMeta,
          //   _viewer: safeUser,
        };
      }),
    );
  }
}
