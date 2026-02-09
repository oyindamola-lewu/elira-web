"use client";
import Navbar from "./components/navbar";
import Image from "next/image";
import Link from "next/link";
import Project1 from "./project-summaries/project1";
import Project2 from "./project-summaries/project2";
import ScrollSection from "./components/scroll-section";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send } from "lucide-react";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};

//             <div className="h-[20px] w-[20px] rounded-full bg-brass border border-white"></div>

export default function Home() {

  const StarIcon = ({ className = "" }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );

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
        "6uQe686K3U7R7TzsR", // Your EmailJS Public Key
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
      role: "Client",
      location: "Lagos, Nigeria",
    },
    {
      text: "Elira transformed how I approach my personal style. Their innovative design process and meticulous execution delivered results that went beyond what I imagined possible. The seamless blend of functionality and aesthetics in every piece reflects true craftsmanship. Absolutely exceptional work.",
      name: "Dumkene",
      role: "Client",
      location: "Lagos, Nigeria",
    },
    {
      text: "The collaboration with Elira was nothing short of remarkable. Their strategic vision, combined with flawless technical execution, created a wardrobe that perfectly aligns with my lifestyle and goals. The precision and creative problem-solving throughout the process were impressive. Outstanding service from start to finish.",
      name: "Jessica",
      role: "Client",
      location: "Lagos, Nigeria",
    },
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
        <ScrollSection
          id="hero"
          className="w-full relative bg-background flex flex-col items-center justify-center px-5 md:px-10 lg:px-20 py-10 md:py-14 box-border"
        >
          {/* Nested: Hero background image container */}
          <div className="w-full mx-auto">
            <div className="relative w-full rounded-[28px] overflow-hidden bg-[url('/herobg.jpg')] bg-cover bg-no-repeat bg-center shadow-xl">
              {/* Nested: Overlay with black transparent background */}
              <div className="relative w-full min-h-[600px] md:min-h-[720px] flex flex-col items-left justify-center bg-gradient-to-b from-black/25 via-black/45 to-black/60">
                {/* Nested: Heading container */}
                <div className="w-full text-left px-8 sm:px-10 md:px-16 lg:px-20 animate-slideInUp">
                  {/* Text block: Main hero heading */}
                  <div className="w-full mx-auto">
                    <h1 className="font-1 text-white/80 leading-[0.92] tracking-tight text-[96px] md:text-[140px] lg:text-[180px] text-left">
                      ELIRA BY SONIRU.
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-white/85 max-w-[560px] text-left">
                      Luxury Space Curation & Professional Organizing
                    </p>
                  </div>
                </div>
                {/* Nested: Content row with text and image */}
                <div className="w-full flex flex-col items-left justify-center animate-slideInUp px-8 sm:px-10 md:px-16 lg:px-20 mt-6 md:mt-10 gap-6">
                  {/* Text block: Hero description and button */}
                  <div className="w-full text-white font-3 flex flex-col items-left justify-center gap-6">
                    {/* Nested: Consultation button */}
                    <Link
                      href="/bookings"
                      className="relative isolate overflow-hidden rounded-2xl px-10 py-4 text-base text-white/90 bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_14px_36px_rgba(0,0,0,0.45)] hover:bg-white/14 hover:border-white/30 transition-colors before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/22 before:via-white/10 before:to-white/0 before:pointer-events-none after:absolute after:inset-[1px] after:rounded-[calc(1rem-1px)] after:ring-1 after:ring-white/10 after:pointer-events-none w-full max-w-[520px] text-center"
                    >
                      Book Your Consultation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollSection>

        {/* About Us section */}
        <ScrollSection
          id="about-us"
          className="w-full relative bg-background overflow-y-auto flex flex-col gap-8 md:gap-5 items-start justify-center box-border text-left text-coffee font-3 py-5 md:py-20 pb-10 px-5 md:px-20"
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
              className="w-full md:w-1/2 rounded-2xl md:h-1/4 object-cover"
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
          
        </ScrollSection>
{/* Nested: Meet the Founder section */}
          <ScrollSection
            as="div"
            className="py-10 md:py-20 pb-10 px-5 md:px-20 bg-coffee w-full flex flex-col md:flex-row justify-center gap-8 md:gap-20 text-white"
          >
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
                  Over time, organizing started feeling like a secret
                  superpower. I learned that when you walk into a space
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
            <div className="mt-6 w-full md:w-1/2 rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover grayscale scale-120 object-top"
                width={594}
                height={154}
                alt=""
                src="/founder-new.jpg"
              />
            </div>
        </ScrollSection>
        {/* Our Services section */}
        <ScrollSection
          id="our-services"
          className="text-left text-xl py-10 md:py-20 text-coffee font-3 flex flex-col gap-5 md:gap-10 bg-background px-5 md:px-20 lg:px-20"
        >
          {/* Nested: Our Services header row */}
          <div className="flex flex-row justify-between ">
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
          <div className="flex flex-col md:flex-row-reverse justify-between gap-8 md:gap-16 lg:gap-20">
            <div className="flex flex-col font-3 text-2xl justify-between w-full md:text-3xl lg:text-3xl">
              <div className="self-stretch mb-6 border-t-[0.65px] border-black flex flex-row gap-4 w-full">
                <div className="mt-6 opacity-40 inline-flex justify-start items-start">
                  <div className="justify-start text-stone-500 text-2xl font-normal font-3 leading-8">
                    01
                  </div>
                </div>
                <div className="w-full mt-6 ">
                  <div className="w-full text-stone-800 text-2xl font-normal font-3 leading-8">
                    Professional Organisation{" "}
                  </div>
                </div>
              </div>
              <div className="self-stretch mb-6 border-t-[0.65px] border-black flex flex-row gap-4 w-full">
                <div className="mt-6 opacity-40 inline-flex justify-start items-start">
                  <div className="justify-start text-stone-500 text-2xl font-normal font-3 leading-8">
                    02
                  </div>
                </div>
                <div className="w-full mt-6 ">
                  <div className="w-full text-stone-800 text-2xl font-normal font-3 leading-8">
Space / Visual Transformation                  </div>
                </div>
              </div>
               <div className="self-stretch mb-6 border-t-[0.65px] border-black flex flex-row gap-4 w-full">
                <div className="mt-6 opacity-40 inline-flex justify-start items-start">
                  <div className="justify-start text-stone-500 text-2xl font-normal font-3 leading-8">
                    03
                  </div>
                </div>
                <div className="w-full mt-6 ">
                  <div className="w-full text-stone-800 text-2xl font-normal font-3 leading-8">
Move-In Organisation                </div>
                </div>
              </div>
 <div className="self-stretch mb-6 border-t-[0.65px] border-black flex flex-row gap-4 w-full">
                <div className="mt-6 opacity-40 inline-flex justify-start items-start">
                  <div className="justify-start text-stone-500 text-2xl font-normal font-3 leading-8">
                    04
                  </div>
                </div>
                <div className="w-full mt-6 ">
                  <div className="w-full text-stone-800 text-2xl font-normal font-3 leading-8">
Virtual Atelier                </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between w-full gap-8 md:gap-10 text-xl md:text-2xl">
              {/* Image: Services image */}
              <Image
                className="w-full rounded-2xl object-cover h-auto"
                width={621}
                height={387}
                alt=""
                src="/img6.jpg"
              />
              <p>
                We create systems that would prevent future clutter. The kind
                that makes a space feel light, breathable, and easy to maintain.
              </p>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection
          id="our-process"
          className="bg-coffee px-5 md:px-20 xl:h-full py-10 lg:py-20"
        >
          {/* Nested: Our Process header */}
          <div className="flex flex-row justify-between ">
            {/* Text block: Heading */}
            <h1 className="font-1 text-5xl md:text-6xl lg:text-[128px] leading-tight text-brass">
              OUR PROCESS
            </h1>
            {/* Text block: Arrow */}
            <h1 className="font-1 text-5xl lg:text-[128px] leading-tight text-white">
              ←
            </h1>
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

            <div className="flex flex-col h-full items-start gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline ">
                2. Declutter & Sort
              </h1>
              <p className="text-white font-3 text-xl">
                We edit and sort your items with intention, keeping what serves
                you and letting go of what no longer fits your lifestyle.
              </p>
            </div>

            <div className="flex flex-col h-full items-start gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline ">
                3. Organize & Style
              </h1>
              <p className="text-white font-3 text-xl">
                We create functional systems and elevate the look and feel so
                your space is both beautiful and easy to maintain.
              </p>
            </div>

            <div className="flex flex-col h-full items-start gap-[9px]">
              <h1 className="text-brass font-2 text-xl md:text-2xl hover:underline ">
                4. Maintenance & Support
              </h1>
              <p className="text-white font-3 text-xl">
                We hand over clear routines and guidance so your new system
                stays effortless long after we’re done.
              </p>
            </div>
          </div>
        </ScrollSection>

        {/* Our Projects section */}
        <ScrollSection
          id="our-projects"
          className="hidden text-left py-20 text-maroon flex-col gap-8 md:gap-12 lg:gap-20 md:px-20 lg:px-40"
        >
          {/* Nested: Our Projects header row */}
          <div className="flex flex-row justify-between">
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
        </ScrollSection>

        {/* Testimonials section */}
        <ScrollSection
          id="testimonials"
          className="h-full text-left pt-20 flex flex-col-reverse md:flex-row gap-8 px-5 md:px-20 lg:px-20"
        >
          {/* Nested: Carousel container */}
          {/* <div className="w-full flex flex-col justify-start">
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
                        prev === 0 ? carouselImages.length - 1 : prev - 1,
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
                        prev === carouselImages.length - 1 ? 0 : prev + 1,
                      )
                    }
                    aria-label="Next Slide"
                  >
                    →
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
            <div className="w-full relative grid">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`col-start-1 row-start-1 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="lg:px-7 xl:px-10 h-full">
                    <div className="bg-white flex flex-col gap-6 items-start h-full w-full rounded-[24px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.05),0px_8px_10px_0px_rgba(0,0,0,0.05)] py-8 px-8">
                      <div className="flex gap-1 items-start w-full">
                        {Array.from({ length: 5 }).map((_, starIndex) => (
                          <StarIcon
                            key={starIndex}
                            className="w-5 h-5 text-brass"
                          />
                        ))}
                      </div>
                      <div className="w-full flex-1">
                        <p className="font-3 text-coffee text-[20px] leading-[32.5px] whitespace-pre-wrap">
                          {`"${testimonial.text}"`}
                        </p>
                      </div>
                      <div className="w-full flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="font-2 text-coffee text-[20px] leading-[28px]">
                            {testimonial.name}
                          </p>
                          <p className="font-3 text-[16px] leading-[24px] text-coffee/60">
                            {testimonial.role ?? testimonial.location}
                          </p>
                        </div>
                        <p className="font-3 leading-none whitespace-pre-wrap">
                          <span className="text-brass text-[24px] leading-[32px]">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-coffee/30 text-[18px] leading-[28px]">
                            {` / ${String(testimonials.length).padStart(2, "0")}`}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollSection>

        {/* Consultation booking section */}
        <ScrollSection className="hidden bg-coffee h-full my-10 md:my-20 px-5 md:px-10 lg:px-30 py-10 md:py-20 flex-col gap-5 mx-5 md:mx-10 lg:mx-20">
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
        </ScrollSection>
      </main>

      {/* Contact Us section */}
      <ScrollSection
        id="contact"
        className="w-full h-full bg-[url('/img1.jpg')] bg-cover mt-20 md:mt-28 px-5 md:px-10 lg:px-20 py-10 md:py-20"
      >
        <div className="w-full max-w-[1120px] mx-auto rounded-[40px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.2)] overflow-hidden relative">
          <Image
            src="/img1.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 1120px"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-[linear-gradient(105.583deg,rgba(107,12,12,0.98)_0%,rgba(107,12,12,0.96)_50%,rgba(50,43,33,0.98)_100%)]" />

          <div className="relative z-10 w-full px-8 py-10 md:p-12 font-3 text-white grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="font-1 text-[40px] leading-[36px] tracking-[-1px]">
                  <p>GET IN</p>
                  <p>TOUCH</p>
                </div>
                <div className="h-1 w-20 bg-brass" />
              </div>

              <p className="text-[18px] leading-[29.25px] text-white/80 max-w-[34ch]">
                Have a project in mind or need expert guidance? We’d love to
                hear from you. Reach out to us for inquiries, collaborations or
                consultations.
              </p>

              <div className="flex flex-col gap-6 pt-2">
                <a
                  href="tel:+2347045313373"
                  className="flex items-center gap-4"
                >
                  <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-[18px] leading-[28px]">
                    +234 704 5313 373
                  </span>
                </a>
                <a
                  href="mailto:tryelira@gmail.com"
                  className="flex items-center gap-4"
                >
                  <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </span>
                  <span className="text-[18px] leading-[28px]">
                    tryelira@gmail.com
                  </span>
                </a>
              </div>
            </div>

            <div className="w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="firstName"
                      className="text-[14px] leading-[20px] tracking-[0.35px] uppercase text-white/90"
                    >
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      className="w-full h-[60px] rounded-[16px] bg-white/5 border border-white/10 px-5 text-[16px] text-white placeholder:text-white/40 outline-none"
                      type="text"
                      {...register("firstName")}
                      required
                      placeholder="Enter first name"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="lastName"
                      className="text-[14px] leading-[20px] tracking-[0.35px] uppercase text-white/90"
                    >
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      className="w-full h-[60px] rounded-[16px] bg-white/5 border border-white/10 px-5 text-[16px] text-white placeholder:text-white/40 outline-none"
                      type="text"
                      {...register("lastName")}
                      required
                      placeholder="Enter last name"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="phone"
                      className="text-[14px] leading-[20px] tracking-[0.35px] uppercase text-white/90"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="w-full h-[60px] rounded-[16px] bg-white/5 border border-white/10 px-5 text-[16px] text-white placeholder:text-white/40 outline-none"
                      type="tel"
                      {...register("phone")}
                      required
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="email"
                      className="text-[14px] leading-[20px] tracking-[0.35px] uppercase text-white/90"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      className="w-full h-[60px] rounded-[16px] bg-white/5 border border-white/10 px-5 text-[16px] text-white placeholder:text-white/40 outline-none"
                      type="email"
                      {...register("email")}
                      required
                      placeholder="Enter email address"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label
                      htmlFor="message"
                      className="text-[14px] leading-[20px] tracking-[0.35px] uppercase text-white/90"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      className="w-full min-h-[156px] rounded-[16px] bg-white/5 border border-white/10 px-5 py-4 text-[16px] leading-[24px] text-white placeholder:text-white/40 outline-none resize-none"
                      {...register("message")}
                      required
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-[68px] rounded-[16px] bg-brass text-white shadow-[0px_10px_15px_0px_rgba(0,0,0,0.2),0px_4px_6px_0px_rgba(0,0,0,0.2)] flex items-center justify-center gap-3 text-[18px] leading-[28px] ${
                    loading
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:opacity-95 transition"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Footer section */}
      <footer className="w-full md:px-40 py-5 bg-coffee flex flex-col md:flex-row justify-center gap-2 md:justify-between items-center font-3 text-white text-xl">
        <div className="">All Rights Reserved.</div>
        <div className="">© 2025 Elira Elira By Soniru</div>
      </footer>
    </div>
  );
}
