import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Camponent/Home';
import Register from './Camponent/Register';
import Login from './Camponent/Login';
import Navbar from './Camponent/Navbar';
import Footer from './Camponent/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='/register'element={<Register/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path='/footer'element={<Footer/>}/>
      </Routes>
      {/* <Footer/> */}
   
    </div>
  );
}

export default App;
