require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import "reflect-metadata"

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: process.env.DB_NAME,
  synchronize: true,
  // logging: true,
  entities: [__dirname + '/models/*.ts'],
  subscribers: [],
  migrations: [],
})
