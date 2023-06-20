import { Goods } from '../models/Goods'
import { Order } from '../models/Order'
import { Order_Item } from '../models/Order_Item'

import { AppDataSource } from "../data-source"

export default class CategoryController {
  async list (ctx) {
  }
  
  async detail (ctx) {
  }
  
  async add (ctx) {
    const { goods_id, amount } = ctx.request.body
    const repository = AppDataSource.getRepository(Order_Item)
    const oi = await repository.save({ goods_id, amount })
    console.log(oi)
    // const list = await repository.find({ relations: ['goods_list'] })
    // console.log(list)
    // ctx.body = list
    ctx.body = oi
  }

  async update (ctx) {
    
  }

  async delete (ctx) {
    
  }
}