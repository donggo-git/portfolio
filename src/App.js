import './App.css';
import { useState, useEffect } from 'react'
import Nav from './Nav'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills';

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
    <div className='pages__container'>
      {/*<Loading />*/}
      <Nav scrollPosition={scrollPosition} />

      <Home />
      <Skills scrollPosition={scrollPosition} />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
