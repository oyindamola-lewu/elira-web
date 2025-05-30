"use client";
import Navbar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <main>
        <Navbar />

        {/* HERO */}
        <section
          id="hero"
          className="w-full relative bg-background flex flex-col items-center justify-center md:pt-5 pb-10 md:px-20  box-border"
        >
          <div className="self-stretch md:rounded-[20px] h-full min-h-[700px] bg-[url('/herobg.jpg')] bg-cover bg-no-repeat bg-[top]">
            <div className="self-stretch rounded-[20px] h-full min-h-[700px] flex flex-col items-start justify-start bg-black/50">
              {/* Heading */}
              <div className="w-full h-1/2 text-start px-10 lg:px-20 pt-10">
                <h1 className="font-1 text-white text-[100px] md:text-[140px] lg:text-[180px]">
                  ELIRA BY SONIRU.
                </h1>
              </div>
              {/* Content Row */}
              <div className="w-full h-1/2 flex flex-col md:flex-row items-start align-center  px-10 lg:px-20 pt-10 gap-20">
                {/* Text Block */}
                <div className="w-full md:w-1/2 h-full text-white font-3 flex flex-col items-start justify-center gap-5">
                  <p className="text-2xl md:text-4xl w-4/5">
                    Decluttering & interior styling for busy professionals.
                  </p>
                  <div className="rounded-md bg-gray-100/10 border-linen border-solid border-[0.5px] py-3 px-4">
                    <div className="text-sm md:text-base">
                      Book Your Consultation →
                    </div>
                  </div>
                </div>
                {/* Image Block */}
                <div className="hidden w-full md:w-1/2 h-full md:flex items-center justify-center p-6">
                  <Image
                    className="w-[180px] sm:w-[220px] md:w-[260px] object-cover"
                    width={260}
                    height={260}
                    alt="Curved Text"
                    src="/curvetext.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US*/}
        <section
          id="about-us"
          className="w-full relative bg-background overflow-y-auto flex flex-row gap-5 items-start justify-center py-[60px] px-10 box-border text-left text-2xl text-black font-3 md:pt-5 pb-10 md:px-20"
        >
          <div className="">
            <div className="">
              <h1 className=""> </h1>
              <Image className="" width={128} height={128} alt="" src="/about-arrow.png" />
            </div>
            <div className="">
              <h1 className=""></h1>
              <Image className="" width={932} height={154} alt="" src="/aboutimg4.png" />
            </div>
          </div>

          <div className="">
            <div className="">
              <p className=""></p>
              <p className=""></p>
            </div>
            <Image className="" width={594} height={245} alt="" src="/aboutimg1.png" />
          </div>

          <div className="">
            <Image className="" width={523} height={174} alt="" src="/aboutimg2.png" />
            <div className="">
              <p className=""></p>
              <p className=""></p>
            </div>
          </div>

          <div className="">
            <div className="">
              <h1 className=""></h1>
              <p className=""></p>
            </div>
            <Image className="" width={549} height={154} alt="" src="/aboutimg3.png" />
          </div>
        </section>

        {/* OUR SERVICES*/}
        <section>
          <div className="">
            <h1 className=""></h1>
            <h1 className=""></h1>
          </div>
          <div className="">
            <div className="">
              <p className=""></p>
              <Image className="" width={621} height={387} alt="" src="/servicesimg.png" />
            </div>
            <div className="">
              <div className="">
                <h2 className=""></h2>
                <p className=""></p>
              </div>
              <div className="">
                <h2 className=""></h2>
                <p className=""></p>
              </div>
              <div className="">
                <h2 className=""></h2>
                <p className=""></p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROJECTS*/}
        <section>
          <div className="">
            <h1 className=""></h1>
            <h1 className=""></h1>
          </div>
          {/*Project Summary component*/}
        </section>

        {/* TESTIMONIALS */}
        <section>
          <div className="">
            {/* Carousel component */}
            <div className=""></div>
            <div className=""></div>
          </div>
          <div className="">
            <div className="">
              <h1 className=""></h1>
              <p className=""></p>
            </div>
            <div className="">{/* Testimonials component */}</div>
          </div>
        </section>

        {/* CONTACT US*/}
        <section>
          <div className="">
            <div className="">
              <div className="">
                <h1 className=""></h1>
                <p className=""></p>
              </div>
              <div className="">
                <p className=""></p>
                <p className=""></p>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
              </div>
              <div className="">
                <div className=""></div>
              </div>
              <div className="">
                <div className=""></div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </footer>
      </main>
    </div>
  );
}
