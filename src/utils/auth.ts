import jwt from 'jsonwebtoken'

import { privateKey, publicKey } from '../configs/settings'

export default {

  async sign(payload, options) {
    return await jwt.sign(payload, privateKey, options)
  },
  
  async verify(ctx, token?) {
    try {
      token = token ?? ctx.header.token.replace('Bearer ', '')
      const payload = await jwt.verify(token, publicKey)
      return payload
    } catch(err) {
      return ''
    }
  },

  async refresh() {

  }

}
