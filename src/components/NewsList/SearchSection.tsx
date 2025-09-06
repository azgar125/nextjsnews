import React from 'react'
import { Input } from '../ui/input'
interface onsearchprop{
    onserch:(searchTerm:string) => void;
}

const SearchSection = ({onserch}:onsearchprop) => {
  return (
    <div className=' w-3/4'>
       <div>
      <h1 className='mb-2 font-semibold'>Search News </h1>
      <Input 
      onChange={(e)=> onserch(e.target.value)}
      placeholder='Search ........'
       className='py-2 border w-full'/>
    </div>
    </div>
  )
}

export default SearchSection
