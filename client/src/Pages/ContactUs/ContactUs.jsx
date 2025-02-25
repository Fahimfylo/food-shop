import React from "react";
import contactImg from "../../assets/contact/banner.jpg";
import Cover from "../Shared/Cover/Cover";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ContactUs = () => {
  return (
    <div>
      <Cover title='Contact Us' img={contactImg}>
      </Cover>
      <div className="mt-28">
        <SectionTitle heading='our location' subHeading='---Visit Us---'></SectionTitle>
      </div>
      <div className="text-center">
        <h1>Location Cards here</h1>
      </div>
      <div>
        <SectionTitle heading='contact form' subHeading='---Send us a Message---'></SectionTitle>
      </div>
      <div className="text-center">
        <h1>Form here</h1>
      </div>
    </div>
  );
};

export default ContactUs;
