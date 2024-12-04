import React from 'react';
import servicesData from './../api/serviceData.json';

const Services = () => {
  return (
    <div className="container mx-auto px-12 bg-blue-200 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid  sm:grid-cols-3 grid-cols-2 gap-8">
        {servicesData.map((service) => (
          <div key={service.id} className="bg-white shadow-lg rounded-lg p-6">
            {/* <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" /> */}
            <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <p className="text-lg font-bold text-blue-600">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
