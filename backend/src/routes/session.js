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

router.get('', function(req, res) {
  if (req.session.user) {
    res.send(req.session.user)

    return
  }

  res.send('no session')
})

router.post('', async function(req, res, next) {
  try {
    const { username, password } = req.body
    await Joi.validate({ username, password }, logIn)

    if (user.password === password && user.username === username) {
      const userSession = sessionizeUser(user)
      req.session.user = userSession

      res.status(200).send(userSession)

      return
    }

    res.status(401).send('invalid username or password')
  } catch (err) {
    res.status(401).send(parseError(err))
  }
})

router.delete('', function(req, res) {
  try {
    const user = req.session.user

    if (user) {
      req.session.destroy(err => {
        if (err) {
          throw err
        }

        res.clearCookie(process.env.SESSION_NAME)
        res.send(user)
      })
    }
  } catch (err) {
    res.status(422).send(parseError(err))
  }
})

module.exports = router
