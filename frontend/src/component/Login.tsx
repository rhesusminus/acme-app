import React, { useState, FC, FormEvent } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Button, Input } from './'

export const Login: FC<RouteComponentProps> = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <div className="bg-red-800 h-screen w-screen p-2 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold pb-4">acme app</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded p-8">
        <Input id="username" label="Username" type="text" placeholder="Username" onChange={setUsername} />
        <Input id="password" label="Password" type="password" placeholder="Password" onChange={setPassword} />
        <Button>Log in</Button>
      </form>
    </div>
  )
}
