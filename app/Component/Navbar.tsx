export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">VISION TO THE WORLD</div>
        <div className="space-x-6 hidden md:block">
          {["Home", "About", "Wildlife", "Culture", "Stories", "Reviews", "Plan Safari"].map((link) => (
            <a key={link} href="#" className="text-gray-700 hover:text-black">
              {link}
            </a>
          ))}
        </div>
        <div className="space-x-2">
          <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">Update Booking</button>
          <button className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700">Book Now</button>
        </div>
      </div>
    </nav>
  );
}
