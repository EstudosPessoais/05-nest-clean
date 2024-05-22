import { ExecutionContext, createParamDecorator } from '@nestjs/common'
import { UserPayload } from './jwt.strategy'
import { request } from 'express'

export const CurrentUser = createParamDecorator(
  (_: never, context: ExecutionContext) => {
    context.switchToHttp().getRequest()

    return request.user as UserPayload
  },
)
