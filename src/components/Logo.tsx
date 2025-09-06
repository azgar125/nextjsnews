import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
     <Link href={"/"}> <h1 className='text-2xl font-semibold hover:text-green-300 hoverEffect py-2'>Daly News</h1></Link>
    </div>
  )
}

export default Logo
