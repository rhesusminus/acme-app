import React, { useState } from 'react'
import { Button, Input } from './'

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    console.log(username, password)
  }

  return (
    <div className="bg-red-800 h-screen w-screen">
      <form onSubmit={handleSubmit} className="bg-white">
        <Input id="username" label="Username" type="text" placeholder="Username" onChange={setUsername} />
        <Input id="password" label="Password" type="password" placeholder="Password" onChange={setPassword} />
        <Button>Log in</Button>
      </form>
    </div>
  )
}
