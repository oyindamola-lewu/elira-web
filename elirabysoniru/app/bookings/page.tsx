"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import NavbarDark from "../components/navbar-dark";
import emailjs from "@emailjs/browser";

// import Image from "next/image";

type FormData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  service: string;
  date: string;
  time: string;
};

export default function Bookings() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // For debugging

    emailjs
      .send(
        "service_k41pckf", // replace with your EmailJS service ID
        "template_qc5yuou", // replace with your EmailJS template ID
        {
          fullName: data.firstName + " " + data.lastName,
          email: data.email,
          date: data.date,
          time: data.time,
          agreement: "No",
        },
        '6uQe686K3U7R7TzsR' // replace with your EmailJS public key
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your booking was submitted successfully!");
        reset(); // Clear the form after success
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className="">
      <main className="text-2xl overflow-auto">
        <div className="sticky">
            <NavbarDark />
        </div>
        <section id="bookings" className="w-full h-full bg-[url('/contactbg.jpg')] bg-cover px-5 md:px-10 lg:px-20 py-10 md:py-20">
          <div className="w-full h-full md:h-[732px] bg-coffee py-10 flex flex-col md:flex-row gap-5 md:gap-10 font-3 text-white">
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-10 px-5 md:px-10 lg:px-20 py-10 md:py-20">
              <div className="flex flex-col justify-start gap-5 ">
                <h1 className="font-2 text-3xl md:text-4xl lg:text-[48px] w-2/3">Book a Consultation</h1>
                <p className="font-3 text-base md:text-lg lg:text-xl">Kindly select the time and date you’d like to book your consultation for, and the service you’re interested in. See the calendar below for available slots.</p>
                <div className=" h-full rounded-lg shadow-md flex justify-center items-center ">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=b6736b821d7c6d715db459c1da5d528d2b098e776f6eeb8dc83abcd325860d82%40group.calendar.google.com&ctz=Africa%2FLagos"
              style={{ border: 0 }}
              width="500"
              height="300"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-base md:text-lg lg:text-xl px-5 md:px-10 lg:px-20" >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 items-start">
                <div className="">
                  <label htmlFor="firstName" className="block mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    {...register("firstName")}
                    placeholder="First Name"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div> 
                <div className="">
                  <label htmlFor="lastName" className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    placeholder="Last Name"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
                <div className="">
                  <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    {...register("phoneNumber")}
                    placeholder="Phone Number"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
                <div className="">
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="Email"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
                <div className="">
                  <label htmlFor="date" className="block mb-1">Date</label>
                  <input
                    type="date"
                    id="date"
                    {...register("date")}
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
                <div className="">
                  <label htmlFor="time" className="block mb-1">Time</label>
                  <input
                    type="time"
                    id="time"
                    {...register("time")}
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="service" className="block mb-1">Service</label>
                <select
                  id="service"
                  {...register("service")}
                  className="w-full h-[30px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Home Decluttering">Home Decluttering</option>
                  <option value="Office Decluttering">Office Decluttering</option>
                  <option value="Space Planning">Space Planning</option>
                  <option value="Personal Organization">Personal Organization</option>
                  <option value="Virtual Consultation">Virtual Consultation</option>
                </select>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="text-white text-sm md:text-base lg:text-lg py-[12px] bg-brass px-10 md:px-20 lg:px-40 flex justify-center w-full"
                >
                  Submit
                </button>
              </div>
            </form>
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
