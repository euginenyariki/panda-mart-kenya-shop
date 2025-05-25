
import React, { useState } from 'react';
import { ShoppingCart, Home, Gift, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [cartItems] = useState(0);

  const PandaLogo = () => (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-panda-black animate-panda-bounce">
          <div className="text-2xl">🐼</div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">
          <span className="text-panda-red">Panda</span>
          <span className="text-panda-black"> Mart</span>
        </h1>
        <p className="text-sm text-gray-600">Kenya's Best Supermarket</p>
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-lg border-b-4 border-panda-red sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <PandaLogo />
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="flex items-center gap-2 text-panda-black hover:text-panda-red transition-colors">
              <Home size={20} />
              Home
            </a>
            <a href="#categories" className="text-panda-black hover:text-panda-red transition-colors">
              Categories
            </a>
            <a href="#deals" className="flex items-center gap-2 text-panda-black hover:text-panda-red transition-colors">
              <Star size={20} />
              Deals
            </a>
            <a href="#contact" className="text-panda-black hover:text-panda-red transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="relative bg-panda-red hover:bg-red-700 text-white">
              <ShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-panda-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
