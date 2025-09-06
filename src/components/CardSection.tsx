import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { newsItems } from './../app/type/newslocal';





const CardSection = ({items}:newsItems) => {
  return (
    <div className=' border rounded-md shadow-md w-full  p-2 my-5'>
      <Image src={items.imageUrl} width={400} height={400} alt='Card Image'  priority className=' hover:scale-105 hoverEffect m-auto' />
      <div className=' flex flex-col gap-3 mt-2'>
        <h2 className=' mt-2 text-xl font-bold'>{items.title.substring(0,60)}</h2>
        <p className='mb-4'>{items.description?.substring(0,100)}...</p>
      </div>
      <Link href={`/news/${items._id}`} className=' hover:text-red-400 hoverEffect'>
        Read More......
      </Link>
    </div>
  )
}

export default CardSection
