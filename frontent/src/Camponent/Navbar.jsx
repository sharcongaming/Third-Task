import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import "../Camponent/Style/Navbar.css"
import { AuthContext } from '../Context/AuthContext'


const Navbar = () => {
      
  const router = useNavigate()
  const {state,dispatch} =  useContext (AuthContext)
  
  return (
    <div>
       <div className='navbar'>
      <div  className='second-div-navbar'>
       

     {state?.user?.email? <>
      {state?.user && <h2>user</h2>}
      {state?.user  &&<h2  onClick={()=>dispatch({type:"LOGOUT"})}>Logout</h2>}
      </>: <h2 style={{color:"red"}} onClick={()=> router('/login')} >Register</h2>}

     </div>




    </div>
  

</div>
  )
}

export default Navbar