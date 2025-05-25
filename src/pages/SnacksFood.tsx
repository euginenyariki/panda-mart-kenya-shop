
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SnacksFood = () => {
  const products = [
    {
      id: 1,
      name: 'Potato Chips Variety Pack',
      price: 350,
      image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300',
      description: 'Crispy potato chips in multiple flavors'
    },
    {
      id: 2,
      name: 'Chocolate Cookies',
      price: 250,
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=300',
      description: 'Sweet chocolate chip cookies perfect for snacking'
    },
    {
      id: 3,
      name: 'Mixed Nuts',
      price: 800,
      image: 'https://images.unsplash.com/photo-1576251138431-9e62bc94ae45?w=300',
      description: 'Premium roasted mixed nuts for healthy snacking'
    },
    {
      id: 4,
      name: 'Energy Drinks Pack',
      price: 600,
      image: 'https://images.unsplash.com/photo-1544545900-7e1c9c25e58e?w=300',
      description: 'Refreshing energy drinks to boost your day'
    },
    {
      id: 5,
      name: 'Instant Noodles',
      price: 120,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300',
      description: 'Quick and delicious instant noodles'
    },
    {
      id: 6,
      name: 'Fruit Juice Box',
      price: 180,
      image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=300',
      description: 'Fresh fruit juice in convenient packaging'
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
              <span className="text-panda-red">Snacks & Food</span> Collection
            </h1>
            <p className="text-gray-600 text-lg">Delicious snacks and food items</p>
            <div className="text-3xl animate-panda-bounce mt-4">🐼🍿</div>
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

export default SnacksFood;
