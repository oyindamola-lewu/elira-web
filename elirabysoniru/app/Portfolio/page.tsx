"use client";
import NavbarDark from "../components/navbar-dark";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="">
      <main className="text-2xl">
        <NavbarDark />
        <section className="w-full h-full md:h-[832px] flex flex-col md:flex-row justify-center gap-20 py-20 md:py-0 md:justify-between items-center px-5 md:px-10 lg:px-20 bg-coffee text-white">
          <div className="w-full flex flex-col justify-center gap-5 md:gap-10 overflow-scroll">
            <div className="flex flex-col justify-center gap-2">
              <div className="font-3 text-base md:text-xl lg:text-2xl">Project Information</div>
              <div className="font-2 text-3xl md:text-4xl lg:text-5xl">The Urban</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-10">
              <div className="font-3 text-xl md:text-xl lg:text-2xl text-brass">
                <ol>
                  <li>Project Type</li>
                  <li>Client</li>
                  <li>Year</li>
                  <li>Size</li>
                  <li>Location</li>
                  <li>Status</li>
                </ol>
              </div>
              <div className="font-3 text-xl">
                <ol className="flex flex-row justify-start gap-2">
                  <p className="text-brass">✦</p>
                  <p>Residential</p>
                </ol>
                <ol className="flex flex-row justify-start gap-2">
                  <p className="text-brass">✦</p>
                  <p>Obi & Co Homes</p>
                </ol>
                <ol className="flex flex-row justify-start gap-2">
                  <p className="text-brass">✦</p>
                  <p>2025</p>
                </ol>
                <ol className="flex flex-row justify-start gap-2">
                  <p className="text-brass">✦</p>
                  <p>600 sq. ft.</p>
                </ol>
                <ol className="flex flex-row justify-start gap-2">
                  <p className="text-brass">✦</p>
                  <p>Lekki Phase I, Lagos</p>
                </ol>
                <ol className="flex flex-row justify-start gap-2">
                  <p className="text-brass">✦</p>
                  <p>Completed</p>
                </ol>
              </div>
            </div>
          </div>
          <div className="h-full md:h-[632px]  w-full flex flex-col gap-15 md:gap-15 justify-start center overflow-auto text-xl">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-2">Project Overview</h1>
              <hr className="text-brass w-[520px]"></hr>
              <Image
                className=""
                width={520}
                height={315}
                alt=""
                src="/herobg.jpg"
              />
              <p className="max-w-[520px]">
                Description of home design, story behind it, etc. 
                Description of home design, story behind it, etc. 
                Description of home design, story behind it, etc.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-2">Design Approach</h1>
              <hr className="text-brass w-[520px]"></hr>
              <p className="max-w-[520px]">
                Talk about what steps you took to achieve the design, your
                thought process etc
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-2">Project Gallery</h1>
              <hr className="text-brass w-[520px]"></hr>
              <Image
                className=""
                width={520}
                height={315}
                alt=""
                src="/herobg.jpg"
              />
              <Image
                className=""
                width={520}
                height={315}
                alt=""
                src="/herobg.jpg"
              />
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
