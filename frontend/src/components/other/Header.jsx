import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span>Ranjit ❤️</span> </h1>
        <button className='px-7 py-2 bg-red-500 rounded-2xl font-semibold text-xl '>Logout</button>
    </div>
  )
}

export default Header