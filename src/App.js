import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import About from './pages/About';
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route to='/' element={Hero} exact/>
        <Route to='/About' element={About} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
