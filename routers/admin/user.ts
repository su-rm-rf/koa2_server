import Router from 'koa-router'

import UserController from '../../controllers/admin/User'

const router = new Router()

const {
  signin, signout
} = new UserController()

router.post('/signin', signin)
.post('/signout', signout)

export default router