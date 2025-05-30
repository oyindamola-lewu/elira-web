import type { NextPage } from 'next';
//import Image from "next/image";

const Carousel: NextPage = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='w-[628px] h-[551px] bg-coffee rounded-3xl'>
        </div>
        <div className="w-full flex flex-row gap-5">
              <div className="w-[40px] h-[40px] bg-coffee text-[30px] flex items-center justify-center text-white rounded-[20px]">←</div>
              <div className="w-[40px] h-[40px] bg-coffee text-[30px] flex items-center justify-center text-white rounded-[20px]">→</div>
        </div>
    </div>
  );
};

export default Carousel;