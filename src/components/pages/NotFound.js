import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="pt-40 pb-20 px-4 flex flex-col items-center justify-center text-center min-h-[60vh]">
            <h1 className="font-montserrat font-black text-6xl text-[#1A4D2E] mb-4">404</h1>
            <h2 className="font-montserrat font-bold text-2xl text-gray-800 mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-[#F4B942] text-[#1A4D2E] rounded-xl font-bold hover:scale-105 transition-transform duration-300"
            >
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
