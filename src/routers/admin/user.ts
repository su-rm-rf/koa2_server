import Router from 'koa-router'

import UserController from '../../controllers/UserController'

const router = new Router()

const {
  signin, signout, info
} = new UserController()

router.post('/signin', signin)
.post('/signout', signout)
.get('/info/:token', info)

export default router