import { AppDataSource } from "../data-source"

import auth from '../utils/auth'

import { User } from '../models/User'

export default class UserService {

  async getUserInfo(username, password) {
    const repository = AppDataSource.getRepository(User)
    const user: User | null = await repository.findOneBy({ username, password })
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
      expiresIn: '7 days',
    })
    return token
  }

}