import './App.css';
import Navbar from './Components/Navbar';
import {Route} from 'react-router-dom'
import Hero from './Components/Hero';
function App() {
  return (
    <div  >
      <Route>
        <Navbar/>
        <Hero/>
      </Route>
    </div>
  );
}

export default App;
