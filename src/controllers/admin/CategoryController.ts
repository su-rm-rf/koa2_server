import { AppDataSource } from "../../data-source"

import { Category } from "../../models/Category"
import { Goods } from "../../models/Goods"

export default class CategoryController {
  async list(ctx) {
    const repository = AppDataSource.getRepository(Category)
    const list = await repository.find({ relations: ['goods_list'] })
    ctx.cookies.set('track', list.length)
    ctx.body = list
  }
  
  async detail(ctx) {
    const { id } = ctx.params
    const repository = AppDataSource.getRepository(Goods)
  
    const detail = await repository.findOneBy({ id })
    ctx.body = detail
  }

  async add(ctx) {
    const token = ctx.header.authorization
  }

  async delete(ctx) {

  }
}