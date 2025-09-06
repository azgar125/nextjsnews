import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterMenu = () => {
  return (
    <div className=' flex flex-col '>
        <h2 className=' text-xl font-bold'>Usefull Link</h2>
      <ul>
        <li><Link href={"/"} className=' hover:text-green-400' >Home</Link></li>
        <li><Link href={"/"} className=' hover:text-green-400'>News</Link></li>
        <li className=' relative group hover:cursor-pointer flex   items-center'> <span className="group-hover:text-green-400">Service</span>
          <ChevronDown
            size={16}
            className="mt-1 transition-transform duration-300 group-hover:-rotate-90 group-hover:text-green-400"
          />
            <ul className=' ml-15  w-40 px-2 absolute hidden group-hover:block hoverEffect'>
                <li><Link href={"/"} className=' hover:text-green-400'>Web Developer</Link></li>
                <li><Link href={"/"} className=' hover:text-green-400'>Web App</Link></li>
                <li><Link href={"/"}className='hover:text-green-400'>Web SEO</Link></li>
            </ul>
        </li>
        <li><Link href={"/"} className=' hover:text-green-400'>About</Link></li>
        <li><Link href={"/"} className=' hover:text-green-400'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default FooterMenu
