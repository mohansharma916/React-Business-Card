import logo from './logo.svg';
import './App.css';

import Info from './components/Info';
import About from './components/About';
import Intrest from './components/Intrest';
import Footer from './components/Footer';

function App() {
  return (
    <div className='main'>
      <div className='card'>
    <Info />
    <About />
    <Intrest />
    <Footer />
    </div>
    </div>   
  )
}

export default App;
