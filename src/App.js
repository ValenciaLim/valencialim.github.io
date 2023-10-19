import './App.scss';
import React from 'react';
import { Header, Home, Experience, Skills, Portfolio, Footer } from './container';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
