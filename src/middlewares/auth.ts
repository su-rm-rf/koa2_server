import { authError } from "../constants"
import { redisClient } from './../utils/redis'
import auth from "../utils/auth"
import UserService from "../services/UserService"
import { redisPrefx } from '../configs/settings'

export default () => {
  return async (ctx, next) => {
    const token = ctx.header.token

    // header中的token为空
    if (!token) { 
      await next(authError[10039])
      return;
    }

    // 从redis中读取token值
    const tokenKey = redisPrefx + token
    const tokenValue = await redisClient.get(tokenKey)
    // console.log('tokenValue', tokenValue)
    // 若redis中不存在，说明登录状态已超时
    if (!tokenValue) {
      await next(authError[10031])
      return;
    }
    
    // 用jwt校验redis中缓存的token
    const payload: any = await auth.verify(ctx, tokenValue)
    // console.log('payload', payload)
    // if (!payload) {
      // 若该缓存已过期, 重新生成token, 重新设置有效期, 整个过程对前端用户无感
      const userInfo = {
        id: payload.id,
        username: payload.username,
        level: payload.level,
      }
      const newToken = await auth.sign(userInfo, {
        algorithm: 'RS256',
        expiresIn: 60 * 1,
      })
      await redisClient.set(tokenKey, newToken)
      await redisClient.expire(tokenKey, 60 * 2)
      // 将用户信息注入到全局
      ctx.userInfo = userInfo
      console.log(ctx.userInfo)
    // }
    
    await next()
  }
}