import React, { FC } from 'react'
import { Link } from '@reach/router'

export const NavLink: FC<NavLinkProps> = ({ to, children, className, ...rest }) => (
  <Link to={to} className={`block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 ${className}`} {...rest}>
    {children}
  </Link>
)

type NavLinkProps = {
  className?: string
  to: string
}
