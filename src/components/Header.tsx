import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import MenuRight from './MenuRight'
import MobileMenu from './MobileMenu';




const Header = () => {
  return (
    <div className=' w-full bg-slate-100 dark:bg-gray-900 dark:text-white'>
      <div className=' container flex justify-between items-center'>
        <div className=' flex items-center justify-center gap-x-6'>
          <MobileMenu  />
          <Logo/>
        </div>
        
        <Menu/>
        <MenuRight/>
        
      </div>
    </div>
  )
}

export default Header
