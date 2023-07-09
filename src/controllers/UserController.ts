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
      ctx.body = utils.respond({ errMsg: errorType.USERNAME_OR_PASSWORD_IS_INCORRECT })
    } else {
      const token: string = await userService.signin(user)
      ctx.body = utils.respond({ data: { token: `Bearer ${token}` } })
    }
  }

  async signout(ctx) {

  }
}