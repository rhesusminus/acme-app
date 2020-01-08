import React, { FC } from 'react'
import { Router } from '@reach/router'
import { Dashboard, Login } from './'

export const App: FC = () => {
  return (
    <Router>
      <Login path="/" />
      <Dashboard path="/dashboard" />
    </Router>
  )
}
