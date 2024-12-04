import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-10">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-sm">We provide high-quality products for our customers.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <ul className="text-sm">
              <li>Email: info@example.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Main St, City, Country</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 text-sm py-8">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

