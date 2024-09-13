import './App.css';
import Nav from './Nav'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills';
import Reviews from './Reviews/Reviews';

function App() {
  return (
    <div className='pages__container'>
      {/*<Loading />*/}
      <Nav />

      <Home />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
