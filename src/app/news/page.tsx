
import NewsList from '@/components/NewsList/NewsList'
import React from 'react'


const news = () => {
  
  
  return (
    <div className='py-8 container'>
     <h1 className='py-2 font-semibold text-2xl'>Latest News</h1>
     <NewsList/>
    </div>
  )
}

export default news
