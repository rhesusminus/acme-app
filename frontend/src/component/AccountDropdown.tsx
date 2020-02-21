import React, { useState, ComponentProps, FC } from 'react'
import { Overlay } from './'
import avatar from '../image/rhesusminus.jpg'

export const AccountDropdown: FC<ComponentProps<'div'>> = props => {
  const [showAvatarMenu, setAvatarMenu] = useState<boolean>(false)

  return (
    <div className={`relative ml-6 ${props.className}`}>
      <button
        className="z-10 block h-10 w-10 rounded-full overflow-hidden border-2 focus:outline-none focus:border-red-700 hover:border-red-700"
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
        <a className="block px-4 py-2 text-gray-800 hover:bg-red-700 hover:text-white" href="#">
          Account settings
        </a>
        <a className="block px-4 py-2 text-gray-800 hover:bg-red-700 hover:text-white" href="#">
          Log out
        </a>
      </div>
    </div>
  )
}
