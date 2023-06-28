import Router from 'koa-router'

import CategoryController from '../../controllers/admin/Category'

const router = new Router()

const {
  list, detail
} = new CategoryController()

router.get('/list', list)
.get('/detail/:id', detail)

export default router