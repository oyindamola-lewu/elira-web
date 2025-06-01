"use client";
import { useState } from "react";
import NavbarDark from "../components/navbar-dark";
// import Image from "next/image";

export default function Bookings() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

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
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col justify-center gap-5 text-base md:text-lg lg:text-xl px-5 md:px-10 lg:px-20" >
              <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-8 gap-y-2 items-start">
                <div className="">
                  <label htmlFor="firstName" className="block mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div> 
                <div className="">
                  <label htmlFor="lastName" className="block mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
                <div className="">
                  <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
                <div className="">
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full h-[24px] bg-white text-black placeholder-gray-600 outline-none border-none text-lg px-2 py-4"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="service" className="block mb-1">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
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
