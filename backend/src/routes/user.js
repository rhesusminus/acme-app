const express = require('express')
const Joi = require('joi')
const { signUp, logIn } = require('../validation/user')
const { sessionizeUser, parseError } = require('../util')

const router = express.Router()

const user = {
  id: 1,
  username: 'kissa',
  password: 'kissa'
}

router.get('/test', function(req, res) {
  res.send(req.session)
})

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body

    if (user.password === password && user.username === username) {
      const userSession = sessionizeUser(user)
      req.session.user = userSession

      res.status(200).send(userSession)

      return
    }

    res.status(401).send('Invalid username or password')
  } catch (err) {
    return next(err)
  }
})

module.exports = router
