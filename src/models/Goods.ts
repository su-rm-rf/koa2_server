import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

import { Category } from './Category'
import { Order_Item } from "./Order_Item"

@Entity()
export class Goods {
  
  // @Column()
  // @PrimaryColumn()
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ nullable: true })
  name?: string

  @Column()
  price?: number

  @Column()
  bill?: string

  @Column()
  unit?: string

  @Column()
  category_id?: number

  // @Column({
  //   name: "category_id"
  // })
  // @Column()
  // @OneToOne(type => Category, category => category.id)
  // @OneToOne(type => Category)
  // @JoinColumn()
  @ManyToOne(type => Category, category => category.goods_list)
  // category_id?: number
  @JoinColumn({ name: 'category_id' })
  category?: Category

  @ManyToMany(type => Order_Item, oi => oi.goods)
  order_item?: Order_Item

}