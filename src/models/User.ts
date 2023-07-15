import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
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

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date

  @DeleteDateColumn()
  deleted_at?: Date

  @Column({ default: () => 0 })
  delete_flag?: number
  
}