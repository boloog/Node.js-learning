const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const authenticate = require('../middlewares/authenticate')

router.route('/users')
  // .get(UserController.index)
  .post(UserController.store)


router.post('/auth', UserController.auth)
  // .get(UserController.show)
  // .patch(UserController.update)
  // .delete(UserController.destroy)

  router.get('/me', authenticate, UserController.me)

module.exports = router