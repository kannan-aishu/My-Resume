import React, { useState } from 'react';
import Logo from './Logo.png';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancelPresentation } from "react-icons/md";

export default function Navbar() {
    const [click,setclick] =useState()
    const clickset =()=>{
        setclick(!click)
    }
    const [send,setsend] = useState()
    const sendset=()=>{
      setsend(!send)
    }
  return (
    <div className={click ? `bg-[black]  p-[10px] flex flex-col justify-between items-start sticky z-[1000] top-0`:`bg-[black] p-[10px] flex justify-between items-center sticky top-0 z-[1000] border-b-[#ff4500] border-b-[2px]`}>
      <div className='flex items-center justify-between w-[100%] '>
        <Link to={"/"} className='flex items-center gap-[10px]'>
          <img src={Logo} alt="No image" className="h-[30px]" /> 
          <h3 className='text-[#ff4500] text-[20px]'>Adobe Portfolio</h3>
        </Link>
        <button onClick={clickset} className='flex laptop:hidden'>{click ? <MdOutlineCancelPresentation className='text-[#ff4500] text-[30px]'/>: <FiMenu className='text-[#ff4500] text-[30px]'/>  }</button>
      </div>
     
      <div className={click ? `flex flex-col mt-[30px] text-[#ff4500] gap-[30px]`:`hidden laptop:flex gap-[30px] text-[#ff4500]`}>
        <Link to={'projects'}>Project</Link>
        <Link to={'contact'}>Contact</Link>
        <Link to={'Resume'}>Resume</Link>
      </div>
      
     
    </div>
  );
}
