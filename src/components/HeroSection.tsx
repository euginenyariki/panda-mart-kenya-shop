
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Gift } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-panda-gray via-white to-panda-gray py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0 animate-slide-in">
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-panda-red">Welcome to</span>
              <br />
              <span className="text-panda-black">Panda Mart</span>
              <br />
              <span className="text-panda-red">Kenya</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your one-stop destination for everything you need! From fresh groceries to home appliances, 
              we've got you covered with the best prices in Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-panda-red hover:bg-red-700 text-white px-8 py-3 text-lg">
                <ShoppingBag className="mr-2" size={24} />
                Shop Now
              </Button>
              <Button variant="outline" className="border-panda-black text-panda-black hover:bg-panda-black hover:text-white px-8 py-3 text-lg">
                <Gift className="mr-2" size={24} />
                View Deals
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-panda-red to-red-700 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <div className="text-9xl animate-panda-wave">🐼</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-yellow-400 text-panda-black px-4 py-2 rounded-full font-bold animate-panda-bounce">
                KES Prices!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
