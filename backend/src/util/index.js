const sessionizeUser = user => {
  return { userId: user.id, username: user.username }
}

const parseError = err => (err.isJoi ? err.details[0] : JSON.stringify(err, Object.getOwnPropertyNames(err)))

module.exports = { sessionizeUser, parseError }
