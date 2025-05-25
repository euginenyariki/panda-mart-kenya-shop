
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CategoriesSection = () => {
  const categories = [
    { name: 'Snacks & Food', icon: '🍿', description: 'Fresh snacks and food items', path: '/snacks-food' },
    { name: 'Home Appliances', icon: '🏠', description: 'Modern home appliances', path: '/home-appliances' },
    { name: 'Electronics', icon: '📱', description: 'Latest electronic gadgets', path: '/electronics' },
    { name: 'Home Decor', icon: '🎨', description: 'Beautiful home decorations', path: '/home-decor' },
    { name: 'Kitchen Utensils', icon: '🍴', description: 'Complete kitchen sets', path: '/kitchen-utensils' },
    { name: 'Toys', icon: '🧸', description: 'Fun toys for all ages', path: '/toys' },
    { name: 'Stationery', icon: '📚', description: 'Office and school supplies', path: '/stationery' },
    { name: 'Party Items', icon: '🎉', description: 'Everything for celebrations', path: '/party-items' },
    { name: 'Gym Equipment', icon: '🏋️', description: 'Fitness and gym gear', path: '/gym-equipment' },
    { name: 'Bedding', icon: '🛏️', description: 'Comfortable bedding sets', path: '/bedding' },
    { name: 'Clothing', icon: '👕', description: 'Fashion for everyone', path: '/clothing' },
    { name: 'Artificial Flowers', icon: '🌸', description: 'Beautiful artificial flowers', path: '/artificial-flowers' },
    { name: 'Pet Accessories', icon: '🐕', description: 'Everything for your pets', path: '/pet-accessories' },
    { name: 'Carpets', icon: '🟫', description: 'Premium carpets and rugs', path: '/carpets' },
    { name: 'Furniture', icon: '🪑', description: 'Quality furniture pieces', path: '/furniture' },
    { name: 'Car Spare Parts', icon: '🚗', description: 'Genuine car parts', path: '/car-spare-parts' }
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-panda-black mb-4">
            Shop by <span className="text-panda-red">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of products across all categories. 
            Quality items at unbeatable prices!
          </p>
          <div className="mt-4 text-4xl animate-panda-bounce">🐼</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.name} to={category.path}>
              <Card 
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-panda-red h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="text-4xl mb-4 group-hover:animate-panda-bounce">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-panda-black mb-2 group-hover:text-panda-red transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
