"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import Project1 from "./project-summaries/project1";
import Project2 from "./project-summaries/project2";

export default function Home() {
  return (
    // Main page wrapper
    <div className="bg-background">
      {/* Navbar component */}
      <Navbar />
      <main className="">
        {/* Hero section */}
        <section
          id="hero"
          className="w-full relative bg-background flex flex-col items-center justify-center lg:pt-30 pb-10 lg:px-20 pt-20 box-border"
        >
          {/* Nested: Hero background image container */}
          <div className="self-stretch rounded-none lg:rounded-[20px] h-full bg-[url('/herobg.jpg')] bg-cover bg-no-repeat bg-[top]">
            {/* Nested: Overlay with black transparent background */}
            <div className="self-stretch rounded-none lg:rounded-[20px] h-full min-h-[700px] flex flex-col items-start justify-center bg-black/50">
              {/* Nested: Heading container */}
              <div className="w-full h-1/2 text-start px-10 lg:px-20 md:pt-10">
                {/* Text block: Main hero heading */}
                <h1 className="font-1 text-white text-[100px] md:text-[140px] lg:text-[180px]">
                  ELIRA BY SONIRU.
                </h1>
              </div>
              {/* Nested: Content row with text and image */}
              <div className="w-full h-1/2 flex flex-col md:flex-row items-start align-center  px-10 lg:px-20 md:pt-10 gap-20">
                {/* Text block: Hero description and button */}
                <div className="w-full md:w-1/2 h-full text-white font-3 flex flex-col items-start justify-center gap-5">
                  <p className="text-2xl md:text-4xl w-4/5">
                    Decluttering & interior styling for busy professionals.
                  </p>
                  {/* Nested: Consultation button */}
                  <Link
                    href="/bookings"
                    className="rounded-md bg-gray-100/10 border-linen border-solid border-[0.5px] py-3 px-4 text-sm md:text-base"
                  >
                    Book Your Consultation →
                  </Link>
                </div>
                {/* Image block: Curved text image */}
                <div className="hidden w-full md:w-1/2 h-full md:flex items-center justify-center p-6">
                  {/* Image: Curved Text */}
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

        {/* About Us section */}
        <section
          id="about-us"
          className="w-full relative bg-background overflow-y-auto flex flex-col gap-15 items-start justify-center box-border text-left text-black font-3 py-30 pb-10 px-5 md:px-20"
        >
          {/* Nested: About Us main container */}
          <div className="w-full">
            {/* Nested: About Us heading row 1 */}
            <div className=" flex flex-row md:flex-row justify-between gap-8 md:gap-20">
              {/* Text block: ABOUT heading */}
              <h1 className="font-1 text-brass text-6xl md:text-[200px] leading-tight md:leading-[180px] h-full">
                ABOUT
              </h1>
              {/* Image: About arrow */}
              <Image
                className="w-1/5 md:w-[128px] h-auto md:h-[128px]"
                width={128}
                height={128}
                alt=""
                src="/about-arrow.png"
              />
            </div>
            {/* Nested: About Us heading row 2 */}
            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-20">
              {/* Text block: US heading */}
              <h1 className="font-1 text-brass text-6xl md:text-[200px] leading-tight md:leading-[180px] h-full">
                US
              </h1>
              {/* Image: Hero background */}
              <Image
                className="object-cover w-full lg:w-[932px] h-auto rounded-2xl"
                width={428}
                height={154}
                alt=""
                src="/aboutusimg.jpg"
              />
            </div>
          </div>

          {/* Nested: About Us content row 1 */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-20">
            {/* Text block: About description left */}
            <div className="flex flex-col justify-start gap-8 md:gap-10">
              <p className="text-base md:text-2xl">
                Marrying the beauty of interior design with the strategy of
                organization, Elira transforms everyday spaces into sanctuaries.
              </p>
              <p className="text-base md:text-2xl">
                Elira is for people who want their homes or offices to feel just
                as put-together as a hotel room.
              </p>
            </div>
            {/* Image: About image right */}
            <Image
              className="w-full md:w-1/2 rounded-2xl"
              width={594}
              height={145}
              alt=""
              src="/herobg.jpg"
            />
          </div>

          {/* Nested: About Us content row 2 */}
          <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-20">
            {/* Image: About image left */}
            <Image
              className="w-full md:w-1/2 rounded-2xl md:h-1/4 object-contain"
              width={423}
              height={174}
              alt=""
              src="/herobg.jpg"
            />
            {/* Text block: About description right */}
            <div className="flex flex-col justify-start gap-8 md:gap-10">
              <p className="text-base md:text-2xl">
                When your space is clear, your mind is clear.{" "}
              </p>
              <p className="text-base md:text-2xl">
                And when your mind is clear, everything else moves quicker and
                easier.
              </p>
            </div>
          </div>

          {/* Nested: Meet the Founder section */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-20">
            {/* Text block: Founder info */}
            <div className="w-full flex flex-col">
              <h1 className="font-1 text-brass text-4xl md:text-[92px] lg:text-[128px] leading-tight md:leading-[92px] lg:leading-[128px] h-full">
                MEET THE FOUNDER
              </h1>
              <p className="text-base md:text-2xl">
                Soniru has always had an eye for order - From a young age, she
                found deep satisfaction in making spaces feel clean,
                put-together, and thoughtfully arranged.
              </p>
            </div>
            {/* Image: Founder image */}
            <Image
              className="w-full md:w-1/2 rounded-2xl"
              width={594}
              height={154}
              alt=""
              src="/herobg.jpg"
            />
          </div>
        </section>

        {/* Our Services section */}
        <section
          id="our-services"
          className="text-left text-2xl py-30 text-white font-3 flex flex-col gap-10 bg-coffee px-5 md:px-20 lg:px-40"
        >
          {/* Nested: Our Services header row */}
          <div className="flex flex-row justify-between pt-5 md:pt-10 lg:pt-16">
            {/* Text block: OUR SERVICES heading */}
            <h1 className="font-1 text-4xl md:text-6xl lg:text-[92px] leading-tight text-brass">
              OUR SERVICES
            </h1>
            {/* Text block: Arrow */}
            <h1 className="font-1 text-4xl md:text-6xl lg:text-[92px] leading-tight text-brass">
              ←
            </h1>
          </div>
          {/* Nested: Our Services content row */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 lg:gap-20">
            {/* Text block and image left */}
            <div className="flex flex-col justify-between w-full md:w-1/2 gap-8 md:gap-10 text-base md:text-xl lg:text-2xl">
              <p>
                We create systems that would prevent future clutter. The kind
                that makes a space feel light, breathable, and easy to maintain.
              </p>
              {/* Image: Services image */}
              <Image
                className="w-full rounded-2xl object-contain h-auto"
                width={621}
                height={387}
                alt=""
                src="/servicesimg.png"
              />
            </div>
            {/* Text block right with service details */}
            <div className="flex flex-col justify-between w-full md:w-1/2 gap-8 md:gap-10">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Home and Office Decluttering
                </h2>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Move-In Services
                </h2>
                <p>Lorem ipsum</p>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  Closet Decluttering
                </h2>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Projects section */}
        <section
          id="our-projects"
          className="text-left py-30 text-maroon flex flex-col gap-8 md:gap-12 lg:gap-20 md:px-20 lg:px-40"
        >
          {/* Nested: Our Projects header row */}
          <div className="flex flex-row justify-center md:justify-between gap-8 md:gap-10">
            {/* Text block: OUR PROJECTS heading */}
            <h1 className="font-1 text-5xl md:text-6xl lg:text-[92px]">
              OUR PROJECTS
            </h1>
            {/* Text block: Arrow */}
            <h1 className="font-1 text-5xl md:text-6xl lg:text-[92px]">←</h1>
          </div>
          {/* Project1 component */}
          <div className="w-full">
            <Project1 />
          </div>
          {/* Project2 component */}
          <div className="w-full">
            <Project2 />
          </div>
          {/* Nested: See more projects link */}
          <div className="flex flex-row justify-end">
            <h1 className="font-2 text-2xl md:text-4xl lg:text-[48px] text-right">
              see more projects →
            </h1>
          </div>
        </section>

        {/* Testimonials section */}
        <section
          id="testimonials"
          className="min-h-[800px] md:h-[832px] text-left py-30 flex flex-col-reverse md:flex-row gap-8 md:gap-16 px-5 md:px-20 lg:px-40"
        >
          {/* Nested: Carousel container */}
          <div className="w-full flex flex-col mb-5 md:mb-0 justify-start">
            {/* Carousel component */}
            <div className="flex flex-col gap-5 items-center px-[30px]">
              <div className="w-full max-w-[628px] h-[300px] md:h-[450px] lg:h-[551px] bg-coffee rounded-3xl"></div>
              <div className="w-full flex flex-row justify-center md:justify-start gap-5">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] bg-coffee text-lg md:text-xl lg:text-[30px] flex items-center justify-center text-white rounded-[20px]">
                  ←
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] bg-coffee text-lg md:text-xl lg:text-[30px] flex items-center justify-center text-white rounded-[20px]">
                  →
                </div>
              </div>
            </div>{" "}
          </div>
          {/* Nested: Testimonials component positioned absolutely on desktop */}
          <div className="md:absolute md:mt-[274px] md:ml-[480px]">
            <div className="w-full md:w-[700px] md:h-[374px] bg-background rounded-3xl p-[30px] text-white flex flex-col md:flex-row gap-20">
              <div className="w-[300px] h-[374px] bg-coffee rounded-2xl px-[28px] flex flex-col justify-evenly">
                <div className="font-3 text-[24px]">
                  Working with Soniru and seeing her attention to detail really
                  impressed me.
                </div>
                <div>
                  <p className="font-3 text-[24px]">Jane Doe</p>
                  <p className="font-3 text-[16px]">Architect</p>
                </div>
              </div>
              <div className="w-[300px] h-[374px] bg-coffee rounded-2xl px-[28px] flex flex-col justify-evenly">
                <div className="font-3 text-[24px]">
                  Working with Soniru and seeing her attention to detail really
                  impressed me.
                </div>
                <div>
                  <p className="font-3 text-[24px]">Jane Doe</p>
                  <p className="font-3 text-[16px]">Architect</p>
                </div>
              </div>
            </div>{" "}
          </div>
          {/* Nested: Testimonials header container */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col justify-start items-center h-full">
              {/* Text block: TESTIMONIALS heading */}
              <h1 className="font-1 text-6xl lg:text-[92px] text-maroon">
                TESTIMONIALS
              </h1>
              {/* Text block: Subtitle */}
              <p className="font-3 text-maroon text-base md:text-xl leading-tight md:leading-[26px]">
                from our clients
              </p>
            </div>
          </div>
        </section>

        {/* Consultation booking section */}
        <section className="bg-maroon h-full my-10 md:my-20 px-5 md:px-10 lg:px-20 py-10 md:py-20 flex flex-col gap-5 mx-5 md:mx-10 lg:mx-20">
          {/* Text block: Booking heading */}
          <h1 className="font-2 text-3xl md:text-4xl lg:text-5xl w-full text-center text-white">
            BOOK A CONSULTATION TODAY TO GET STARTED
          </h1>
          {/* Text block: Click here prompt */}
          <p className="text-white font-3 text-lg md:text-xl lg:text-2xl text-center w-full">
            CLICK HERE →
          </p>
        </section>
      </main>

      {/* Contact Us section */}
      <section
        id="contact"
        className="w-full h-[832px] bg-[url('/herobg.jpg')] bg-cover mt-30 px-5 md:px-10 lg:px-20 py-10 md:py-20"
      >
        {/* Nested: Contact Us main container */}
        <div className="w-full h-full bg-maroon flex flex-col md:flex-row font-3 text-white">
          {/* Nested: Contact info left column */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 md:gap-10 px-5 md:px-10 lg:px-20 py-10 md:py-20">
            {/* Text block: Contact header and description */}
            <div className="flex flex-col justify-start gap-5 ">
              <h1 className="font-2 text-3xl md:text-4xl lg:text-[48px] w-2/3">Get In Touch With Us</h1>
              <p className="font-3 text-base md:text-lg lg:text-xl">
                Have a project in mind or need expert guidance? We’d love to
                hear from you. Reach out to us for inquiries, collaborations or
                consultations.
              </p>
            </div>
            {/* Text block: Contact phone and email */}
            <div className="w-1/2">
              <p className="font-3 text-base md:text-lg lg:text-xl">+234 000 1111 222</p>
              <p className="font-3 text-base md:text-lg lg:text-xl">elirabysoniru@gmail.com</p>
            </div>
          </div>
          {/* Nested: Contact form right column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-base md:text-lg lg:text-xl px-5 md:px-10 lg:px-20">
            {/* Nested: Form fields grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 items-start">
              {/* Text block and input placeholder: First Name */}
              <div className="">
                <p>First Name</p>
                <div className="w-full h-[24px] bg-brass"></div>
              </div>
              {/* Text block and input placeholder: Last Name */}
              <div className="">
                <p>Last Name</p>
                <div className="w-full h-[24px] bg-brass"></div>
              </div>
              {/* Text block and input placeholder: Phone Number */}
              <div className="">
                <p>Phone Number</p>
                <div className="w-full h-[24px] bg-brass"></div>
              </div>
              {/* Text block and input placeholder: Email */}
              <div className="">
                <p>Email</p>
                <div className="w-full h-[24px] bg-brass"></div>
              </div>
            </div>
            {/* Nested: Message field */}
            <div className="w-full">
              <div className="">
                <p>Message</p>
                <div className="w-full h-[72px] bg-brass"></div>
              </div>
            </div>
            {/* Nested: Submit button */}
            <div className="w-full">
              <div className="text-maroon text-sm md:text-base lg:text-lg py-[12px] bg-background px-10 md:px-20 lg:px-40 flex justify-center rounded-2xl">
                Submit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="w-full md:px-40 py-5 bg-coffee flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center font-3 text-white text-xl">
        <div className="">All Rights Reserved.</div>
        <div className="">© Elira By Soniru</div>
        <div className="">Built by Exhibit O Design</div>
      </footer>
    </div>
  );
}
