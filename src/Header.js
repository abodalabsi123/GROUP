import React from 'react'
import alhya3 from './image/alhya3.png';
function Header() {
  return (
    <nav className=  "  bg-black text-white p-3 flex justify-between" >
    <ul className="flex justify-start">
      <li className="mx-4"><a href="/" className="text-white hover:text-gray-400">الرئيسية</a></li>
      <li className="mx-4"><a href="/about" className="text-white hover:text-gray-400">من نحن</a></li>
      <li className="mx-4"><a href="/services" className="text-white hover:text-gray-400">الخدمات</a></li>
      <li className="mx-4"><a href="/contact" className="text-white hover:text-gray-400">تواصل معنا</a></li>
    </ul>
      <img src={alhya3} alt="" class=" h-6 ml-3  w-20 " />
   
     
  
  </nav>
  )
}

export default Header