const Joi = require('joi')

const email = Joi.string()
  .email()
  .required()

const username = Joi.string()
  .alphanum()
  .min(3)
  .max(30)
  .required()

const password = Joi.string()
  .alphanum()
  .min(3)
  .max(16)
  .required()

const signUp = Joi.object().keys({
  email,
  username,
  password
})

const logIn = Joi.object().keys({
  username,
  password
})

module.exports = { signUp, logIn }
