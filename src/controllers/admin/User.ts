import { AppDataSource } from "../../data-source"
import { User } from '../../models/User'

export default class UserController {
  async signin(ctx) {
    const { username, password } = ctx.request.body
    const repository = AppDataSource.getRepository(User)
    const user = await repository.findOneBy({ username, password })
    ctx.body = user
  }

  async signout(ctx) {

  }
}