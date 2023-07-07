const env:any = process.env.BASE_ENV
require('dotenv').config({
  path: `.env.${ env }`
})

import Koa from 'koa'
import Body from 'koa-body'
import Cors from 'koa2-cors'
import { koaSwagger } from 'koa2-swagger-ui'

import { redisClient } from './_redis'
import { AppDataSource } from './data-source'
import routers from './routers'
import { whiteList } from './configs/settings'

const server = new Koa()
const PORT = Number(process.env.PORT)

server.use(koaSwagger({
  routePrefix: '/swagger',
  swaggerOptions: {
    url: '/swagger.json'
  }
}))
server.use(Cors({
  origin: ctx => {
    const refer = ctx.header.referer
    if (!refer) {
      return ''
    }
    const origin = refer.slice(0, refer.length -1)
    if (whiteList[env].includes(origin)) {
      return origin
    }
    return `http://192.168.1.4:${PORT}`
  },
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type'],
}))
server.use(Body())
server.use(routers.routes()).use(routers.allowedMethods())

// await redisClient.connect()
// await AppDataSource.initialize().catch(err => console.log('AppDataSource.initialize Error', err))
redisClient.connect()
AppDataSource.initialize().then(() => {
  
}).catch(err => console.log('AppDataSource.initialize Error', err))

server.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})