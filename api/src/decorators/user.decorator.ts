import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';
import * as jwt from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';

export const User = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    let request: any;
    const contextType = context.getType();

    if (contextType === 'http') {
      request = context.switchToHttp().getRequest();
    } else {
      const gqlContext = GqlExecutionContext.create(context);
      request = gqlContext.getContext().req;
    }
    if (!request) {
      throw new UnauthorizedException('Request object not found');
    }

    if (request.user) {
      return data ? request.user[data] : request.user;
    }
  },
);
