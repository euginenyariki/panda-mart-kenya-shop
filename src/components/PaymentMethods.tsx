
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

const PaymentMethods = () => {
  const paymentMethods = [
    {
      name: 'M-Pesa Paybill',
      description: 'Pay securely with M-Pesa',
      icon: '📱',
      color: 'bg-green-500'
    },
    {
      name: 'PayPal',
      description: 'International payments made easy',
      icon: '💳',
      color: 'bg-blue-500'
    },
    {
      name: 'Credit/Debit Cards',
      description: 'Visa, Mastercard accepted',
      icon: '💰',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-panda-black mb-4">
            <span className="text-panda-red">Payment</span> Methods
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from multiple secure payment options for your convenience
          </p>
          <div className="mt-4 text-4xl animate-panda-wave">🐼</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <Card 
              key={method.name} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-panda-red"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-panda-bounce`}>
                  <span className="text-2xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-panda-black mb-2 group-hover:text-panda-red transition-colors">
                  {method.name}
                </h3>
                <p className="text-gray-600">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-panda-gray p-6 rounded-lg inline-block">
            <CreditCard className="text-panda-red mx-auto mb-2" size={32} />
            <p className="text-panda-black font-semibold">100% Secure Payments</p>
            <p className="text-gray-600 text-sm">Your payment information is always protected</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
