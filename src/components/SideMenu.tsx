"use client";
import { MenuItems } from "@/lib/MenuItems";
import Link from "next/link";
import { FC, useState } from "react";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface SlidebarProp {
  isopen: boolean;
  onclose: () => void;
}

const MobileSidebar: FC<SlidebarProp> = ({ isopen, onclose }) => {
  const [openOffers, setOpenOffers] = useState(false);

  return (
    <div>
      {/* Overlay */}
      {isopen && (
        <div
          onClick={onclose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-4 z-50 transform transition-transform duration-300 dark:bg-gray-900 dark:text-white ${
          isopen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button onClick={onclose} className="text-2xl mb-4">
          <FaTimes />
        </button>

        {/* Search Box */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Menu Items */}
        <ul className="space-y-2">
          {MenuItems.map((item, idx) => (
            <li key={idx} className=" border-b ">
              {item.subMenu ? (
                <>
                  <button
                    onClick={() => setOpenOffers(!openOffers)}
                    className=" flex justify-between items-center w-full hover:cursor-pointer hover:bg-gray-400/25 p-2"
                  >
                    {item.title} {openOffers ? <FaChevronUp /> : <FaChevronDown />}
                  </button>

                  {openOffers && (
                    <ul className="ml-4 mt-2 space-y-2 text-gray-600">
                      {item.subMenu.map((sub, subIdx) => (
                       
                         <li  key={subIdx} className="p-1 hover:cursor-pointer hover:bg-gray-400/25 transition-all duration-300 ease-in-out"><Link href={sub.href}>{sub.title}</Link></li>
                        
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link onClick={onclose} className="hover:cursor-pointer hover:bg-gray-400/25 block p-2"  href={item.href || "#"}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;




// import { MenuItems } from '@/lib/MenuItems';
// import { X } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { FC, useEffect } from 'react';

// //import SocialMedia from './SocialMedia';

// interface slidebarprobs{
//   isopen:boolean;
//   onclose:()=> void;
// }

// const SideMenu: FC<slidebarprobs> = ({ isopen, onclose }) => {
//   const pathname = usePathname();
//     useEffect(() => {
//     if (isopen) {
//       document.body.classList.add("overflow-hidden");
//     } else {
//       document.body.classList.remove("overflow-hidden");
//     }

//     // cleanup
//     return () => {
//       document.body.classList.remove("overflow-hidden");
//     };
//   }, [isopen]);
//   return (
//     <div
//       onClick={onclose} // এখানে পুরো কালো ব্যাকগ্রাউন্ডে ক্লিক করলে মেনু বন্ধ হবে
//       className={`fixed bg-black/50 w-full inset-y-0 left-0 h-screen z-40 shadow-xl ${
//         isopen ? "translate-x-0" : "-translate-x-full"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()} // এই লাইনটি খুব জরুরি
//         className=" w-72 bg-stone-100 border-r border-gray-100 text-black h-screen p-4 dark:bg-gray-900 dark:text-white dark:border-gray-700"
//       >
//         {/* এখানে তোমার মেনুর বাকি সব কোড থাকবে */}
//         <div className="flex justify-between ">
//           <Link href="#">
//             <h1 className="text-3xl  text-green-300 tracking-wider hover:text-green-600 transition-all duration-300 ease-in-out">
//               Shopecar<span className=" text-green-700">t</span>
//             </h1>
//           </Link>
//           <button
//             onClick={onclose}
//             className=" mr-2 cursor-pointer p-1.5 hover:bg-gray-400/40 rounded-full transition-all duration-300 ease-in-out"
//           >
//             <X />
//           </button>
//         </div>
//         <div className=" inline-flex flex-col pl-5 mt-5 font-semibold w-full">
//           {MenuItems?.map((item) => (
//            <div key={item.title} className=' border-b border-red-400 flex-col  items-center py-2'>
//             {item.subMenu?(
//               <div>
//                  <Link color=' text-green' key={item.title} href={item.href}>{item.title}</Link>
//                  <ul>
//                    {item.subMenu.map((subitem, index)=>(
//                     <li key={index} className=' py-3 border-b border-red-300  last:border-none ml-3'><Link href={subitem.href}>{subitem.title}</Link></li>
//                    ))}
//                  </ul>
//               </div>
//             ):(
//               <Link href={item.href}>{item.title}</Link>
//             )}
//            </div>
//           ))}
//         </div>
//         {/* <SocialMedia /> */}
//       </div>
//     </div>
//   );
// };




// export default SideMenu

    // <li className="p-2 border-b">All Products</li>
    //       <li className="p-2 border-b">Premium Quality</li>
    //       <li className="p-2 border-b">50% Discount</li>


      // <li className="p-1">Dhamaka Offer</li>
      //           <li className="p-1">Discount Deal</li>
      //           <li className="p-1">Flash Discounts</li>
      //           <li className="p-1">Flash Sale</li>
      //           <li className="p-1">Mega Offer</li>
      //           <li className="p-1">New Arrivals</li>