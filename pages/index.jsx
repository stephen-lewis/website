import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Menu from '../components/Menu';
import Skills from '../components/Skills';
import Social from '../components/Social';

const Index = () => (
  <>
    <Menu />
    <Social />
    <Intro />
    <About />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
  </>
);

export default Index;
