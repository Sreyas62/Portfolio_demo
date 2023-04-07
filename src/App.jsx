import React from 'react';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx'
import About from './components/About/About.jsx'
import Experience from './components/Experience/Experience.jsx'
import Services from './components/Service/Services.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'



const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
