
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Rice 5kg',
      price: 850,
      originalPrice: 1000,
      image: '🌾',
      rating: 4.8,
      category: 'Food & Snacks'
    },
    {
      id: 2,
      name: 'Smart TV 43"',
      price: 35000,
      originalPrice: 42000,
      image: '📺',
      rating: 4.9,
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Kitchen Blender',
      price: 4500,
      originalPrice: 6000,
      image: '🍹',
      rating: 4.7,
      category: 'Kitchen Utensils'
    },
    {
      id: 4,
      name: 'Gym Dumbbell Set',
      price: 8500,
      originalPrice: 10000,
      image: '🏋️',
      rating: 4.6,
      category: 'Gym Equipment'
    },
    {
      id: 5,
      name: 'Cotton Bed Sheets',
      price: 2500,
      originalPrice: 3500,
      image: '🛏️',
      rating: 4.8,
      category: 'Bedding'
    },
    {
      id: 6,
      name: 'Car Air Freshener',
      price: 350,
      originalPrice: 500,
      image: '🚗',
      rating: 4.5,
      category: 'Car Accessories'
    }
  ];

  return (
    <section className="py-20 bg-panda-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-panda-black mb-4">
            <span className="text-panda-red">Featured</span> Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out our best-selling items with amazing discounts!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-6xl mb-4 group-hover:animate-panda-bounce">
                    {product.image}
                  </div>
                  <span className="bg-panda-red text-white px-2 py-1 rounded text-xs font-bold">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-panda-black mb-2 group-hover:text-panda-red transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>

                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-panda-red">
                      KES {product.price.toLocaleString()}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      KES {product.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">
                    Save KES {(product.originalPrice - product.price).toLocaleString()}
                  </div>
                </div>

                <Button className="w-full bg-panda-red hover:bg-red-700 text-white">
                  <ShoppingCart className="mr-2" size={16} />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
