import React from 'react';
import Navbar from './project/Navbar';
import Home from './project/Home';
import OurServices from './project/Services';
import OurCollections from './project/Collections';
import Partners from './project/Partners';
import About from './project/About';
import Contact from './project/Contact';
import { Element } from 'react-scroll';
import Services1 from './project/Services1';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services1/>
      </Element>
        <OurServices />
      <Element name="collections">
        <OurCollections />
      </Element>

        <Partners />

      <Element name="about">
        <About />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
