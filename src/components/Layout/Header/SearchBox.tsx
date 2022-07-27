import React from 'react'
import { ChevronRight, Search } from 'react-feather'

const SearchBox: React.FC = () => {
  return (
    <div className="rounded-full bg-white p-4 flex gap-2 items-center">
      <Search size={24} color="#C3CAD9" />
      <input className="bg-transparent focus:outline-none" type="text" placeholder="Search..."/>
      <ChevronRight className="cursor-pointer" size={24} color="#C3CAD9" />
    </div>
  )
}

export default SearchBox