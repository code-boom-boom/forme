import React from 'react'
import IconButton from '../Button/IconButton'
import { Menu } from 'react-feather'

const AppHeader: React.FC = () => {
  return (
    <div className="p-6 flex items-center justify-between">
      <div className="flex items-center">
        <IconButton className="mr-4" icon={<Menu size={18} color="#C3CAD9" />} />
        <span className="text-xl font-bold text-secondary">FORME</span>
      </div>
    </div>
  )
}

export default AppHeader