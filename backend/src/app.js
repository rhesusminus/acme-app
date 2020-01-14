const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const redis = require('redis')
const redisClient = redis.createClient()
const redisStore = require('connect-redis')(session)
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const userRouter = require('./routes/user')

const app = express()
app.disable('x-powered-by')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(
  session({
    name: SESS_NAME,
    secret: SESS_SECRET,
    saveUninitialized: false,
    resave: false,
    store: new redisStore({ host: 'localhost', port: 6379, client: redisClient, ttl: 86400 }),
    cookie: {
      sameSite: true,
      secure: NODE_ENV === 'production',
      maxAge: parseInt(SESS_LIFETIME)
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
