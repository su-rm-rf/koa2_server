import { redisClient } from './../utils/redis';
import { AppDataSource } from "../data-source"

import { redisPrefx } from '../configs/settings'
import auth from '../utils/auth'

import { User } from '../models/User'

export default class UserService {

  async getUserInfo(username, password?) {
    const repository = AppDataSource.getRepository(User)
    let user: User | null
    if (password) {
      user = await repository.findOneBy({ username, password })
    } else {
      user = await repository.findOneBy({ username })
    }
    return user
  }
  
  async signin(user) {
    // const privateKey = '123456'
    // const hmac = createHmac('SHA256', privateKey)
    // hmac.update(JSON.stringify({ username, password }))
    // const hex = hmac.digest('hex')
    // console.log(hex)
    
    const token: string = await auth.sign({
      id: user?.id,
      username: user?.username,
      level: user?.level,
    }, {
      algorithm: 'RS256',
      // algorithm: user.password,
      expiresIn: 60 * 1,
    })
    const tokenKey = redisPrefx + token
    await redisClient.set(tokenKey, token)
    await redisClient.expire(tokenKey, 60 * 2)
    return token
  }

  async signout(ctx) {
    const token = ctx.header.token
    const tokenKey = redisPrefx + token
    await redisClient.del(tokenKey)
  }

  async info(ctx, token) {
    const payload: any = await auth.verify(ctx, token)
    return payload
  }

  async end(ctx) {

  }

}