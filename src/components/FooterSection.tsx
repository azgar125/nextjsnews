import React from 'react'
import Logo from './Logo'
import SocialIcon from './SocialIcon'
import FooterMenu from './FooterMenu';
import ContactInfo from './ui/ContactInfo';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className=' h-[100px] w-full text-white'>
      <div className=' bg-black/90 mt-3'>
        <div className='container grid md:grid-cols-3 lg:grid-cols-4 gap-x-5 py-4'>
            {/* left Site */}
           <div className='md:col-span-2 lg:col-span-2'>
             <Logo/>
             <p className='pr-3'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, dolore!</p>
             <SocialIcon/>
           </div>
           {/* Middel section */}
            <div className=' hidden lg:inline-flex lg:col-span-1 '>
             <FooterMenu/>
            </div>
            {/* Right Side Section */}
            <div className='md:col-span-1 lg:col-span-1'>
                <ContactInfo/>
            </div>
        </div>
      </div>
      <div className='bg-black py-2 border-t-0 shadow-md'>
        <div className='container flex flex-col justify-center items-center md:flex-row md:justify-between'>
             <p className='py-0.5'>&copy; is news company</p>
             <p>This site was developed by  <Link href={"https://www.facebook.com/share/1CmGCPWstX/"} className=' hover:text-green-300 hoverEffect'>Azgar Khan</Link> </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
