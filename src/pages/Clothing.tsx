
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Clothing = () => {
  const products = [
    {
      id: 1,
      name: 'Men\'s Cotton T-Shirt',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300',
      description: 'Comfortable cotton t-shirt in various colors'
    },
    {
      id: 2,
      name: 'Women\'s Dress',
      price: 2500,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300',
      description: 'Elegant dress perfect for any occasion'
    },
    {
      id: 3,
      name: 'Men\'s Jeans',
      price: 3000,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300',
      description: 'Durable denim jeans with modern fit'
    },
    {
      id: 4,
      name: 'Women\'s Blouse',
      price: 1800,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300',
      description: 'Professional blouse for office wear'
    },
    {
      id: 5,
      name: 'Kids\' School Uniform',
      price: 2200,
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=300',
      description: 'Complete school uniform set for children'
    },
    {
      id: 6,
      name: 'Sports Jacket',
      price: 4000,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300',
      description: 'Water-resistant sports jacket for outdoor activities'
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
              <span className="text-panda-red">Clothing</span> Collection
            </h1>
            <p className="text-gray-600 text-lg">Fashion for the whole family</p>
            <div className="text-3xl animate-panda-bounce mt-4">🐼👕</div>
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

export default Clothing;
