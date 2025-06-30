import React, { use, useState } from 'react'
import { login,signup } from '../firebase'; 

const Login = () => {

  const [signState,setSignState] = useState("Sign IN");

const [name,setName] = useState("");
const [password,setPassword] = useState("");
const [email,setEmail] = useState("");
const [loading,setLoading] = useState(false);


const user_auth = async (event) =>{
  event.preventDefault();
  setLoading(true);
  if(signState==="Sign In"){
    await login(email,password);
  }else{
    await signup(name,email,password);
  }
  setLoading(false);
}



    return (
      loading?<div className='w-full h-[100vh] flex items-center justify-center'>
        <img className='w-[60px]' src="/netflix_spinner.gif" alt="" />
      </div>:
    <div className="relative w-full h-screen">
      {/* Background Image */}
        <img
        src="/background_banner.jpg"
        alt="Background"
        className="w-full h-full object-cover"
        />

      {/* Logo Image on Top of Background */}
        <div className="absolute top-4 left-4">
        <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
        </div>

      {/* Sign Up Form */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white 
        bg-slate-900 object-cover p-10 ">
        <h1 className="text-3xl mb-4">{signState}</h1>
        <form>
          {signState==="Sign Up"?
          <input value={name} onChange={(e) =>{setName(e.target.value)}} type="text" placeholder="Your name" className=" w-full block mb-2 p-2 text-black" />:<></>}
            
            <input value={email} onChange={(e) =>{setEmail(e.target.value)}} type="email" placeholder="Email" className=" w-full block mb-2 p-2 text-black" />

            <input value={password} onChange={(e) =>{setPassword(e.target.value)}} type="password" placeholder="Password" className="w-full block mb-2 p-2 text-black " />

            <button className="bg-red-600 px-4  py-2 w-full block mb-2 p-2 " onClick={user_auth} type='submit'>{signState}</button>
            <div className="mt-2 flex ">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="ml-2">Remember Me</label>
            <p className='px-5'>Need Help?</p>
            </div>
        </form>
        <div className='mt-10 text-[#fff]  cursor-pointer'>
          {signState==="Sign In"?<p>New to Netflix? <span onClick={()=> {setSignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          
        </div>
        </div>
    </div>
    );
};

export default Login;