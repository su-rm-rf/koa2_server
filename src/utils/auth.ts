import jwt from 'jsonwebtoken'

import { privateKey, publicKey } from '../configs/settings'

export default {

  async sign(payload, options) {
    return await jwt.sign(payload, privateKey, options)
  },
  
  async verify(ctx) {
    try {
      const token = ctx.header.authorization.replace('Bearer ', '')
      const payload = await jwt.verify(token, publicKey)
      return payload
    } catch(err) {
      console.error('jwt verify error:', err)
      return ''
    }
  },

}
