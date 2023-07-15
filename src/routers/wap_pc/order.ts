import Router from 'koa-router'

import auth from '../../middlewares/auth'

import OrderController from '../../controllers/wap_pc/OrderController'

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
router.get('/list', auth(), order_list)
.get('/detail/:id', auth(), order_detail)
/**
 * @openapi
 * /wap_pc/order/add:
 *  post:
 *    description: add new order
 *    responses:
 *      200:
 *        description: return add result
 */
.post('/add', auth(), order_add)
.post('/update', auth(), order_update)
.post('/delete', auth(), order_delete)

export default router