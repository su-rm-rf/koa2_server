import Router from 'koa-router'

import OrderController from '../../controllers/wap_pc/Order'

const router = new Router()

const {
  list: order_list,
  detail: order_detail,
  add: order_add,
  update: order_update,
  delete: order_delete,
} = new OrderController()

/**
 * @openapi
 * /wap_pc/order/list:
 *  get:
 *    description: get my orders
 *    responses:
 *      200:
 *        description: return an order list
 */
router.get('/list', order_list)
.get('/detail/:id', order_detail)
/**
 * @openapi
 * /wap_pc/order/add:
 *  post:
 *    description: add new order
 *    responses:
 *      200:
 *        description: return add result
 */
.post('/add', order_add)
.post('/update', order_update)
.post('/delete', order_delete)

export default router