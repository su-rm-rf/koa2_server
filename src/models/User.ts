import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Order } from "./Order"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  username?: string

  @Column()
  password?: string

  @Column()
  level?: number

  @OneToMany(type => Order, order => order.user)
  order_list?: Order[]
}