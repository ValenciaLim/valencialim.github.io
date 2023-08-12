import './App.scss';
import React from 'react'
import { Header, Home, Projects, Skills, Footer } from './container';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
