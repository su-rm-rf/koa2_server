import Router from 'koa-router'

import user from './user'
import category from './category'

const router = new Router()

router.use('/user', user.routes(), user.allowedMethods())
router.use('/category', category.routes(), category.allowedMethods())

export default router