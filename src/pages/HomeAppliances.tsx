
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HomeAppliances = () => {
  const products = [
    {
      id: 1,
      name: 'Refrigerator 200L',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300',
      description: 'Energy efficient refrigerator with modern design'
    },
    {
      id: 2,
      name: 'Microwave Oven',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300',
      description: 'Digital microwave with multiple cooking settings'
    },
    {
      id: 3,
      name: 'Washing Machine',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300',
      description: 'Automatic washing machine with 7kg capacity'
    },
    {
      id: 4,
      name: 'Air Conditioner',
      price: 40000,
      image: 'https://images.unsplash.com/photo-1631700236775-6b2e7e8af0b3?w=300',
      description: 'Split AC unit with remote control and energy saving'
    },
    {
      id: 5,
      name: 'Electric Kettle',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300',
      description: 'Stainless steel electric kettle with auto shut-off'
    },
    {
      id: 6,
      name: 'Blender',
      price: 4500,
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300',
      description: 'High-speed blender for smoothies and cooking'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-panda-red hover:text-red-700 transition-colors mb-4">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-panda-black mb-2">
              <span className="text-panda-red">Home Appliances</span> Collection
            </h1>
            <p className="text-gray-600 text-lg">Modern appliances for your home</p>
            <div className="text-3xl animate-panda-bounce mt-4">🐼🏠</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-panda-red"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-panda-red text-white px-2 py-1 rounded-full text-sm font-bold">
                      KES {product.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-panda-black mb-2 group-hover:text-panda-red transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.description}
                    </p>
                    <Button className="w-full bg-panda-red hover:bg-red-700 text-white">
                      <ShoppingCart className="mr-2" size={16} />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeAppliances;
