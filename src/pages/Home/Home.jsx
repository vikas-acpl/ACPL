import React, { Suspense, lazy } from 'react';
import Spinner from '../../components/Spinner/Spinner';
const OurPartners = lazy(() => import('../OurPartners/OurPartners'));
const Services = lazy(() => import('../Services/Services'));
const CyberCare = lazy(() => import('../CyberCare/CyberCare'));
const OurProducts = lazy(() => import('../OurProducts/OurProducts'));
const Banner = lazy(() => import('../Banner/Banner'));
const Testimonials = lazy(() => import('../Testimonials/Testimonials'));
const Resources = lazy(() => import('../Resources/Resources'));
const ContactForm = lazy(() => import('../ContactForm/ContactForm'));

import HeroSection from '../HeroSection/HeroSection';
import Metrics from '../Metrics/Metrics';
import Partners from '../Partners/Partners';
// import OurPartners from '../OurPartners/OurPartners';
// import Services from '../Services/Services';
// import CyberCare from '../CyberCare/CyberCare';
// import OurProducts from '../OurProducts/OurProducts';
// import Banner from '../Banner/Banner';
// import Testimonials from '../Testimonials/Testimonials';
// import Resources from '../Resources/Resources';
// import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Metrics />
      <Partners />
      <Suspense fallback={<Spinner />}>
        <OurPartners />
        <Services />
        <CyberCare />
        <OurProducts />
        <Banner />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Testimonials />
        <Resources />
        <ContactForm />
      </Suspense>
    </>
  );
};

export default Home;
