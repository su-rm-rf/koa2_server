import Router from 'koa-router'

import UserController from '../../controllers/UserController'

const router = new Router()

const {
  signin, signout
} = new UserController()

router.post('/signin', signin)
.post('/signout', signout)

export default router