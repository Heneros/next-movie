import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';

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
    console.log('request.', request);
    console.log('request.user', request.user);
    if (request.user) {
      return data ? request.user[data] : request.user;
    }
  },
);
