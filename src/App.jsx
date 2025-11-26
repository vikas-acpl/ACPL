import React, { useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import SmoothScroll from 'smooth-scroll';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const App = () => {

  useEffect(() => {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
      easing: 'easeInOutCubic',
      offset: 150
    });
    return () => scroll.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
