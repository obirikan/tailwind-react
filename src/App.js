import './App.css';
import Navbar from './Components/Navbar';
import {Route} from 'react-router-dom'
import Hero from './Components/Hero';
import Footer from './Components/Footer';
function App() {
  return (
    <div  >
        <Navbar/>
        <Route to='/' component={Hero} exact/>
        <Footer/>
    </div>
  );
}

export default App;
