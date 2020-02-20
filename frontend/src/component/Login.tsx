import React, { useState, FC, FormEvent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { login2 } from '../api'
import { Button, Input } from './'

export const Login: FC<LoginProps> = props => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    login2({ username, password })
      .then(res => {
        setLoading(false)
        props.setUser(res)
      })
  }

  props.setUser({ userId: 1, username: 'Rhesus Miinus' })

  return (
    <div className="bg-red-800 min-h-screen p-2 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold pb-4">acme app</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded p-8">
        {isLoading && 'Loading...'}
        {error && <pre>{JSON.stringify(error)}</pre>}
        <Input id="username" label="Username" type="text" placeholder="Username" onChange={setUsername} />
        <Input id="password" label="Password" type="password" placeholder="Password" onChange={setPassword} />
        <Button>Log in</Button>
      </form>
    </div>
  )
}

interface LoginProps extends RouteComponentProps {
  setUser: React.Dispatch<any>
}
