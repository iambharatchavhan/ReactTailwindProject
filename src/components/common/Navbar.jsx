import React, { useState } from 'react'
import { NavbarLinks } from '../../utils/navdata'
import Logo from "../../assets/Medium.png"
import { GiHamburgerMenu } from "react-icons/gi";
import Button from '../core/Button';
import LogoIcon from '../LogoIcon';


const Navbar = () => {  
   const [isOpen, setIsOpen] = useState(false)


  return (
    <header className='w-11/12 flex items-center justify-between relative py-4'>
        <div className='w-[150px] '><LogoIcon/></div>
        <div className='items-center justify-end w-1/2 hidden lg:visible lg:flex '>
            <ul className='flex gap-4 text-white text-lg'>
            {NavbarLinks.map((item,i)=>(
            <li key={i} className='cursor-pointer hover:underline'>{item.title}</li>
          ))}
            </ul>



        {/* <button className='bg-black text-[#f6f6f6] border-none px-3 py-1 rounded-full text-lg mx-4 outline-none'>Get unlimited access</button> */}
         <Button textColor="text-[#f6f6f6] " background="bg-black" content="Get unlimited access"/> { /* made the button reusable */}
        </div>

        <div className={isOpen ? `items-center justify-end flex flex-col absolute bg-[#4578FF] w-screen top-20 right-[-1rem] py-4 md:right-[-2.1rem] lg:hidden`: 'hidden'}>
            <ul className='flex flex-col justify-center items-center gap-6 text-white text-lg'>
            {NavbarLinks.map((item,i)=>(
            <li key={i} className='cursor-pointer hover:border-b-[1px]'>{item.title}</li>
          ))}
            </ul>

   

            <Button textColor="text-[#f6f6f6] " background="bg-black" content="Get unlimited access"/>
        </div>
        <div className='lg:hidden text-2xl text-white cursor-pointer' onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu/></div>
    </header>
  )
}

export default Navbar