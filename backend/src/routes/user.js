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

router.post('', async function(req, res) {
  try {
    const { username, email, password } = req.body
    await Joi.validate({ username, email, password }, signUp)
  } catch (err) {}
})

router.post('/login', async function(req, res) {
  console.log(req.body)
  try {
    const { username, password } = req.body

    if (user && user.password === password) {
      const userSession = sessionizeUser(user)
      req.session.user = userSession

      res.send(userSession)
    }

    throw new Error('Invalid login credentials')
  } catch (err) {
    res.status(401).send(parseError(err))
  }
})

module.exports = router
