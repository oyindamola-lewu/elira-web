"use client";
import NavbarDark from "../components/navbar-dark";
// import Image from "next/image";

export default function Bookings() {
  return (
    <div className="">
      <main className="text-2xl overflow-auto">
        <div className="sticky">
            <NavbarDark />
        </div>
        <section id="bookings" className="w-full h-[750px] bg-[url('/contactbg.jpg')] bg-cover px-5 md:px-10 lg:px-20 py-10 md:py-20">
          <div className="w-full h-full bg-coffee flex flex-col md:flex-row gap-5 md:gap-10 font-3 text-white">
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-10 px-5 md:px-10 lg:px-20 py-10 md:py-20">
              <div className="flex flex-col justify-start gap-5 ">
                <h1 className="font-2 text-3xl md:text-4xl lg:text-[48px] w-2/3">Book a Consultation</h1>
                <p className="font-3 text-base md:text-lg lg:text-xl">Kindly select the time and date you’d like to book your consultation for, and the service you’re interested in.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-base md:text-lg lg:text-xl px-5 md:px-10 lg:px-20">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 items-start">
                <div className="">
                  <p>First Name</p>
                  <div className="w-full h-[24px] bg-white"></div>
                </div> 
                <div className="">
                  <p>Last Name</p>
                  <div className="w-full h-[24px] bg-white"></div>
                </div>
                <div className="">
                  <p>Phone Number</p>
                  <div className="w-full h-[24px] bg-white"></div>
                </div>
                <div className="">
                  <p>Email</p>
                  <div className="w-full h-[24px] bg-white"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <p>Service</p>
                  <div className="w-full h-[30px] bg-white"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="text-white text-sm md:text-base lg:text-lg py-[12px] bg-brass px-10 md:px-20 lg:px-40 flex justify-center rounded-2xl">Submit</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full md:px-40 py-5 bg-coffee flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center font-3 text-white text-xl">
        <div className="">All Rights Reserved.</div>
        <div className="">© Elira By Soniru</div>
        <div className="">Built by Exhibit O Design</div>
      </footer>
    </div>
  );
}
