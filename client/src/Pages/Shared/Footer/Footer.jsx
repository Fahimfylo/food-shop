import React from "react";

const Footer = () => {
  return (
    <footer className="text-white pt-10 w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
        {/* Contact Us Section */}
        <div className="bg-gray-800 py-8 px-24">
          <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
          <p>123 ABS Street, Uni 21, Bangladesh</p>
          <p>+88 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* Follow Us Section */}
        <div className="bg-gray-700 py-8 px-24">
          <h3 className="text-lg font-semibold mb-4">Follow US</h3>
          <p>Join us on social media</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-white hover:text-gray-400"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="bg-black text-center py-4">
        <p>Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
