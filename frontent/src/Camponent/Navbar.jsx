import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import "./Style/Nav.css"

const Navbar = () => {
      
  const router = useNavigate()
  const {state,dispatch} =  useContext (AuthContext)



const dropbtn = document.querySelector('.dropbtn');

if (dropbtn) {
  const dropdownContent = document.querySelector('.dropdown-content');

  dropbtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
  });
} else {
  console.error("Element '.dropbtn' not found!");
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

       <p onClick={()=> router('/game')}> Game</p>
       <p onClick={()=> router('/about')}>About</p>
       <p onClick={()=> router('/Tournaments')}>Tournaments</p>
    <p onClick={()=> router('/Contact')}>Contact</p>
  
     {state?.user?.email? <>
     {/* // DropDown=Section */}
      {state?.user &&  
        <div   class="dropdown">
  <button class="dropbtn">Profile</button>
  <div class="dropdown-content">
    <a href="#">Settings</a>
    <a href="#">Account</a>
    <a href="#">Logout</a>
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



// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../Context/AuthContext'
// import "./Style/Nav.css"
// const Navbar = () => {
//   const { state, dispatch} = useContext(AuthContext);
//   const [userData, setUserData] = useState({
//     email: "",
//     password: "",
//     role: "",
//   });
//   const [dropdown, setDropdown] = useState(false);
//   const router = useNavigate();

//   useEffect(() => {
//     if (state) {
//       setUserData(state.user);
//     }
//   }, [state]);

//   function down() {
//     setDropdown(true);
//   }

//   function up() {
//     setDropdown(false);
//   }

//   function Logoutt() {
//     // localStorage.removeItem("token")
//     dispatch({
//       type: "LOGOUT",
//     });
//   }

//   return (
//     <div>
//       {dropdown ? (
//         <div onMouseLeave={up} id="myntrapop">
//           {userData?.name ? (
//             <div style={{ borderBottom: "1px solid grey" }}>
//               <p>
//                 <b>Hello {state?.user?.name}</b>
//               </p>
//               <p>85******99</p>
//               <button onClick={Logoutt}>LOGOUT</button>
//             </div>
//           ) : (
//             <div style={{ borderBottom: "1px solid grey" }}>
//               <p>
//                 <b>Welcome</b>
//               </p>
//               <p>To access account and manage orders</p>
//               <p onClick={() => router("/register")}>
//                 LOGIN/REGISTER
//               </p>
//             </div>
//           )}

      
//         </div>
//       ) : null}

//       <div id="navbar">
//         <div id="logo">
//           <img
//             onClick={() => router("/")}
//           />
//         </div>
      
       

//         <div id="profile">
//           <div>
//             <i class="fa-solid fa-user fa-lg"></i>
//             <p onClick={() => router("/profile")} onMouseOver={down}>
//               Profile {userData?.email}
//             </p>
//           </div>
//           <div>
//             <i class="fa-solid fa-heart fa-lg"></i>
//             <p>Wishlist</p>
//           </div>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar







       
  

