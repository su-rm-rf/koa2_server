import Router from 'koa-router'

import CategoryController from '../../controllers/wap_pc/Category'

const router = new Router()

const {
  list: category_list,
  detail: category_detail,
  add: category_add,
  update: category_update,
  delete: category_delete,
} = new CategoryController()

router.get('/list', category_list)
.get('/detail/:id', category_detail)
.post('/add', category_add)
.post('/update', category_update)
.post('/delete', category_delete)

export default router