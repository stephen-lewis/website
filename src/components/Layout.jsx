import React from 'react';

import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import Intro from './Intro';
import Menu from './Menu';
import Skills from './Skills';
import Social from './Social';

const Layout = () => (
  <>
    <Menu />
    <Social />
    <Intro />
    <About />
    <Skills />
    <Experience />
    <Footer />
  </>
);

export default Layout;
