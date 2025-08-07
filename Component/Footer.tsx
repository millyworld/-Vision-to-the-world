export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold mb-2">Premium Experiences</h4>
          <ul className="space-y-1"><li>About Our Story</li><li>Arctic Wildlife</li><li>Nordic Tours</li><li>Luxury Stories</li><li>Reviews</li><li>Journey Planning</li></ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p>+20 114 371 9505<br />visiontothew@gmail.com</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Concierge</h4>
          <p>24/7 Premium Support<br />Dedicated luxury travel specialists</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Payments</h4>
          <button className="mb-2 bg-blue-600 py-1 px-3 rounded">Pay with PayPal</button><br />
          <button className="bg-blue-500 py-1 px-3 rounded">Pay with Cash App</button>
        </div>
      </div>
      <div className="mt-10 text-center text-sm">© 2024 Vision to the World • All rights reserved</div>
    </footer>
  );
}
