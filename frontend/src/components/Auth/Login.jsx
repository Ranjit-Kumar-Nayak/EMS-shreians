import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    setEmail("")
    setPassword("")
    
    
  }
  return (
   <div className='h-screen w-screen flex items-center justify-center'>


    <div className='border border-red-100 p-20'>
      <form onSubmit={submitHandler} className='flex flex-col justify-center items-center'>
        <input onChange={(e)=>setEmail(e.target.value)} required name='email' value={email} className='border-2 border-cyan-500 text-xl rounded-full text-white bg-transparent outline-none px-5 py-3 placeholder:text-gray-400' type="text" placeholder='Enter Your Email' />
        <input required onChange={(e)=>setPassword(e.target.value)} name='password'  value={password} className='border-2 border-cyan-500 text-xl rounded-full text-white bg-transparent outline-none px-5 py-3 placeholder:text-gray-400 mt-4' type="password" placeholder='Enter Your Password' />
        <button type='submit' className='px-6 py-2v bg-cyan-500 rounded-full mt-4 border-none '>Login</button>
      </form>
    </div>

   </div>
  )
}

export default Login