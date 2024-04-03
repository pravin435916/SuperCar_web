import React from 'react';
import { motion } from 'framer-motion';
import c1 from '/assets/c1.svg';
import c2 from '/assets/c2.svg';
import c3 from '/assets/c4.svg';
function About() {
  const cars = [
    { id: 1, name: 'Lamborghini Huracan', image: c1 },
    { id: 2, name: 'Ferrari 488 GTB', image: c2 },
    { id: 3, name: 'Porsche 911 Turbo S', image: c3 },
  ];

  return (
    <motion.div 
      className='h-full mb-20 w-full flex flex-col justify-center items-center text-white font-mono'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className='text-4xl font-bold mb-4'
      >
        Welcome to Supercar World
      </motion.h1>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-lg text-center'
      >
        We are passionate about delivering the finest supercars to enthusiasts around the globe.
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className='text-lg text-center mt-4'
      >
        Our mission is to provide exceptional service and ensure every client finds their dream car.
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className='text-lg text-center mt-4'
      >
        Explore our collection and let us help you experience the thrill of owning a supercar.
      </motion.p>
      <div className="mt-8">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: 0 }}
          transition={{ delay: 1.2, duration: 1, type: 'spring', stiffness: 100 }}
          className="overflow-hidden"
        >
          <motion.div
            initial={{ x: '100%' }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex"
          >
            {cars.map(car => (
              <motion.div 
                key={car.id} 
                className="mx-4"
                whileHover={{ opacity: 1.1 }}
              >
                <img src={car.image} alt={car.name} className="rounded-lg shadow-lg" />
                <p className="text-lg font-bold mt-2 text-center ">{car.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
