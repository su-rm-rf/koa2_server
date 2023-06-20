import { Category } from '../models/Category'
import { Goods } from '../models/Goods'

import { AppDataSource } from "../data-source"

export default class CategoryController {
  async list (ctx) {
    const repository = AppDataSource.getRepository(Category)
    const list = await repository.find({ relations: ['goods_list'] })
    console.log(list)
    ctx.body = list
  }
  
  async detail (ctx) {
    const { id } = ctx.params
    const repository = AppDataSource.getRepository(Goods)
    const detail = await repository.findOneBy({ id })
    console.log(detail)
    ctx.body = detail
  }

  async add (ctx) {
    
  }

  async update (ctx) {
    
  }

  async delete (ctx) {
    
  }
}