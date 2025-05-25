import React from 'react';
import { Home, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-panda-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-panda-bounce">
                <div className="text-2xl">🐼</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  <span className="text-panda-red">Panda</span> Mart Kenya
                </h3>
                <p className="text-gray-300">Your trusted shopping partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Panda Mart Kenya is your one-stop destination for quality products at affordable prices. 
              We serve customers across Kenya with fast delivery and excellent customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-panda-red transition-colors">
                <Home size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-panda-red transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-panda-red">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#categories" className="text-gray-300 hover:text-white transition-colors">Categories</a></li>
              <li><a href="#deals" className="text-gray-300 hover:text-white transition-colors">Special Deals</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-panda-red">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home Appliances</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Clothing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Food & Snacks</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Panda Mart Kenya. All rights reserved. | Made with ❤️ in Kenya
          </p>
          <div className="mt-2 text-2xl animate-panda-wave">🐼</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
