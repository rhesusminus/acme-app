import axios from 'axios'
import * as t from 'io-ts'
import { fold } from 'fp-ts/lib/Either'
import { resolve } from 'dns'
import { rejects } from 'assert'

const baseURL = process.env.REACT_APP_API_URI || 'http://localhost:3090'

const request = axios.create({
  baseURL,
  timeout: 3000
})

export type Credentials = {
  username: string
  password: string
}

const User = t.type({
  userId: t.number,
  username: t.string
})

type User = t.TypeOf<typeof User>

function login(credentials: Credentials) {
  return request.post('/user', credentials)
}

function login2(credentials: Credentials) {
  return new Promise(resolve => setTimeout(() => {
    resolve({ userId: 1, username: 'Rhesus Miinus' })
  }, 1000))
}

function logout() {
  return request
    .delete('/user')
    .then(response => User.decode(response.data))
    .then(data =>
      fold(
        () => null,
        d => d
      )(data)
    )
    .catch(err => err)
}

export { User, login, login2, logout }
