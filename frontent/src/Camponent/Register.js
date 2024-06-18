import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';
 import "../Camponent/Style/Registr.css"


const Register = () => {
    const {state} =useContext(AuthContext)
    const [userData, setUserData] = useState({ name:"", email: "", password: "", confirmpassword: "",})
    //  console.log(userData,"-userData")
    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData,[event.target.name]: event.target.value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (userData.email && userData.password && userData.confirmpassword ) {
            if (userData.password === userData.confirmpassword){

                const response = await axios.post(" http://localhost:8000/register", { userData });
                if (response.data.success) {

                    setUserData({  name:"",  email: "", password: "", confirmpassword: "",})
                    router('/login')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }

            } else {
                toast.error("Password and confirm password not matched...")
            }
        } else {
            toast.error("All field are mandtory...")
        }
    }
     console.log(userData, "userData")


    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [ state])  // state
    console.log(userData, "userData")
    return (


        <div className='here'>
        <div className='from-box'>
      <div className='button-box'>
      <button type='button' className='button-register' >Sign Up</button>
    
       </div>
       <div className='socail-icons'>
        <img src='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png'/>
        <img src='https://tse3.mm.bing.net/th?id=OIP.aubU2lXxC1ZmPDdf-koomwHaH_&pid=Api&P=0&h=180'/>
        <img src='https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180'/>

       </div>
        <div className='body-first'>
            <form  className='form-first'  onSubmit={handleSubmit}>
                <input className='input-field' placeholder='Name' type='name' onChange={handleChange} name='name' value={userData.name} /><br />
                <input className='input-field' placeholder='Email' type='email' onChange={handleChange} name='email' value={userData.email} /><br />
                <input className='input-field' placeholder='Password' type='password' onChange={handleChange} name='password' value={userData.password} /><br />
                <input className='input-field'  type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmpassword' value={userData.confirmpassword} /><br />
                <input  className='submit-btn' type='submit' value='Register' /><br />
            </form>
            <div className='policy'>
            <p  onClick={()=> router('/login')} style={{color:"red"}}>New Acount <b  style={{ cursor:'pointer', color:"black"}}> Click Here? </b> <br/> <span>I Agree to the terms & condition</span></p>

            </div>
        
        </div>

        </div>
        </div>
    )
}

export default Register


// import React, { useContext, useEffect, useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../Context/AuthContext';
// import '../Camponent/Style/Registr.css'; // Assuming this is your CSS file path

// const Register = () => {
//     const { state } = useContext(AuthContext);
//     const [userData, setUserData] = useState({
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });
//     const router = useNavigate();

//     // Handle input changes
//     const handleChange = (event) => {
//         setUserData({ ...userData, [event.target.name]: event.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         // Validate form fields
//         if (userData.email && userData.password && userData.confirmPassword) {
//             if (userData.password === userData.confirmPassword) {
//                 try {
//                     const response = await axios.post("http://localhost:8000/register",userData);
//                     if (response.data.success) {
//                         setUserData({ email: "", password: "", confirmPassword: "" });
//                         router('/login');
//                         toast.success(response.data.message);
//                     } else {
//                         toast.error(response.data.message);
//                     }
//                 } catch (error) {
//                     console.error("Error registering:", error);
//                     toast.error("Failed to register. Please try again.");
//                 }
//             } else {
//                 toast.error("Password and confirm password do not match.");
//             }
//         } else {
//             toast.error("All fields are mandatory.");
//         }
//     };

//     // Redirect if user is already logged in
//     useEffect(() => {
//         if (state?.user?.name) {
//             router('/');
//         }
//     }, [state, router]);

//     return (
//         <div className='here'>
//             <div className='from-box'>
//                 <div className='button-box'>
//                     <button type='button' className='button-register'>Sign Up</button>
//                 </div>
//                 <div className='socail-icons'>
//                     {/* Update image sources */}
//                     <img src='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png' alt='Google icon' />
//                     <img src='https://tse3.mm.bing.net/th?id=OIP.aubU2lXxC1ZmPDdf-koomwHaH_&pid=Api&P=0&h=180' alt='Icon' />
//                     <img src='https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180' alt='Icon' />
//                 </div>
//                 <div className='body-first'>
//                     <form className='form-first' onSubmit={handleSubmit}>
//                         <label className='label'>Email *</label><br />
//                         <input className='input-field' placeholder='Email' type='email' onChange={handleChange} name='email' value={userData.email} /><br />
//                         <label className='label'>Password *</label><br />
//                         <input className='input-field' placeholder='Password' type='password' onChange={handleChange} name='password' value={userData.password} /><br />
//                         <label className='label'>Confirm Password *</label><br />
//                         <input className='input-field' type='password' placeholder='Confirm Password' onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br />
//                         <input className='submit-btn' type='submit' value='Register' /><br />
//                     </form>
//                     <div className='policy'>
//                         <p onClick={() => router('/login')} style={{ color: "red" }}>New Account <b style={{ cursor: 'pointer', color: "black" }}>Click Here?</b> <br /> <span>I Agree to the terms & condition</span></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Register;





// import React, { useContext, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import {toast} from 'react-hot-toast'
// import axios from 'axios'
// import { AuthContext } from '../Context/AuthContext'



// const Register = () => {
//     const {state} =useContext (AuthContext)
//      const [userData,setUserData] = useState({name: "",email: "",password: "",confirmPassword:""})
//      const router = useNavigate();
//      const handleChange = (event) => {
//         setUserData({ ...userData, [event.target.name]: event.target.value })
//     }

//      console.log(userData, "- userdata")

   

//      const handleSubmit = async (event) => {
//         event.preventDefault();
//         if (userData.name && userData.email && userData.password && userData.confirmPassword ) {
//             if (userData.password === userData.confirmPassword) {
//                 const response = await axios.post("http://localhost:8000/register", { userData });

//                 if (response.data.success) {
//                     setUserData({ name: "", email: "", password: "", confirmpassword: ""})
//                     router('/login')
//                     toast.success(response.data.message)
//                 } else {
//                     toast.error(response.data.message)
//                 }
//             } else {
//                 toast.error("Password and Confirm Password not Matched.")
//             }
//         } else {
//             toast.error("All fields are mandtory.")
//         }
//     }
//   return (
//     <div style={{ marginTop: "90px"}}>
//          <div id="logscreen">
//          <div id="logbody">
      
//         <div>
//           <p>Register to create profile</p>
//         </div>
//         <div id="logform">
//          <form onSubmit={handleSubmit}>
//                 <label>Name</label><br />
//                 <input value={userData.name} type='text' name='name' onChange={handleChange} /><br />
                
//                 <label>Email</label><br />
//                 <input value={userData.email} type='email' name='email' onChange={handleChange} /><br />
//                 <label>Password</label><br />
//                 <input type='password' name='password' onChange={handleChange} /><br />
//                 <label>ConfirmPassword</label><br />
//                 <input value={userData.confirmPassword} type='Password' name='confirmPassword' onChange={handleChange} /><br />
//                 <input type='submit' value='Register' /><br />
//             </form>
//             </div>
//             </div>
//             </div>
//     </div>
//   )
// }

// export default Register;