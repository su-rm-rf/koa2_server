import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Goods } from "./Goods"
import { Order } from "./Order"

@Entity()
export class Order_Item {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  goods_id?: number

  @Column()
  amount?: number

  @Column()
  order_id?: number

  @ManyToOne(type => Order, order => order.order_item_list)
  @JoinColumn({ name: 'order_id' })
  order?: Order

  @ManyToMany(type => Goods, goods => goods.order_item)
  @JoinTable()
  @JoinColumn({ name: 'goods_id' })
  goods?: Goods
}