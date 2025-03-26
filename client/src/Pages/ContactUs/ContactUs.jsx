import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import contactImg from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ContactUs = () => {
  return (
    <div>
      <Cover title="Contact Us" img={contactImg} />

      {/* Location Section */}
      <div className="mt-28">
        <SectionTitle heading="our location" subHeading="---Visit Us---" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 text-center">
        <div className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg shadow-md w-60">
          <FaPhoneAlt size={24} />
          <h3 className="mt-2 font-medium">PHONE</h3>
          <p>+88 0123 45 67 890</p>
        </div>
        <div className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg shadow-md w-60">
          <FaMapMarkerAlt size={24} />
          <h3 className="mt-2 font-medium">ADDRESS</h3>
          <p>+88 0123 45 67 890</p>
        </div>
        <div className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg shadow-md w-60">
          <FaClock size={24} />
          <h3 className="mt-2 font-medium">WORKING HOURS</h3>
          <p>Mon - Fri: 09:00 - 20:00</p>
          <p>Sat - Sun: 09:00 - 21:00</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-16">
        <SectionTitle
          heading="contact form"
          subHeading="---Send us a Message---"
        />
      </div>
      <div className="bg-gray-100 p-10 mb-56 shadow-md mx-auto lg:w-[1000px] md:w-[700px]">
        <form className="flex flex-col gap-4">
          <div className="flex flex-row gap-5 pt-10">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 border rounded w-full"
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="pt-7">
            <input
              type="text"
              placeholder="Enter your phone number"
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="pt-7">
            <textarea
              placeholder="Write your message here"
              className="p-2 border rounded w-full h-48"
              required
            ></textarea>
          </div>
          <div className="flex justify-right p-3 w-48 bg-white border-x-2">
            <input type="checkbox" required className="mr-2" />
            <label className="font-semibold">I am not a robot</label>
          </div>
          <button className="bg-yellow-500 w-48 mt-12 mx-auto text-white p-2 rounded shadow-md hover:bg-green-500 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
