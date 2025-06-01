import type { NextPage } from 'next';
import Image from "next/image";

const Project1: NextPage = () => {

  return (
    <div className='flex flex-col md:flex-row text-coffee gap-5 md:gap-20 w-full px-5 md:px-15 py-10'>
        <div className='w-full flex flex-col justify-between'>
        <div>
            <h1 className='font-3 text-[24px] '>Lekki Phase I, Lagos</h1>
            <p className='font-3 text-[16px] '>Lorem ipsum</p>
        </div>
            <div className='font-3 text-[16px]'>A two-storey home organisation system</div>
        </div>
        <div className='w-full flex flex-row justify-center'>
            <Image className="w-fit" width={400} height={225} alt="" src="/herobg.jpg" />
        </div>
    </div>
  );
};

export default Project1;