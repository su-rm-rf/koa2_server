import moment from "moment"

import { AppDataSource } from "../../data-source"
import utils from '../../utils'
import auth from '../../utils/auth'

import { Goods } from '../../models/Goods'
import { Order } from '../../models/Order'
import { Order_Item } from '../../models/Order_Item'
import { errorType } from "../../constants"

const orderRepo = AppDataSource.getRepository(Order)
const orderItemRepo = AppDataSource.getRepository(Order_Item)
const goodsRepo = AppDataSource.getRepository(Goods)

export default class CategoryController {
  async list (ctx) {
    // const token: any = await auth.verify(ctx)

    // console.log('token', token)

    // if (!token) {
    //   ctx.body = utils.respond({ errCode: 10031, errMsg: errorType.Token_Expired_Error, data: [] })
    //   return;
    // }

    const orders = await orderRepo.findBy({ user_id: ctx.userInfo.id })
    let orderList:any = []
    const format = 'YYYY-MM-DD hh:mm:ss'
    // 遍历数据库中的订单列表
    await Promise.all(orders.map(async (order:Order) => {
      const ois:any = await orderItemRepo.findBy({ order_id: order.id })

      let goodsList:any = []
      // 遍历数据库中的每个订单的订单项
      await Promise.all(ois.map(async (oi:Order_Item) => {
        const goods:any = await goodsRepo.findOneBy({ id: oi.goods_id })
        // 组装订单中的商品信息
        goodsList.push({
          ...goods,
          num: oi.num,
          amount: goods.price * Number(oi.num),
          created_at: moment(goods.created_at).format(format),
          updated_at: moment(goods.updated_at).format(format),
        })
      }))

      // 计算订单总金额
      let totalAmount = 0
      goodsList.map(goods => {
        totalAmount += goods.amount
      })

      // const orderDto:OrderDTO = {
      const orderDto = {
        ...order,
        id: String(order.id).padStart(10, '0'),
        goods: goodsList,
        bill: '元',
        totalAmount,
        created_at: moment(order.created_at).format(format),
        updated_at: moment(order.updated_at).format(format),
      }
      orderList.push(orderDto)
    }))

    orderList.sort((m, n) => n.id - m.id)
    
    utils.respond(ctx, { data: orderList })
  }
  
  async detail (ctx) {
  }
  
  async add (ctx) {
    const { goods_id, num } = ctx.request.body
    const token: any = await auth.verify(ctx)
    if (token) {
      const oi1 = await orderRepo.save({ user_id: token.id })
      const oi2 = await orderItemRepo.save({ goods_id, num, order_id: oi1.id })
      utils.respond(ctx, { data: oi2 })
    } else {
      utils.respond(ctx, { errMsg: errorType.SIGNIN_IS_REQUIRED })
      ctx.throw(errorType.SIGNIN_IS_REQUIRED)
    }
  }

  async update (ctx) {
    
  }

  async delete (ctx) {
    
  }
}