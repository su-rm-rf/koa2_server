import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

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

  @CreateDateColumn()
  created_at?: Date

  @UpdateDateColumn()
  updated_at?: Date

  @DeleteDateColumn()
  deleted_at?: Date

  @Column({ default: () => 0 })
  delete_flag?: number

}