import './App.css';
import { useState, useEffect } from 'react'
import Nav from './Nav'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'

function App() {
  window.addEventListener('scroll', function () {
    console.log(window.pageYOffset)
  })
  return (
    <div>
      <Nav />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
