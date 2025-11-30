import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Man from '../../../public/images/ManStanding.jpg'
import Logo from '../../../public/images/logo.png'
import { FaEnvelopeOpenText } from "react-icons/fa";

const Footer = () => {
  const bgImage = {
    backgroundImage: `url(${Man.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "#02170b"
  }
  return (
    <footer style={bgImage} className="relative bg-cover  bg-center text-white py-16 px-4 md:px-10 lg:px-20" >
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {/* Left - Newsletter Subscription */}


        {/* Middle - Contact Information */}
        <div className="flex flex-col space-y-6 w-full">
          <div>
            <h4 className="text-green-300 text-xl font-semibold">General Enquiries</h4>
            <p className="text-lg font-medium">support@example.com</p>
          </div>
          <div>
            <h4 className="text-green-300 text-xl font-semibold">Give us a call</h4>
            <p className="text-lg font-medium">+4800 45 678 900</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-xl">Useful Links</h4>
              <ul className="text-sm opacity-80 space-y-1 py-4 text-lg">
                <li>About Us</li>
                <li>Why Choose Us</li>
                <li>Meet Our Team</li>
                <li>Contact Us</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-xl">Explore</h4>
              <ul className="text-sm opacity-80 space-y-1 py-4 text-lg">
                <li>What We Offer</li>
                <li>Latest News</li>
                <li>Project</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Logo and Social Media */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center  space-x-2">
            <Image className="w-44" src={Logo} alt="Willowood Logo" width={100} height={40} />
            {/* <h3 className="text-2xl font-bold">Willowood</h3> */}
          </div>
          <p className="text-sm opacity-80 text-lg">
            We carry out our mission based on the values of impeccable business reputation,
            social responsibility, respect for human dignity, and synergetic, result-oriented partnerships.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white text-xl"><FaFacebookF /></a>
            <a href="#" className="text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-white text-xl"><FaLinkedinIn /></a>
            <a href="#" className="text-white text-xl"><FaInstagram /></a>
          </div>
        </div>

        <div className="bg-green-700 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelopeOpenText size={40} />
              <h3 className="text-xl font-semibold">Sign Up To Our Newsletters</h3>
            </div>
            <p className="text-sm opacity-80">
              Subscribe to our Newsletter & Event right now to be updated.
            </p>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email address*"
                className="w-full px-4 py-3 text-gray-900 rounded-full focus:outline-none"
              />
              <button className="w-full bg-yellow-400 text-gray-900 py-3 rounded-full mt-4 font-medium flex items-center justify-center space-x-2">
                <span>Subscribe</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Image */}
      {/* <div className="absolute top-0 right-10 hidden lg:block">
        <Image src="/images/farmer.png" alt="Farmer" width={150} height={200} />
      </div> */}

      {/* Copyright */}
      <div className="mt-12 text-center text-lg md:text-md opacity-80">
        &copy; Copyright 2025 <span className="text-green-300">Willowood</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
