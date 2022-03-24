import './App.css';
import { useState } from 'react'
import Nav from './Nav'
import Home from './Home/Home'

function App() {
  const [isNavOn, setIsNavOn] = useState(true);
  const setNav = () => {
    setIsNavOn(pre => !pre)
  }

  return (
    <div>
      <Nav isNavOn={isNavOn} setNav={setNav} />
      {/*
      <Home isNavOn={isNavOn} />
  */}
    </div>
  );
}

export default App;
