import { useEffect } from "react";
import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';


const Pricing = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 resume template",
        "Basic AI suggestions",
        "PDF download",
        "Standard support"
      ],
      popular: false,
      buttonText: "Get Started Free",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Everything you need to get hired",
      features: [
        "50+ premium templates",
        "Advanced AI writing",
        "ATS optimization",
        "Unlimited downloads",
        "Cover letter builder",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700"
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Brand customization",
        "Analytics dashboard",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  

  return ( 
    <section id="pricing" className="py-16 bg-white">
          <div className="px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Choose Your <span className="text-blue-600">Plan</span>
              </h2>
              <p className="text-lg text-gray-600">
                Start free, upgrade when you need more powerful features
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-blue-500 shadow-xl' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-500 ml-1">/{plan.period}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${plan.buttonStyle} hover:scale-105`}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm">
                 No credit card required • Cancel anytime
              </p>
            </div>
          </div>
          </div>
        </section>

    );
};

export default Pricing;