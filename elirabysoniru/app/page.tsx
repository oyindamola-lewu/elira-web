"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import Project1 from "./project-summaries/project1";
import Project2 from "./project-summaries/project2";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

//             <div className="h-[20px] w-[20px] rounded-full bg-brass border border-white"></div>

export default function Home() {
  const carouselImages = ["/img1.jpg", "/img2.jpg", "/img7.jpg"];
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { register, handleSubmit, reset } = useForm<FormData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_k41pckf", // Your EmailJS Service ID
        "template_5wvv7lb", // Your EmailJS Template ID
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "6uQe686K3U7R7TzsR" // Your EmailJS Public Key
      );
      alert("Your booking was submitted successfully!");
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Working with Elira was a game-changer for my wardrobe. Their attention to detail, creativity, and professionalism exceeded my expectations. I'd recommend them to anyone looking for quality, professionalism and perfection.",
      name: "Idara",
      location: "Lagos, Nigeria"
    },
    {
      text: "Elira transformed how I approach my personal style. Their innovative design process and meticulous execution delivered results that went beyond what I imagined possible. The seamless blend of functionality and aesthetics in every piece reflects true craftsmanship. Absolutely exceptional work.",
      name: "Dumkene",
      location: "Lagos, Nigeria"
    },
    {
      text: "The collaboration with Elira was nothing short of remarkable. Their strategic vision, combined with flawless technical execution, created a wardrobe that perfectly aligns with my lifestyle and goals. The precision and creative problem-solving throughout the process were impressive. Outstanding service from start to finish.",
      name: "Jessica",
      location: "Lagos, Nigeria"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    // Main page wrapper
    <div className="bg-background">
      {/* Navbar component */}
      <Navbar />
      <main className="">
        {/* Hero section */}
        <section
          id="hero"
          className="w-full relative bg-background flex flex-col items-center justify-center pt-0 pb-10 lg:px-20 box-border"
        >
          {/* Nested: Hero background image container */}
          <div className="self-stretch rounded-none lg:rounded-[20px] h-full bg-[url('/herobg.jpg')] bg-cover bg-no-repeat bg-[top]">
            {/* Nested: Overlay with black transparent background */}
            <div className="self-stretch rounded-none lg:rounded-[20px] h-full min-h-[700px] flex flex-col items-start justify-center bg-black/50">
              {/* Nested: Heading container */}
              <div className="w-full h-1/2 text-start px-10 md:px-20 md:pt-10 animate-slideInUp">
                {/* Text block: Main hero heading */}
                <h1 className="font-1 text-white/65 text-[100px] md:text-[140px] lg:text-[180px]">
                  ELIRA BY SONIRU.
                </h1>
              </div>
              {/* Nested: Content row with text and image */}
              <div className="w-full h-1/2 flex flex-col md:flex-row items-start animate-slideInUp align-center  px-10 lg:px-20 md:pt-10 gap-20">
                {/* Text block: Hero description and button */}
                <div className="w-full md:w-1/2 h-full text-white font-3 flex flex-col items-start justify-center gap-5">
                  <p className="text-2xl md:text-4xl w-4/5">
                    Luxury Space Curation & Professional Organizing for Those
                    Who Expect More.
                  </p>
                  {/* Nested: Consultation button */}
                  <Link
                    href="/bookings"
                    className=" bg-gray-100/10 border-linen border-solid border-[0.5px] py-3 px-4 text-sm md:text-base hover:bg-white hover:text-black"
                  >
                    Book Your Consultation →
                  </Link>
                </div>
                {/* Image block: Curved text image */}
                <div className="hidden w-full md:w-1/2 h-full md:flex items-start justify-center px-6 py-4">
                  {/* Image: Curved Text */}
                  <Image
                    className="w-[180px] sm:w-[220px] md:w-[260px] object-cover rotate-360"
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
          className="w-full relative bg-coffee overflow-y-auto flex flex-col gap-8 md:gap-5 items-start justify-center box-border text-left text-white font-3 py-10 md:py-30 pb-10 px-5 md:px-20"
        >
          {/* Nested: About Us main container */}
          <div className="w-full">
            {/* Nested: About Us heading row 1 */}
            <div className=" flex flex-row md:flex-row items-center justify-between gap-8 md:gap-20  ">
              {/* Text block: ABOUT heading */}
              <div className="flex flex-row gap-5 md:gap-10">
                <h1 className="font-1 text-brass text-6xl md:text-[128px] leading-tight h-full">
                  ABOUT
                </h1>
                <h1 className="block font-1 text-brass text-6xl md:text-[128px] leading-tight  h-full">
                  US
                </h1>
              </div>
              {/* Image: About arrow */}
              <h1 className="font-1 text-4xl md:text-6xl md:text-[128px] leading-tight text-brass">
                ←
              </h1>
            </div>{" "}
          </div>

          {/* Nested: About Us content row 1 */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-8 md:gap-20">
            {/* Text block: About description left */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8 md:gap-10">
              <p className="text-xl md:text-2xl">
                Elira, meaning &apos;to be free&apos; exists to transform how
                you live in your space. We create purposeful calm through
                strategic curation and thoughtful design touches that feel
                worthy of you.
              </p>
              <p className="text-xl md:text-2xl">
                We believe a beautifully organized space isn&apos;t just
                aesthetic, it&apos;s a system for living well.
              </p>
            </div>
            {/* Image: About image right */}
            <Image
              className="w-full md:w-1/2 rounded-2xl"
              width={432}
              height={145}
              alt=""
              src="/img3.jpg"
            />
          </div>

          {/* Nested: About Us content row 2 */}
          <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-20">
            {/* Image: About image left */}
            <Image
              className="w-full md:w-1/2 rounded-2xl md:h-1/4 object-contain"
              width={432}
              height={174}
              alt=""
              src="/img4.jpg"
            />
            {/* Text block: About description right */}
            <div className="flex flex-col justify-evenly gap-8 md:gap-10">
              <p className="text-xl md:text-2xl">
                Fusing professional organizing with luxury space transformation,
                Elira tailors every detail to your lifestyle.
              </p>
              <p className="text-xl md:text-2xl">
                From bustling family homes to refined personal offices, we build
                structures that make your everyday easier to enjoy, and
                impossible to overlook.
              </p>
            </div>
          </div>

          <div className="w-full my-10 h-0.5 bg-white/20"></div>

          {/* Nested: Meet the Founder section */}
          <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-20">
            {/* Text block: Founder info */}
            <div className="w-full flex flex-col">
              <div className="flex flex-row justify-between ">
                {/* Text block: OUR SERVICES heading */}
                <h1 className="font-1 text-6xl lg:text-[128px] text-left leading-tight text-brass pb-8">
                  MEET OUR FOUNDER
                </h1>
                <h1 className="font-1 text-6xl lg:text-[128px] text-left leading-tight text-brass pb-8">
                  ✶
                </h1>
              </div>
              <div className="h-full flex flex-col gap-8">
                <p className="h-full text-xl md:text-2xl">
                  Elira was born from a lifetime love of intentional living.
                  With a background in architecture and years immersed in
                  design, I saw firsthand how the way a space is structured can
                  shape the way we live, think, and feel.
                </p>
                <p className="h-full text-xl md:text-2xl">
                  Over time, organizing stopped feeling like a chore, it became
                  my quiet superpower. I learned that when you walk into a space
                  that&apos;s thoughtfully arranged for your life, you move
                  through your day with less friction and more freedom.
                </p>
                <p className="h-full text-xl md:text-2xl">
                  I built Elira to offer more than just tidy shelves, we craft
                  tailored systems, style beautiful details, and transform the
                  everyday into something that feels worthy of you. It&apos;s
                  structure that holds your life, so you can live more fully.
                </p>
                <p className="h-full text-xl md:text-2xl">
                  I&apos;m Soniru, and you&apos;re welcome here.
                </p>
              </div>
            </div>
            {/* Image: Founder image */}
            <Image
              className="w-full md:w-1/2 rounded-2xl"
              width={594}
              height={154}
              alt=""
              src="/founder.jpg"
            />
          </div>
        </section>

        {/* Our Services section */}
        <section
          id="our-services"
          className="text-left text-xl py-10 md:py-30 text-coffee font-3 flex flex-col gap-5 md:gap-10 bg-background px-5 md:px-20 lg:px-20"
        >
          {/* Nested: Our Services header row */}
          <div className="flex flex-row justify-between pt-5 md:pt-10 lg:pt-16">
            {/* Text block: OUR SERVICES heading */}
            <h1 className="font-1 text-5xl lg:text-[128px] leading-tight text-maroon">
              OUR SERVICES
            </h1>
            {/* Text block: Arrow */}
            <h1 className="font-1 text-5xl lg:text-[128px] leading-tight text-maroon">
              ←
            </h1>
          </div>
          {/* Nested: Our Services content row */}
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 lg:gap-20">
            {/* Text block and image left */}
            <div className="flex flex-col justify-between w-full md:w-1/2 gap-8 md:gap-10 text-xl md:text-2xl">
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
                src="/img6.jpg"
              />
            </div>
            {/* Text block right with service details */}
            <div className="overflow-scroll flex flex-col justify-around w-full md:w-1/2 h-[540px]">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Professional Home & Space Organization
                </h2>
                <ul>
                  <li>
                    ○ Decluttering and editing spaces to create calm, livable
                    order
                  </li>
                  <li>
                    ○ Streamlined wardrobe creation and closet styling Pantry,
                    kitchen, and utility area setups with functional product
                    placements
                  </li>
                  <li>
                    ○ Move-in and relocation setups, unpacking, zoning, and full
                    home resets 
                  </li>
                  <li>
                    ○ Workspace and office organizing for maximum flow
                    and productivity
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  Space Transformation
                </h2>
                <ul>
                  <li>
                    ○ Room refreshes and re-styling for a new look without a full
                    renovation
                  </li>
                  <li>
                    ○ Visual upgrades: mood boards, color palettes, and styling
                    consultations
                  </li>
                  <li>
                    ○ Sourcing and placement of design touches that elevate the
                    feel of your space
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="our-process"
          className="bg-coffee px-5 md:px-20 xl:h-full py-15 lg:py-20 xl:py-30"
        >
          <div className="h-1/4">
            <div className=" flex flex-row justify-between">
              {/* Text block: OUR PROCESS heading */}
              <h1 className="text-brass font-1  text-5xl lg:text-[128px] leading-tight text-white">
                OUR PROCESS
              </h1>
              {/* Text block: Arrow */}
              <h1 className="text-brass font-1  text-5xl lg:text-[128px] leading-tight text-white">
                ←
              </h1>
            </div>
          </div>
          <div className="h-3/4 grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-10 items-start pt-10">
            <div className="flex flex-col h-full items-start gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline ">
                1. Consultation & Visioning
              </h1>
              <p className="text-white font-3 text-xl">
                We start with a paid consultation, in person or virtual, to
                understand your needs, style, and daily routines.
              </p>
            </div>
            <div className="flex flex-col items-start justify-end gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline">
                2.⁠ ⁠Personalized Plan
              </h1>
              <p className="text-white font-3 text-xl">
                We design a tailored plan: zones, systems, styling touches, and
                product sourcing to bring your vision to life.
              </p>
            </div>
            <div className="flex flex-col h-full items-start gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline">
                3.⁠ ⁠Transformation & Styling
              </h1>
              <p className="text-white font-3 text-xl">
                Our team handles every detail, decluttering, organizing,
                styling, and setup, so you can step back in when it’s all done.
              </p>
            </div>

            <div className="flex flex-col items-start justify-end gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline">
                4. ⁠Reveal & Ongoing Care
              </h1>
              <p className="text-white font-3 text-xl">
                We reveal your refreshed space and guide you on maintaining it.
                Seasonal refresh visits are available for clients who want
                long-term care.
              </p>
            </div>
          </div>
        </section>

        {/* Our Projects section */}
        <section
          id="our-projects"
          className="hidden text-left py-30 text-maroon flex-col gap-8 md:gap-12 lg:gap-20 md:px-20 lg:px-40"
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
          <div className="flex flex-row justify-end pr-10 md:pr-0">
            <Link href="/portfolio">
              <h1 className="font-2 text-2xl md:text-4xl lg:text-[48px] text-right">
                see more projects →
              </h1>
            </Link>
          </div>
        </section>

        {/* Testimonials section */}
        <section
          id="testimonials"
          className="h-full text-left pt-20 flex flex-col-reverse md:flex-row gap-8 px-5 md:px-20 lg:px-20"
        >
          {/* Nested: Carousel container */}
          <div className="w-full flex flex-col justify-start">
            {/* Carousel component */}
            <div className="flex flex-col gap-5 items-start ">
              <div
                className="w-full max-w-[628px] h-[300px] md:h-[450px] lg:h-[551px] bg-coffee rounded-3xl flex items-center justify-center"
                style={{
                  backgroundImage: `url('${carouselImages[carouselIndex]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full inset-y-0 left-0 right-0 flex items-center justify-between px-4 pointer-events-none">
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] bg-black/30 text-lg md:text-xl lg:text-[30px] flex items-center justify-center text-white rounded-full cursor-pointer pointer-events-auto"
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        prev === 0 ? carouselImages.length - 1 : prev - 1
                      )
                    }
                    aria-label="Previous Slide"
                  >
                    ←
                  </div>
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px] bg-black/30 text-lg md:text-xl lg:text-[30px] flex items-center justify-center text-white rounded-full cursor-pointer pointer-events-auto"
                    onClick={() =>
                      setCarouselIndex((prev) =>
                        prev === carouselImages.length - 1 ? 0 : prev + 1
                      )
                    }
                    aria-label="Next Slide"
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Nested: Testimonials component positioned absolutely on desktop */}

          {/* Nested: Testimonials header container */}
          <div className="w-full h-full flex flex-col gap-5 xl:gap-10">
            <div className="flex flex-col justify-start lg:items-center h-1/3">
              {/* Text block: TESTIMONIALS heading */}
              <h1 className="font-1 text-6xl lg:text-[128px] text-maroon">
                TESTIMONIALS
              </h1>
              {/* Text block: Subtitle */}
              <p className="font-3 text-maroon text-xl md:text-2xl leading-tight md:leading-[26px]">
                from our clients
              </p>
            </div>
 <div className="w-full h-[420px] md:h-[320px] overflow-hidden relative">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="lg:px-7 xl:px-10 h-full">
            <div className="w-full h-full text-white flex flex-col pb-5 border-0 border-b-1 border-b-red-950">
              <div className="w-full h-full text-red-900 flex flex-col justify-evenly">
                <div className="font-3 text-[24px]">
                  {testimonial.text}
                </div>
                <div>
                  <p className="font-3 text-[24px]">{testimonial.name}</p>
                  <p className="font-3 text-[16px]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Progress indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-red-900' : 'bg-red-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
          </div>
        </section>

        {/* Consultation booking section */}
        <section className="hidden bg-coffee h-full my-10 md:my-20 px-5 md:px-10 lg:px-30 py-10 md:py-20 flex-col gap-5 mx-5 md:mx-10 lg:mx-20">
          {/* Text block: Booking heading */}
          <h1 className="font-2 text-3xl md:text-4xl lg:text-4xl w-full text-center text-white">
            Book a consultation today to get started.
          </h1>
          {/* Text block: Click here prompt */}
          <Link href="/bookings">
            <p className="text-white font-3 text-lg md:text-xl lg:text-2xl text-center w-full hover:text-yellow-400">
              CLICK HERE →
            </p>
          </Link>
        </section>
      </main>

      {/* Contact Us section */}
      <section
        id="contact"
        className="w-full h-full bg-[url('/img1.jpg')] bg-cover mt-30 px-5 md:px-10 lg:px-20 py-10 md:py-20"
      >
        <div className="w-full h-full py-10 bg-maroon flex flex-col md:flex-row font-3 text-white">
          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-between gap-5 md:gap-10 px-5 md:px-10 lg:px-20 py-10 md:py-20">
            <div className="flex flex-col justify-start gap-5">
              <h1 className="font-2 text-3xl md:text-4xl lg:text-[48px] w-2/3">
                Get In Touch With Us
              </h1>
              <p className="font-3 text-base md:text-lg lg:text-xl">
                Have a project in mind or need expert guidance? We’d love to
                hear from you. Reach out to us for inquiries, collaborations or
                consultations.
              </p>
            </div>
            <div className="w-1/2">
              <p className="font-3 text-base md:text-lg lg:text-xl">
                +234 704 5313 373
              </p>
              <p className="font-3 text-base md:text-lg lg:text-xl">
                tryelira@gmail.com{" "}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-base md:text-lg lg:text-xl px-5 md:px-10 lg:px-20">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 items-start">
                <div>
                  <p>First Name</p>
                  <input
                    className="w-full h-[24px] bg-brass text-white placeholder-gray outline-none border-none px-2 py-4 text-lg"
                    type="text"
                    {...register("firstName")}
                    required
                    placeholder="Enter your first name"
                    id="firstName"
                  />
                </div>
                <div>
                  <p>Last Name</p>
                  <input
                    className="w-full h-[24px] bg-brass text-white placeholder-grey outline-none border-none  px-2 py-4 text-lg"
                    type="text"
                    {...register("lastName")}
                    required
                    placeholder="Enter your last name"
                    id="lastName"
                  />
                </div>
                <div>
                  <p>Phone Number</p>
                  <input
                    className="w-full h-[24px] bg-brass text-white placeholder-gray outline-none border-none  px-2 py-4 text-lg"
                    type="tel"
                    {...register("phone")}
                    required
                    placeholder="Enter your phone"
                    id="phone"
                  />
                </div>
                <div>
                  <p>Email</p>
                  <input
                    className="w-full h-[24px] bg-brass text-white placeholder-gray outline-none border-none text-lg px-2 py-4"
                    type="email"
                    {...register("email")}
                    required
                    placeholder="Enter your email"
                    id="email"
                  />
                </div>
              </div>
              <div className="w-full">
                <p>Message</p>
                <textarea
                  className="w-full h-[72px] bg-brass text-white placeholder-gray outline-none border-none text-lg p-2"
                  {...register("message")}
                  required
                  placeholder="Enter your message"
                  id="message"
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full text-maroon text-sm md:text-base lg:text-lg py-[12px] px-10 md:px-20 lg:px-40 flex justify-center ${
                    loading ? "opacity-70 cursor-not-allowed" : "bg-background"
                  }`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
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
