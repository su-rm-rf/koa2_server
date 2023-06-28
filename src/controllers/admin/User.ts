import { AppDataSource } from "../../data-source"

import utils from '../../utils'

import { User } from '../../models/User'

export default class UserController {
  async signin(ctx) {
    const { username, password } = ctx.request.body
    const repository = AppDataSource.getRepository(User)
    const user = await repository.findOneBy({ username, password })
    ctx.body = utils.respond({ data: user })
  }

  async signout(ctx) {

  }
}