import React from 'react'
import IconButton from '../Button/IconButton'
import { Menu } from 'react-feather'
import { Notification } from 'iconsax-react'
import AccountMenu from '../AccountMenu'

const AppHeader: React.FC = () => {
  return (
    <div className="p-6 flex items-center justify-between border-b border-gray-200 gap-8">
      <div className="flex items-center gap-4">
        <IconButton icon={<Menu size={24} color="#C3CAD9" />} />
        <span className="text-xl font-bold text-text-dark">FORME</span>
      </div>
      <div className="flex items-center gap-4">
        <IconButton icon={<Notification size={24} color="#C3CAD9" variant="Bold"/>} />
        <AccountMenu />
      </div>
    </div>
  )
}

export default AppHeader