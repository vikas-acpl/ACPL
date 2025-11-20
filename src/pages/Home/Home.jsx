import React, { Suspense, lazy } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import HeroSection from '../HeroSection/HeroSection';
import Metrics from '../Metrics/Metrics';
import Partners from '../Partners/Partners';
import OurPartners from '../OurPartners/OurPartners';
import Services from '../Services/Services';
import CyberCare from '../CyberCare/CyberCare';
import OurProducts from '../OurProducts/OurProducts';
import Banner from '../Banner/Banner';
import Testimonials from '../Testimonials/Testimonials';
import Resources from '../Resources/Resources';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Metrics />
      <Partners />
      <OurPartners />
      <Services />
      <CyberCare />
      <OurProducts />
      <Banner />
      <Testimonials />
      <Resources />
      <ContactForm />
    </>
  );
};

export default Home;
