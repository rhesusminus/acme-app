import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { User } from '../api'
import { Header } from './'

export const Dashboard: FC<DashboardProps> = props => (
  <div>
    <Header setUser={props.setUser} />
  </div>
)

interface DashboardProps extends RouteComponentProps {
  setUser: React.Dispatch<any>
  user: User
}
