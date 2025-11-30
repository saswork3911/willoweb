import React from 'react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl md:text-6xl text-[#1A4D2E] mb-8">
                Contact Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
                We`d love to hear from you. Please reach out to us for any inquiries or support.
            </p>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 max-w-xl">
                <p className="font-semibold text-[#1A4D2E] mb-2">Corporate Office:</p>
                <p className="text-gray-600 mb-4">
                    Willowood Chemicals Pvt Ltd.<br />
                    409, 4th Floor, Salcon Aurum, District Centre,<br />
                    Jasola, New Delhi - 110025, India
                </p>
                <p className="font-semibold text-[#1A4D2E] mb-2">Email:</p>
                <p className="text-gray-600">info@willowood.com</p>
            </div>
        </div>
    );
};

export default Contact;
