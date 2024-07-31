import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import detectEthereumProvider from '@metamask/detect-provider';
import "./Style/Nav.css";
import bbImage from '../iimg/bb.png';


const Navbar = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const connect = async () => {
      const detectedProvider = await detectEthereumProvider();
      if (detectedProvider) {
        setProvider(detectedProvider);
        console.log('MetaMask detected!');
      } else {
        console.log('Please install MetaMask!');
      }
    };

    connect();
  }, []);

  const connectWallet = async () => {
    if (!provider) {
      console.log('No provider found');
      return;
    }

    try {
      const accounts = await provider.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className='navigation'>
        <div className='navbar-first'>
          <div className='logo-navbar'>
         
          <img  onClick={() => navigate('/')}
          src={bbImage} alt="Description of the image" />


        
          </div>
        </div>
        <div className='second-navigation'>
          <p onClick={() => navigate('/about')}>About Us</p>
          <p onClick={() => navigate('/gaming')}>Game</p>
          <p onClick={() => navigate('/robotics')}>Robotics</p>
          <p onClick={() => navigate('/blockchain')}>Blockchain</p>
          <p onClick={() => navigate('/contact')}>Contact</p>

          {state?.user?.email ? (
            <>
              <div className="dropdown">
                <button className="my-profile" onClick={toggleDropdown}>Profile</button>
                <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                  <div className='drop-div'>
                    <div className='first-child'>
                      <a href="#">Settings</a>
                    </div>
                    <div className='second-child'>
                      <i className="fa-solid fa-gear"></i>
                    </div>
                  </div>
                  <div className='drop-div'>
                    <div className='first-child'>
                      <a href="#">Coins</a>
                    </div>
                    <div className='second-child'>
                      <i className="fa-solid fa-coins"></i>
                    </div>
                  </div>
                  <div className='drop-div'>
                    <div className='first-child'>
                      <a href="#">
                        <div>
                          {account ? (
                            <div>Connected to MetaMask: {account}</div>
                          ) : (
                            <p onClick={connectWallet}>Wallet</p>
                          )}
                        </div>
                      </a>
                    </div>
                    <div className='second-child'>
                      <i className="fa-brands fa-bitcoin"></i>
                    </div>
                  </div>
                </div>
              </div>
              <p onClick={() => dispatch({ type: "LOGOUT" })}>Logout</p>
            </>
          ) : (
            <p style={{ color: "red" }} onClick={() => navigate('/register')}>Register</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

