import Router from 'koa-router'

import category from './category'
import order from './order'

const router = new Router()

router.use('/order', order.routes(), order.allowedMethods())
router.use('/category', category.routes(), category.allowedMethods())

export default router