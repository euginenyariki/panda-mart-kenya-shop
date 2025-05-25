
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CategoriesSection = () => {
  const categories = [
    { name: 'Snacks & Food', icon: '🍿', description: 'Fresh snacks and food items' },
    { name: 'Home Appliances', icon: '🏠', description: 'Modern home appliances' },
    { name: 'Electronics', icon: '📱', description: 'Latest electronic gadgets' },
    { name: 'Home Decor', icon: '🎨', description: 'Beautiful home decorations' },
    { name: 'Kitchen Utensils', icon: '🍴', description: 'Complete kitchen sets' },
    { name: 'Toys', icon: '🧸', description: 'Fun toys for all ages' },
    { name: 'Stationery', icon: '📚', description: 'Office and school supplies' },
    { name: 'Party Items', icon: '🎉', description: 'Everything for celebrations' },
    { name: 'Gym Equipment', icon: '🏋️', description: 'Fitness and gym gear' },
    { name: 'Bedding', icon: '🛏️', description: 'Comfortable bedding sets' },
    { name: 'Clothing', icon: '👕', description: 'Fashion for everyone' },
    { name: 'Artificial Flowers', icon: '🌸', description: 'Beautiful artificial flowers' },
    { name: 'Pet Accessories', icon: '🐕', description: 'Everything for your pets' },
    { name: 'Carpets', icon: '🟫', description: 'Premium carpets and rugs' },
    { name: 'Furniture', icon: '🪑', description: 'Quality furniture pieces' },
    { name: 'Car Spare Parts', icon: '🚗', description: 'Genuine car parts' }
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
            <Card 
              key={category.name} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-panda-red"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
