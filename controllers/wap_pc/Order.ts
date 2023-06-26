import { AppDataSource } from "../../data-source"

import utils from '../../utils'

import { Goods } from '../../models/Goods'
import { Order } from '../../models/Order'
import { Order_Item } from '../../models/Order_Item'

import OrderDTO from '../../dto/Order'

const orderRepo = AppDataSource.getRepository(Order)
const orderItemRepo = AppDataSource.getRepository(Order_Item)
const goodsRepo = AppDataSource.getRepository(Goods)

export default class CategoryController {
  async list (ctx) {
    const token = JSON.parse(ctx.cookies.get('token'))
    const orders = await orderRepo.findBy({ user_id: token.id })
    
    let orderList:any = []
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
        })
      }))

      // 计算订单总金额
      let totalAmount = 0
      goodsList.map(goods => {
        totalAmount += goods.amount
      })

      const orderDto:OrderDTO = {
        id: Number(order.id),
        goods: goodsList,
        bill: '元',
        totalAmount,
      }
      orderList.push(orderDto)
    }))
    
    ctx.body = utils.respond({ data: orderList })
  }
  
  async detail (ctx) {
  }
  
  async add (ctx) {
    const { goods_id, num } = ctx.request.body
    let token = ctx.cookies.get('token')
    if (token) {
      token = JSON.parse(token)
      const oi1 = await orderRepo.save({ user_id: token.id })
      const oi2 = await orderItemRepo.save({ goods_id, num, order_id: oi1.id })
      ctx.body = utils.respond({ data: oi2 })
    } else {
      ctx.body = utils.respond({ errMsg: 'need signin' })
    }
  }

  async update (ctx) {
    
  }

  async delete (ctx) {
    
  }
}