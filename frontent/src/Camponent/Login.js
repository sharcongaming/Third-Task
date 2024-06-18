
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';
// import api from './apiConfig/index';
import "../Camponent/Style/Login.css"



const Login = () => {

    const  { state ,dispatch } = useContext(AuthContext)
    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const response = await axios.post("http://localhost:8000/login", { userData });
            if (response.data.success) {
                dispatch({
                    type: 'LOGIN',
                    payload: response.data.user
                })
                localStorage.setItem("token", JSON.stringify(response.data.token))
                setUserData({ email: "", password: "" })
                router('/')
                toast.success(response.data.message)
               
            } else {
                toast.error(response.data.message)
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }
    // console.log(userData, "userData")


    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [])

    
    return (


        <div className='here'>
                 <div className='from-box'>
                  <div className='button-box'>
                  <button type='button' className='button-login'>Login</button>
                
                   </div>  
                   <div className='socail-icons'>
                    <img src='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png'/>
                    <img src='https://tse3.mm.bing.net/th?id=OIP.aubU2lXxC1ZmPDdf-koomwHaH_&pid=Api&P=0&h=180'/>
                     <img src='https://tse4.mm.bing.net/th?id=OIP.H836RvDYYgQZcZn0TC8qBAHaHa&pid=Api&P=0&h=180'/>
        
                    </div> 
        <div  className='body-first'>
            <form  className='form-login'  onSubmit={handleSubmit}>
                <label  className='label-login'>Email*</label><br />
                <input  className='input-field-login'  placeholder='Email'  type='email' onChange={handleChange} name='email' value={userData.email} /><br />
                <label   className='label-login'   >Password*</label><br />
                <input   className='input-field-login' placeholder='Password' type='password' onChange={handleChange} name='password' value={userData.password} /><br />
                <input  className='submit-btn-login'  type='submit' value='Login' /><br />
            </form>
         <div className=' privcy-polcy'>
            <p  onClick={()=> router('/register')}>New Acount <b style={{  cursor:'pointer',color:"black"}}>Click Here?</b> <br/> <span>I Agree to the terms & condition</span></p>

         </div>
        </div>
        </div>
        </div>
    )
}
export default Login
