import { AppDataSource } from "../../data-source"

import utils from '../../utils'
import { redisClient } from '../../utils/redis'

import { Category } from '../../models/Category'
import { Goods } from '../../models/Goods'

import GoodsDTO from '../../dto/Goods'

const categoryRepo = AppDataSource.getRepository(Category)
const goodsRepo = AppDataSource.getRepository(Goods)

export default class CategoryController {
  async list (ctx) {
    const categoryQuery = await categoryRepo.createQueryBuilder('category')
    let arr:any = await redisClient.get('category_list')
    if (!arr) {
      arr = await categoryQuery
        .leftJoinAndSelect('category.goods_list', 'goods')
        .where('category.id = goods.category_id')
        .take(10)
        .getManyAndCount()
      // const list = await categoryRepo.find({ relations: ['goods_list'] })
      await redisClient.set('category_list', JSON.stringify(arr))
      await redisClient.expire('category_list', 20)
    } else {
      arr = JSON.parse(arr)
    }
    ctx.body = utils.respond({ data: arr[0] })
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