import Router from 'koa-router'

import OrderController from '../controllers/Order'

const router = new Router()

const {
  list: order_list,
  detail: order_detail,
  add: order_add,
  update: order_update,
  delete: order_delete,
} = new OrderController()

router.get('/list', order_list)
.get('/detail/:id', order_detail)
.post('/add', order_add)
.post('/update', order_update)
.post('/delete', order_delete)

export default router