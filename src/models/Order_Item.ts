import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Goods } from "./Goods"
import { Order } from "./Order"

@Entity()
export class Order_Item {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  goods_id?: number

  @Column()
  num?: number

  @Column()
  order_id?: number

  @ManyToOne(type => Order, order => order.order_item_list)
  @JoinColumn({ name: 'order_id' })
  order?: Order

  @ManyToMany(type => Goods, goods => goods.order_item)
  @JoinTable()
  @JoinColumn({ name: 'goods_id' })
  goods?: Goods

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date

  @DeleteDateColumn()
  deleted_at?: Date

  @Column({ default: () => 0 })
  delete_flag?: number
  
}