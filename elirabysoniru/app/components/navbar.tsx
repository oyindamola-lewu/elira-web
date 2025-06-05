import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';

const Navbar: NextPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-background flex flex-col items-center justify-start  lg:pt-2 pb-3 box-border gap-[30px] text-center text-2xl text-maroon px-10 md:px-20">
      
      {/* Logo and Menu Toggle */}
      <div className="self-stretch flex flex-row items-center justify-between gap-0 font-3">
        <Link href="/">
                      <Image className="w-[39px] relative max-h-full object-cover" width={39} height={54} sizes="100vw" alt="" src="/logo.png" /> </Link>
        
        <div className="w-[119px] rounded-xl flex flex-col items-center justify-center py-[5px] px-0 box-border">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-[119px] rounded-xl flex items-center justify-center py-[5px] px-0 text-2xl font-glacial-indifference"
          >
            <div>{menuOpen ? '↓ MENU' : '→ MENU'}</div>
          </button>
        </div>
      </div>

      {/* Conditional Menu Links */}
      {menuOpen && (
  <div className="w-full grid grid-cols-1 grid-rows-7 md:grid-cols-4 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-2 gap-x-8 gap-y-4 font-2 text-left">
    
     <Link href={"#about-us"}>
          About Us
        </Link>
 <Link href={"#our-services"}>
          Our Services
        </Link>     <Link href={"#our-services"}>
          Our Process
        </Link>
         <Link className='hidden' href={"#our-proccess"}>
          Our Projects
        </Link>
 <Link href={"#testimonials"}>
          Testimonials
        </Link>    
 <Link href={"#contact"}>
          Contact Us
        </Link>    <div></div>
  </div>
)}
    </div>
  );
};

export default Navbar;