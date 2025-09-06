import React, { useEffect } from 'react'
import Banner  from '@/components/Banner';
import CardSection from '@/components/CardSection';
import { newsLocal } from './type/newslocal';
import Subscription from '@/components/Subscription';




const Homepage =  async() => {
   
   const dataNews = await fetch('https://raw.githubusercontent.com/azgarbd125/news-api-next-js/refs/heads/main/data/db.json',{ cache:"no-store"});
   const news= await dataNews.json();
  return (
    <div className='container px-2 py-5 '>
    
      <Banner/>
      {/* Latest news Section */}
       <div className='my-6'>
         <h2 className='my-2 text-xl font-bold'>Latest News Section</h2>
         <div className='grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3'>
        {news.map((items:newsLocal)=>(
          <CardSection key={items._id} items={items} />
        ))}
        
      </div>
       </div>
       <Subscription/>
    </div>
  )
}

export default Homepage
