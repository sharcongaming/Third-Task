import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';
 import "../Camponent/Style/Registr.css"


const Register = () => {
    const {state} =useContext(AuthContext)
    const [userData, setUserData] = useState({  email: "", password: "", confirmPassword: "",})
    // console.log(userData,"-userData")
    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData,[event.target.name]: event.target.value })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (userData.email && userData.password && userData.confirmPassword ) {
            if (userData.password === userData.confirmPassword){

                const response = await axios.post(" http://localhost:8000/register", { userData });
                if (response.data.success) {

                    setUserData({  email: "", password: "", confirmPassword: "",})
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
                <label className='label'> Email *</label><br />
                <input className='input-field' type='email' onChange={handleChange} name='email' value={userData.email} /><br />
                <label   className='label '>  Password *</label><br />
                <input className='input-field' type='password' onChange={handleChange} name='password' value={userData.password} /><br />
                <label  className='label' >   Confirm Password *</label><br />
                <input className='input-field'  type='password' onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br />
                <input  className='submit-btn' type='submit' value='Register' /><br />
            </form>
            <div className='policy'>
            <p  onClick={()=> router('/login')}>New Acount <b  style={{color:"black"}}> Click Here? </b> <br/> <span>I Agree to the terms & condition</span></p>

            </div>
        
        </div>

        </div>
        </div>
    )
}

export default Register