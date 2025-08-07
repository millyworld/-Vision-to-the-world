'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-black dark:text-white">
          VISION TO THE WORLD
        </div>

        <div className="space-x-4 hidden md:flex">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Wildlife", href: "/wildlife" },
            { name: "Culture", href: "/culture" },
            { name: "Stories", href: "/stories" },
            { name: "Reviews", href: "/reviews" },
            { name: "Plan Safari", href: "/plan-safari" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="space-x-2 flex items-center">
          <button
            onClick={() => {
              document.documentElement.classList.toggle('dark');
            }}
            className="py-2 px-3 bg-gray-200 text-black dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Toggle Mode
          </button>
          <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
            Update Booking
          </button>
          <button className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
