import './App.css';
import { useState, useEffect } from 'react'
import Nav from './Nav'
import Home from './Home/Home'
import AboutMe from './AboutMe/AboutMe'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Loading from './Loading/Loading';

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
      {/** */}
      <Nav scrollPosition={scrollPosition} />
      <Loading />
      <Home />
      <AboutMe scrollPosition={scrollPosition} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
