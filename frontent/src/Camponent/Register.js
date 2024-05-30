import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';
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


                // const response = await api.post("http://localhost:8000/register", {userData});
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
    // console.log(userData, "userData")


    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])
    console.log(userData, "userData")
    return (
        <div className='body-first'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Your Email</label><br />
                <input className='input-email' type='email' onChange={handleChange} name='email' value={userData.email} /><br />
                <label>Password</label><br />
                <input className='input-email' type='password' onChange={handleChange} name='password' value={userData.password} /><br />
                <label>Confirm Password</label><br />
                <input className='input-email'  type='password' onChange={handleChange} name='confirmPassword' value={userData.confirmPassword} /><br />
                <input  className='submit' type='submit' value='Register' /><br />
            </form>
            {/* <button className='submit' onClick={()=> router('/login')}>Login</button> */}
            <p style={{color:"red"}} onClick={()=> router('/login')}>Already have Acount Click Here?</p>
        </div>
    )
}

export default Register