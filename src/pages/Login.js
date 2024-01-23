import React, { useState } from 'react'

function Login() {
const [loginData,setLoginData]=useState({
    email:'',
    password:''
})

const handleChange=(e)=>{
    const {name,value}=e.target;
    setLoginData({
        ...loginData,
        [name]:value
    })
}

const handleSubmit=(e)=>{
    e.preventDefault();
}
    return (
        <div className='w-[70%] p-3 m-auto '>
            <div className=' w-[80%] m-auto p-4 shadow-lg shadow-[#0766AD] mt-6 border-2 '>
                <span className='text-2xl font-bold cursor-pointer hover:text-[#0766AD]'>&times;</span>
                <h2 className='text-center font-semibold text-5xl p-3 text-[#0766AD]'>Signup</h2>
                <form className='flex flex-col w-ful  justify-center p-4 ' onSubmit={handleSubmit} >

                    <div>
                        <label htmlFor="email" className='text-xl pl-2 font-bold'>Email:</label>
                        <input type="email" id="email" name="email" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' value={loginData.email} onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="password" className='text-xl pl-2 font-bold'>Email:</label>
                        <input type="password" id="password" name="password" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' value={loginData.password} onChange={handleChange}/>
                    </div>
                    <button type="submit" className='w-[40%] p-3 border-2 border-[#0766AD] bg-[#0766AD] text-white rounded-md 
            text-xl m-auto font-semibold hover:bg-[#91C8E4] hover:text-black mt-7'>Signup</button>
                </form>
            </div>
        </div>

    )
}

export default Login