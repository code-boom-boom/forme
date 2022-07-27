import React from 'react'
import classNames from 'classnames'

interface IconButtonProp {
  icon: React.ReactNode
  className?: string
}

const IconButton: React.FC<IconButtonProp> = ({ icon , className }) => {
  return (
    <div className={classNames("w-12 h-12 bg-white flex justify-center items-center cursor-pointer rounded-full shadow-2xl", className)}>
      { icon }
    </div>
  )
}

export default IconButton