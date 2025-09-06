import { House, Mail, Phone } from 'lucide-react'
import React from 'react'

const ContactInfo = () => {
  return (
    <div>
      <h1 className='text-xl font-bold mt-3 md:mt-0'>Contact Us</h1>
       <ul className='mt-4'>
        <li className='flex space-x-2 py-1 items-center'><House size={16}/><p>Ta:217/4 South Badda</p></li>
        <li className='flex space-x-2 py-1 items-center'><Mail size={16}/><p>azgarbd@gmail.com</p></li>
        <li className='flex space-x-2 py-1 items-center'><Phone size={16}/><p>01818147263</p></li>
       </ul>
    </div>
  )
}

export default ContactInfo
