import './App.css';
import { useState, useEffect } from 'react'
import Nav from './Nav'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    //console.log(position)
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Nav scrollPosition={scrollPosition} />
      <Home />
      <AboutMe scrollPosition={scrollPosition} />
    </div>
  );
}

export default App;
