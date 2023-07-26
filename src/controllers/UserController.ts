import utils from '../utils'
import { authError } from '../constants'
import auth from '../utils/auth'

import UserService from '../services/UserService'
import { User } from '../models/User'

const userService = new UserService()

export default class UserController {
  async signin(ctx) {
    const { username, password } = ctx.request.body
    const user: User | null = await userService.getUserInfo(username, password)
    if (!user) {
      utils.respond(ctx, { errMsg: authError[10039], errCode: 10039 })
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
    const payload = await auth.verify(ctx, token)
    console.log(token, payload)
    if (!payload) {
      utils.respond(ctx, { errMsg: authError[10031], errCode: 10031 })
    } else {
      const token2 = await userService.signin(payload)
      utils.respond(ctx, { data: { token: `Bearer ${token2}` } })
    }
  }
}