import React from 'react'

const Header = ({children}: {children: React.ReactNode}) => {
  return (
    <div className=' bg-gray-100 dark:bg-gray-900 p-8'><div className='container mx-auto'>{children}</div></div>
  )
}

export default Header