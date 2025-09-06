import React from 'react'
import { Button } from './ui/button'

const Subscription = () => {
  return (
    <div className='container bg-slate-100 w-full px-3 py-10  mt-5 flex flex-col items-center gap-1  space-y-3 md:gap-2 md:space-y-5 dark:bg-gray-900 dark:text-white'>
      <h1 className=' text-3xl font-semibold'>Subscribe</h1>
      <hr className=' w-[200px] h-1 bg-slate-500' />
      <p className='text-md md:text-xl font-semibold '>Subscribe our newsletter to stay updated every moment</p>
      <div className=' flex flex-col md:flex-row w-[500px] max-w-sm gap-5 items-center '>
        <input type='E-mail' placeholder='Enter a valid email address' className=' p-1 w-full border border-slate-300 bg-gray-200' />
        <Button variant={'default'} className=' w-full md:w-auto hover:cursor-pointer'>Submit</Button>
      </div>
    </div>
  )
}

export default Subscription
