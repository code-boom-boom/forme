import React from 'react'
import avatar from '../../../assets/img/avatar.png'

const AccountMenu: React.FC = () => {
  return (
    <div className="rounded-full p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-200 duration-500">
      <img className="rounded-full w-8" src={avatar} alt="avatar"/>
      <span className="text-text-light px-2">John Doe</span>
    </div>
  )
}

export default AccountMenu