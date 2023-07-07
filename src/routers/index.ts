import Router from 'koa-router'

import openapiSpecification from '../utils/swagger'

import wap_pc from './wap_pc'
import admin from './admin'

const router = new Router()

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: response from server
 */
router.get('/', async(ctx) => {
  ctx.body = 'response from server'
})

router.get('/swagger.json', async(ctx) => {
  ctx.set('Content-Type', 'application/json')
  ctx.body = openapiSpecification
})

router.use('/wap_pc', wap_pc.routes(), wap_pc.allowedMethods())
router.use('/admin', admin.routes(), admin.allowedMethods())

export default router