import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "./Style/Nav.css"

const Navbar = () => {
      
  const router = useNavigate()
  const {state,dispatch} =  useContext (AuthContext)


  
  return (
    <div>
 
    <div className='navigation'>

      <div className='navbar-first'>
        <div className='logo-navbar'>
          <img   onClick={()=> router('/')} style={{width:"100%", height:"50px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmmSM_Sj7T54hqoX-u-mJ-eCFK46BHxJVHw&s'/>

        </div>
      </div>
      <div  className='second-navigation'>
              {/* <h4 onClick={() => router('/profile')}>{state.user.email} web</h4> */}

       <p onClick={()=> router('/game')}> Game</p>
       <p onClick={()=> router('/about')}>About</p>
       <p onClick={()=> router('/Tournaments')}>Tournaments</p>
    <p onClick={()=> router('/Contact')}>Contact</p>
    {/* <div id="search">
          <div  className='serch-bar'>
            <input
              type="text"
              placeholder="Search Games.........."
            />
          </div>
          </div> */}
     {state?.user?.email? <>
      {state?.user &&  <p>user</p>}
      {state?.user  &&<p  onClick={()=>dispatch({type:"LOGOUT"})}>Logout</p>}
      </>: <p style={{color:"red"}} onClick={()=> router('/register')} >Register</p>}
      {/* <h4 onClick={() => router('/profile')}>{state.user.email}</h4> */}
     </div>
    </div>

    </div>
  )
}

export default Navbar








       
  

