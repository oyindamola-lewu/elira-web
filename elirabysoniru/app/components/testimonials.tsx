import type { NextPage } from 'next';

const Testimonials: NextPage = () => {

  return (
    <div className='w-[700px] h-[374px] bg-background rounded-3xl p-[30px] text-white flex flex-row gap-20'>
        <div className='w-[300px] h-[374px] bg-coffee rounded-2xl px-[28px] flex flex-col justify-evenly'>
        <div className='font-3 text-[24px]'>
        Working with Soniru and seeing her attention to detail really impressed me.
        </div>
        <div>
            <p className='font-3 text-[24px]'>Jane Doe</p>
            <p className='font-3 text-[16px]'>Architect</p>
        </div>
        </div>
        <div className='w-[300px] h-[374px] bg-coffee rounded-2xl px-[28px] flex flex-col justify-evenly'>
        <div className='font-3 text-[24px]'>
        Working with Soniru and seeing her attention to detail really impressed me.
        </div>
        <div>
            <p className='font-3 text-[24px]'>Jane Doe</p>
            <p className='font-3 text-[16px]'>Architect</p>
        </div>
        </div>
    </div>
  );
};

export default Testimonials;