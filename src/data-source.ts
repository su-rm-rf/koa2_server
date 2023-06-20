import "reflect-metadata"

import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "123456",
  database: "shopping",
  synchronize: true,
  // logging: true,
  entities: [__dirname + '/models/*.ts'],
  subscribers: [],
  migrations: [],
})
