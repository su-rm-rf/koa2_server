import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Order_Item } from "./Order_Item"
import { User } from "./User"

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  user_id?: number

  @ManyToOne(type => User, user => user.order_list)
  @JoinColumn({ name: 'user_id' })
  user?: User

  @OneToMany(type => Order_Item, oi => oi.order_id)
  order_item_list?: Order_Item[]
}