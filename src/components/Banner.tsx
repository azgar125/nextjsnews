import React from 'react'
import Image from 'next/image';
import BannerImage from "@/assets/bannar.jpg";
import { Button } from '@/components/ui/button';
import { roboto } from '@/app/layout';
 

const Banner = () => {
  return (
    <div className=' bg-slate-100 rounded-xl p-4 my-5 dark:bg-gray-800 dark:text-white'>
      <div className=' grid grid-cols-1 md:grid-cols-2 '>
         <div className=' flex items-center justify-center'>
          <Image src={BannerImage} alt='Banner Image' width={500} height={500} className=' rounded-xl'/>
         </div>
         <div className=' px-3 space-y-3 mt-3'>
           <h4 className='font-semibold'>Technology</h4>
           <h2 className={`font-bold text-2xl ${roboto.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ea!</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequuntur rerum consequatur consectetur odit illum unde eius repellendus magnam, maxime dolores quaerat nam ab ipsa, fuga similique dolore voluptate obcaecati!</p>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam sint officiis eaque aliquam aliquid quae cumque quia.</p>
           <Button variant={`default`} className=' w-full md:w-min cursor-pointer hover:bg-green-300 hover:text-black hoverEffect'>Read more</Button>
         </div>
      </div>
    </div>
  )
}

export default Banner
