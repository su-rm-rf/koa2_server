import { AppDataSource } from "../../data-source"

import utils from '../../utils'

import { Category } from '../../models/Category'
import { Goods } from '../../models/Goods'

import GoodsDTO from '../../dto/Goods'

const categoryRepo = AppDataSource.getRepository(Category)
const goodsRepo = AppDataSource.getRepository(Goods)

export default class CategoryController {
  async list (ctx) {
    const list = await categoryRepo.find({ relations: ['goods_list'] })
    ctx.body = utils.respond({ data: list })
  }
  
  async detail (ctx) {
    const { id } = ctx.params
    const detail:any = await goodsRepo.findOneBy({ id })
    const category:any = await categoryRepo.findOneBy({ id: detail.category_id })

    let GoodsDto:GoodsDTO = {
      ...detail,
      category_name: category.name
    }
    ctx.body = utils.respond({ data: GoodsDto })
  }

  async add (ctx) {
    
  }

  async update (ctx) {
    
  }

  async delete (ctx) {
    
  }
}