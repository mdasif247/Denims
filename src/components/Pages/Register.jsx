import React from 'react'
import Navbar from '../Navbar';

function Register() {
    const inputStyle ="border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  return (
    <div>
    <Navbar/>
    <div className="flex justify-center w-[100%] h-[100vh] bg-[#b892f7]">
      <div className='flex flex-col absolute top-[30%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]'>
        <text className='text-2xl'>Register</text>
        <div>
            <input className={inputStyle+ ` mt-2 w-[100%]`} type='text' placeholder='username'/>
        </div>
        <div>
            <input className={inputStyle+ ` mt-2 w-[100%]`} type='email' placeholder='Email'/>
        </div>
        <div>
            <input className={inputStyle+ ` mt-2 w-[100%]`} type='password' placeholder='Password'/>
        </div>
        <div>
            <input className={inputStyle+ ` mt-2 w-[100%]`} type='password' placeholder='confirm password'/>
        </div>
        <input type='button'
        className="mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200"
        value='Register'/>
      </div>
    </div>
    </div>
  )
}

export default Register
