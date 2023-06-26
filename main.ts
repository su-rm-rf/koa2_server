require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import Koa from 'koa'
import Body from 'koa-body'
import Cors from 'koa2-cors'

import { AppDataSource } from './data-source'
import routers from './routers'

const server = new Koa()

server.use(Cors({
  origin: ctx => {
    // return 'http://localhost:5350'
    return 'http://192.168.1.4:5350'
  },
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type'],
}))
server.use(Body())
server.use(routers.routes()).use(routers.allowedMethods())

AppDataSource.initialize().then(() => {
  
}).catch(err => console.log('AppDataSource.initialize Error', err))

const PORT = Number(process.env.PORT)
server.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})