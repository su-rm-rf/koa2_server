import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

import { Goods } from './Goods'

@Entity()
export class Category {
  
  // @Column()
  // @PrimaryColumn()
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  // @OneToOne(type => Goods)
  id?: number

  @Column()
  name?: string

  @OneToMany(type => Goods, goods => goods.category)
  goods_list?: Goods[]

}