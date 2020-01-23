import React, { FC, useState } from 'react'
import { Overlay, NavLink } from './'
import { ReactComponent as Menu } from '../image/menu.svg'
import { ReactComponent as Close } from '../image/close.svg'
import avatar from '../image/rhesusminus.jpg'

export const Header: FC<HeaderProps> = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showAvatarMenu, setAvatarMenu] = useState<boolean>(false)

  return (
    <header className="bg-gray-800 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <h1 className="text-white text-xl font-bold">acme app</h1>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <Close className="h6 w-6 fill-current" /> : <Menu className="h6 w-6 fill-current" />}
          </button>
        </div>
      </div>
      <nav className={`px-2 pt-2 pb-4 sm:flex sm:p-0 ${showMenu ? 'block' : 'hidden'}`}>
        <NavLink to="testi">Dashboard</NavLink>
        <NavLink to="testi" className="mt-1 sm:mt-0 sm:ml-2">
          Messages
        </NavLink>
        <NavLink to="testi" className="mt-1 sm:mt-0 sm:ml-2">
          Something
        </NavLink>
        <div className="bg-gray-800 relative ml-6">
          <button
            className="relative z-10 block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none focus:border-pink-400 hover:border-pink-400"
            onClick={() => setAvatarMenu(!showAvatarMenu)}
          >
            <img className="h-full w-full object-cover" src={avatar} alt="Your avatar" />
          </button>
          {showAvatarMenu && <Overlay onClick={() => setAvatarMenu(false)} tabIndex={-1} />}
          <div
            className={`mt-2 py-2 w-48 bg-white rounded-lg shadow-xl absolute right-0 ${
              showAvatarMenu ? 'block' : 'hidden'
            }`}
          >
            <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">
              Account settings
            </a>
            <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">
              Log out
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

type HeaderProps = {
  setUser: React.Dispatch<any>
}
