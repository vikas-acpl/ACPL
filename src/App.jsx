import React, { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import SmoothScroll from 'smooth-scroll';

const App = () => {

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
    });
    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
