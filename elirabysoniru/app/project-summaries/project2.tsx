import type { NextPage } from 'next';
import Image from "next/image";

const Project2: NextPage = () => {

  return (
    <div className='flex flex-row gap-20 w-full px-15 py-10 bg-coffee'>
        <div className='w-1/2 flex flex-col justify-between'>
        <div>
            <h1 className='font-3 text-[24px] text-white'>Victoria Island, Lagos</h1>
            <p className='font-3 text-[16px] text-white'>Lorem ipsum</p>
        </div>
            <div className='font-3 text-[16px] text-white'>A walk-in-closet renovation</div>
        </div>
        <div className='w-1/2 flex flex-row justify-center'>
            <Image className="w-fit" width={400} height={225} alt="" src="/herobg.jpg" />
        </div>
    </div>
  );
};

export default Project2;