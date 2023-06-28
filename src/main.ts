require('dotenv').config({
  path: `.env.${ process.env.BASE_ENV }`
})

import Koa from 'koa'
import Body from 'koa-body'
import Cors from 'koa2-cors'

import { AppDataSource } from './data-source'
import routers from './routers'

const server = new Koa()

const whiteList = ['http://192.168.1.4:5350', 'http://192.168.1.4:4240']
server.use(Cors({
  origin: ctx => {
    const refer = ctx.header.referer
    const origin = refer.slice(0, refer.length -1)
    if (whiteList.includes(origin)) {7
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

AppDataSource.initialize().then(() => {
  
}).catch(err => console.log('AppDataSource.initialize Error', err))

const PORT = Number(process.env.PORT)
server.listen(PORT, () => {
  console.log(`🚀 server started at http://localhost:${PORT}`)
})