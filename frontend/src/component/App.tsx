import React, { FC, useState } from 'react'
import { Router } from '@reach/router'
import { User } from '../api'
import { Dashboard, Login } from './'

export const App: FC = () => {
  const [user, setUser] = useState<User>()

  return <Router>{user ? <Dashboard path="/" user={user} /> : <Login path="/" setUser={setUser} />}</Router>
}
