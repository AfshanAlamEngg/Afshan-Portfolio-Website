// import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;