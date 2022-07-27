import React from 'react'

const menuList = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    label: 'About Us',
    link: '/about-us',
  },
  {
    label: 'News',
    link: '/news',
  },
  {
    label: 'User Policy',
    link: '/user-policy',
  },
  {
    label: 'Contacts',
    link: '/contacts',
  },
]

const HeaderMenu: React.FC = () => {
  return (
    <div className="flex gap-8 items-center">
      {menuList.map((menu, index) =>
        <a className="text-text-light font-semibold" href={menu.link} key={`menu-item-${index}`}>{menu.label}</a>)}
    </div>
  )
}

export default HeaderMenu