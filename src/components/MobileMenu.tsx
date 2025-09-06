'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import MobileSidebar from './SideMenu'




const MobileMenu = () => {
  const [isSlideopen, setisSlideopen] = useState(false)
  return (
    <div>
    <div className='md:hidden cursor-pointer' onClick={()=>setisSlideopen(!isSlideopen)}>
      <AlignLeft/>
    </div>
     <div>
        <MobileSidebar isopen={isSlideopen} onclose = {(()=>setisSlideopen(false))}/>
       {/* <SideMenu isopen={isSlideopen}  onclose={()=>setisSlideopen(false)}  /> */}
     </div>
     
    </div>
  )
}

export default MobileMenu
