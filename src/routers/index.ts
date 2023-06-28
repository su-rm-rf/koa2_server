import Router from 'koa-router'

import wap_pc from './wap_pc'
import admin from './admin'

const router = new Router()

router.get('/', async(ctx) => {
  ctx.body = 'response from server'
})

router.use('/wap_pc', wap_pc.routes(), wap_pc.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())

export default router