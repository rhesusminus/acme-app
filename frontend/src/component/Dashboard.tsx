import React, { FC } from 'react'
import { RouteComponentProps } from '@reach/router'
import { User } from '../api'

export const Dashboard: FC<DashboardProps> = () => <div>Dashboard</div>

interface DashboardProps extends RouteComponentProps {
  user: User
}
