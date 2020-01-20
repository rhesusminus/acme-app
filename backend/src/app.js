require('dotenv').config()
const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const redis = require('redis')
const redisStore = require('connect-redis')(session)
const logger = require('morgan')
const uuid = require('uuid/v4')
const cors = require('cors')

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const userRouter = require('./routes/user')

const app = express()
app.disable('x-powered-by')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(
  session({
    genid: req => uuid(),
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new redisStore({
      host: 'localhost',
      port: process.env.REDIS_PORT,
      client: redis.createClient(),
      ttl: 86400
    }),
    cookie: {
      sameSite: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: parseInt(process.env.SESSION_LIFETIME, 10)
    }
  })
)

app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/user', userRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send('error')
})

module.exports = app
