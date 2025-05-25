
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Electronics = () => {
  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy Smartphone',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
      description: 'Latest smartphone with advanced camera and long battery life'
    },
    {
      id: 2,
      name: 'Wireless Bluetooth Headphones',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
      description: 'High-quality wireless headphones with noise cancellation'
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
      description: 'Fitness tracking smartwatch with heart rate monitor'
    },
    {
      id: 4,
      name: 'Laptop Computer',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
      description: 'High-performance laptop for work and entertainment'
    },
    {
      id: 5,
      name: 'Power Bank',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1609592043297-7aac240d4144?w=300',
      description: 'Portable charger with fast charging capability'
    },
    {
      id: 6,
      name: 'USB Cable Set',
      price: 800,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
      description: 'Universal charging cables for all devices'
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
              <span className="text-panda-red">Electronics</span> Collection
            </h1>
            <p className="text-gray-600 text-lg">Discover the latest electronic gadgets and devices</p>
            <div className="text-3xl animate-panda-bounce mt-4">🐼📱</div>
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

export default Electronics;
