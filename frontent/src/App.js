import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Camponent/Home';
import Register from './Camponent/Register';
import Login from './Camponent/Login';
import Navbar from './Camponent/Navbar';
import Footer from './Camponent/Footer';
import About from './Camponent/About';
import { Game } from './Camponent/Game';
import Portfolio from './Camponent/Portfolio';
import Balance from './Camponent/Balance';
import NFTs from './Camponent/NFTs';
import MyWallet from './Camponent/MyWallet';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route exact path='/'element={<Home/>}/>
      <Route exact path='/register'element={<Register/>}/>
      <Route exact path='/login'element={<Login/>}/>
      <Route exact path='/about'element={<About/>}/>
      <Route exact path='/gaming'element={<Game/>}/>
      <Route exact path='/PortFolio'element={<Portfolio/>}/>
      <Route exact path='/balancse'element={<Balance/>}/>
      <Route exact path='/nfts'element={<NFTs/>}/>
      <Route exact path='/my-wallet'element={<MyWallet/>}/>






      </Routes>
      <Footer/>
   
    </div>
  );
}

export default App;
