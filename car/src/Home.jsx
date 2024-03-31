import React, { useEffect, useState } from 'react';
import c1 from '/assets/c1.svg';
import c2 from '/assets/c2.svg';
import c3 from '/assets/c4.svg';
import c4 from '/assets/c5.svg';
import c5 from '/assets/c6.svg';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import './App.css'
import { FaAngleLeft } from "react-icons/fa6";
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="h-full w-full flex flex-col justify-center items-center" style={{ backgroundColor: images[currentIndex].backgroundColor }}>
      <span className='text-7xl absolute top-36 left-36 uppercase rubik'>{images[currentIndex].title}</span>
      <div className='absolute top-36 right-56 flex gap-4'>
        <button className='px-4 py-2 border border-black rounded-full shadow-md'>Buy Now</button>
        <button className='px-4 py-2 border border-black rounded-full shadow-md'>View Details</button>
      </div>
      <AnimatePresence mode='wait'>
        <motion.div 
          key={currentIndex}
          initial={{ width:0 }}
          animate={{ width:"70vw" }} 
          transition={{ duration: 0.5 }}
          className="image-container"
        >
          <motion.img
            className="w-[70vw] h-screen"
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
          />
        </motion.div>
      </AnimatePresence>
      <img className='absolute bottom-10 w-full' src="/assets/trail.svg" alt="" />
      <button className=" p-4 absolute bottom-14 opacity-0 right-[32vw]" onClick={goToPreviousSlide} title='previous'><FaAngleLeft /></button>
      <button className="p-4 absolute bottom-16 opacity-0 right-[29vw]" onClick={goToNextSlide} title='next'><FaAngleLeft /></button>
    <About />
    </div> 
    </>
  );
};

const Home = () => {
  const images = [
    { title: "Leonardo x", src: c1, backgroundColor: '#D9463A' },
    { title: "Zindago r51", src: c2, backgroundColor: '#474747' },
    { title: "Xanziro oo7", src: c3, backgroundColor: 'green' },
    { title: "Ferrari z1 x3", src: c4, backgroundColor: '#B22DE8' },
    { title: "Mclearen P1", src: c5, backgroundColor: '#F9DC2C' }
  ];

  return (
    <div className="carousel">
      <Carousel images={images} />
    </div>
  );
};

export default Home;
