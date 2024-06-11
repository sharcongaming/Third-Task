import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "./Style/Nav.css"
import detectEthereumProvider from '@metamask/detect-provider';


const Navbar = () => {
      
  const router = useNavigate()
  const {state,dispatch} =  useContext (AuthContext)



  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const connect = async () => {
      const provider = await detectEthereumProvider();
      if (provider) {
        setProvider(provider);
        console.log('MetaMask detected!');
      } else {
        console.log('Please install MetaMask!');
      }
    };

    connect();
  }, []);

  const connectWallet = async () => {
    if (!provider) {
      return;
    }

    try {
      const accounts = await provider.requestAccount();
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  };


const dropbtn = document.querySelector('.dropbtn');

if (dropbtn) {
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });
} else {
  console.error("Element 'dropbtn' not found!");
}
  return (

    
    <div>
 
    <div className='navigation'>

      <div className='navbar-first'>
        <div className='logo-navbar'>
          <img   onClick={()=> router('/')} style={{width:"100%", height:"50px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmmSM_Sj7T54hqoX-u-mJ-eCFK46BHxJVHw&s'/>

        </div>
      </div>
      <div  className='second-navigation'>

       <p onClick={()=> router('/gaming')}> Game</p>
       <p onClick={()=> router('/about')}>About</p>
       <p onClick={()=> router('/PortFolio')}>PortFolio</p>
    <p onClick={()=> router('/contact')}>Contact
    </p>
  
     {state?.user?.email? <>
     {/* // DropDown=Section */}
      {state?.user &&  
        <div   class="dropdown">
  <button class="my-profile">Profile</button>
  <div class="dropdown-content">
   <div className='drop-div'>
    <div className='first-child'>
    <a href="#">Settings</a>
      </div> 
       <div className='second-child'>
       <i  class="fa-solid fa-gear " ></i>
       </div>
    </div> 
    <div className='drop-div'>
    <div className='first-child'>
    <a href="#">coins</a>
      </div> 
       <div className='second-child'>
       <i class="fa-solid fa-coins"></i>
       </div>
    </div> 
 
{/* wallet connect section */}

    <div className='drop-div'>
    <div className='first-child'>
    <a href="#">
    <div>
       {account ? (
        <div>
          Connected to MetaMask: {account}
        </div>
      ) : (
        <p onClick={connectWallet}>Wallet</p>
      )}
     </div>
    </a>
      </div> 
       <div className='second-child'>
       <i class="fa-brands fa-bitcoin"></i>
       </div>
    </div> 
  </div>
</div>
      }
      {state?.user  &&<p  onClick={()=>dispatch({type:"LOGOUT"})}>Logout</p>}
      </>: <p style={{color:"red"}} onClick={()=> router('/register')} >Register</p>}
</div>
     </div>



     
    </div>

  
  )
}

export default Navbar

