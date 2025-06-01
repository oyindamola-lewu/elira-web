"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
// import Link from "next/link";
import Project1 from "./project-summaries/project1";
import Project2 from "./project-summaries/project2";
import Testimonials from "./components/testimonials";
import Carousel from "./components/carousel";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="">
        {/* HERO */}
        <section
          id="hero"
          className="w-full relative bg-background flex flex-col items-center justify-center md:pt-30 pb-10 px-20 box-border"
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
          className="w-full relative bg-background overflow-y-auto flex flex-col gap-15 items-start justify-center py-[60px]box-border text-left text-2xl text-black font-3 py-30 pb-10 px-20"
        >
          <div className="w-full">
            <div className="flex flex-row justify-between">
              <h1 className="font-1 text-brass text-[200px] leading-[180px] h-full">ABOUT</h1>
              <Image className="w-[128px] h-[128px]" width={128} height={128} alt="" src="/about-arrow.png" />
            </div>
            <div className="flex flex-row justify-between">
              <h1 className="font-1 text-brass text-[200px] leading-[180px] h-full">US</h1>
              <Image className="object-cover w-[932px] h-[154px] rounded-2xl" width={932} height={154} alt="" src="/herobg.jpg" />
            </div>
          </div>

          <div className="w-full flex flex-row justify-between gap-20">
            <div className="flex flex-col justify-start gap-30">
              <p className="">Marrying the beauty of interior design with the strategy of organization, Elira transforms everyday spaces into sanctuaries.</p>
              <p className="">Elira is for people who want their homes or offices to feel just as put-together as a hotel room.</p>
            </div>
            <Image className="w-1/2 rounded-2xl" width={594} height={145} alt="" src="/herobg.jpg" />
          </div>

          <div className="w-full flex flex-row justify-between gap-20">
            <Image className="w-1/2 rounded-2xl" width={423} height={174} alt="" src="/herobg.jpg" />
            <div className="flex flex-col justify-start gap-20">
              <p className="">When your space is clear, your mind is clear. </p>
              <p className="">And when your mind is clear, everything else moves quicker and easier.</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-between gap-20">
            <div className="w-full flex flex-col">
              <h1 className="font-1 text-brass text-[128px] leading-[128px] h-full">MEET THE FOUNDER</h1>
              <p className="">Soniru has always had an eye for order - From a young age, she found deep satisfaction in making spaces feel clean, put-together, and thoughtfully arranged.</p>
            </div>
            <Image className="w-1/2 rounded-2xl" width={594} height={154} alt="" src="/herobg.jpg" />
          </div>
        </section>

        {/* OUR SERVICES*/}
        <section id="our-services" className="text-left text-2xl py-30 text-white font-3 flex flex-col gap-10 bg-coffee px-20">
          <div className="flex flex-row justify-between pt-5">
            <h1 className="font-1 text-[92px] leading-[92px] text-brass">OUR SERVICES</h1>
            <h1 className="font-1 text-[96px] leading-[96px] text-brass">←</h1>
          </div>
          <div className="flex flex-row justify-between gap-20">
            <div className="flex flex-col justify-between w-1/2 gap-10">
              <p className="">We create systems that would prevent future clutter. The kind that makes a space feel light, breathable, and easy to maintain.</p>
              <Image className="rounded-2xl" width={621} height={387} alt="" src="/servicesimg.png" />
            </div>
            <div className="flex flex-col justify-between w-1/2">
              <div className="">
                <h2 className="">Home and Office Decluttering</h2>
                <p className="">Lorem ipsum</p>
              </div>
              <div className="">
                <h2 className="">Move-In Services</h2>
                <p className="">Lorem ipsum</p>
              </div>
              <div className="">
                <h2 className="">Closet Decluttering</h2>
                <p className="">Lorem ipsum</p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROJECTS*/}
        <section id="our-projects" className="text-left py-30 text-maroon flex flex-col px-20">
          <div className=" flex flex-row justify-between">
            <h1 className="font-1 text-[92px]">OUR PROJECTS</h1>
            <h1 className="font-1 text-[92px]">←</h1>
          </div>
          <Project1/>
          <Project2/>
          <div className="flex flex-row justify-end">
              <h1 className="font-2 text-[48px]">see more projects →</h1>
            </div>
          
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="h-[832px] text-left py-30 flex flex-row px-20">
          <div className="w-full flex flex-col justify-start">
            <Carousel/>
          </div>
          <div className="w-full h-full">
            <div className="flex flex-col justify-start items-end">
              <h1 className="font-1 text-maroon text-[92px] leading-[92px]">TESTIMONIALS</h1>
              <p className="font-3 text-maroon text-[26px] leading-[26px]">from our clients</p>
            </div> 
          </div>
          <div className="absolute mt-[274px] ml-[480px]"><Testimonials/></div>
        </section>

        <section className="bg-maroon h-full my-20 px-70 py-20 flex flex-col gap-5 mx-20">
          <h1 className="font-2 text-5xl w-full text-center text-white">BOOK A CONSULTATION 
            TODAY TO GET STARTED
          </h1>
          <p className="text-white font-3 text-2xl text-center w-full">CLICK HERE →</p>
        </section>

        
      </main>

      {/* CONTACT US*/}
      <section id="contact" className="w-full h-[832px] bg-[url('/herobg.jpg')] bg-cover mt-30 px-[40px] py-[60px]">
          <div className="w-full h-full bg-maroon flex flex-row font-3 text-white">
            <div className="w-1/2 flex flex-col justify-between gap-10 px-[35px] py-[106px]">
              <div className="flex flex-col justify-start gap-5 ">
                <h1 className="font-2 text-[48px] w-2/3">Get In Touch With Us</h1>
                <p className="font-3 text-[20px]">Have a project in mind or need expert guidance? We’d love to hear from you. Reach out to us for inquiries, collaborations or consultations.</p>
              </div>
              <div className="w-1/2">
                <p className="font-3 text-[20px]">+234 000 1111 222</p>
                <p className="font-3 text-[20px]">elirabysoniru@gmail.com</p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center gap-5 text-lg px-10">
              <div className="w-full grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 items-start">
                <div className="">
                  <p>First Name</p>
                  <div className="w-full h-[24px] bg-brass"></div>
                </div> 
                <div className="">
                  <p>Last Name</p>
                  <div className="w-full h-[24px] bg-brass"></div>
                </div>
                <div className="">
                  <p>Phone Number</p>
                  <div className="w-full h-[24px] bg-brass"></div>
                </div>
                <div className="">
                  <p>Email</p>
                  <div className="w-full h-[24px] bg-brass"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="">
                  <p>Message</p>
                  <div className="w-full h-[72px] bg-brass"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="text-maroon text-[16px] py-[12px] bg-background px-[150px] flex justify-center rounded-2xl">Submit</div>
              </div>
            </div>
          </div>
        </section>

      <footer className="w-full px-40 py-5 bg-maroon flex flex-row justify-between font-3 text-white text-xl">
          <div className="">All Rights Reserved.</div>
          <div className="">© Elira By Soniru</div>
          <div className="">Built by Exhibit O Design</div>
      </footer>
    </div>
  );
}
