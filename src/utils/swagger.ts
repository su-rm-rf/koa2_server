import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerOptions = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'koa2_server API',
      version: '1.0.0',
      description: 'koa_server API Document',
    },
  },
  apis: [path.join(__dirname, '../routers/**/*.ts')],
}

const openapiSpecification = swaggerJSDoc(swaggerOptions)

export default openapiSpecification