import { redisClient } from './../utils/redis';
import utils from '../utils'
import { errorType } from '../constants'

import UserService from '../services/UserService'
import { User } from '../models/User'

const userService = new UserService()

export default class UserController {
  async signin(ctx) {
    const { username, password } = ctx.request.body
    const user: User | null = await userService.getUserInfo(username, password)
    if (!user) {
      utils.respond(ctx, { errMsg: errorType.USERNAME_OR_PASSWORD_IS_INCORRECT })
      ctx.throw(errorType.USERNAME_OR_PASSWORD_IS_INCORRECT)
    } else {
      const token: string = await userService.signin(user)
      utils.respond(ctx, { data: { token: `Bearer ${token}` } })
    }
  }

  async signout(ctx) {
    await userService.signout(ctx)
    utils.respond(ctx, { data: null })
  }

  async info(ctx) {
    const { token } = ctx.params
    const payload = await userService.info(ctx, token)
  }
}