import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';

const Navbar: NextPage = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full sticky relative bg-background overflow-hidden flex flex-col items-center justify-start lg:pt-5 pb-5 box-border gap-[30px] text-center text-2xl text-maroon">
      
      {/* Logo and Menu Toggle */}
      <div className="self-stretch flex flex-row items-center justify-between gap-0 font-3">
        <Image className="w-[39px] relative max-h-full object-cover" width={39} height={54} sizes="100vw" alt="" src="/logo.png" />
        
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
  <div className="w-full grid grid-cols-1 grid-rows-7 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 gap-x-8 gap-y-4 font-2 text-left">
    <div>Home</div>
    <div>About Us</div>
    <div>Portfolio</div>
    <div>The Process</div>
    <div>Services</div>
    <div>Testimonials</div>
    <div>Contact Us</div>
    <div></div>
  </div>
)}
    </div>
  );
};

export default Navbar;