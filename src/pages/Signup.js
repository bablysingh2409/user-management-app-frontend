import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {signup} from '../services/api'
import { useDispatch,useSelector } from 'react-redux';
import { authSelector,action } from '../redux/reducers/authReducer';


function Signup() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        gender: '',
        source: [],
        city: '',
        state: 'Maharashtra'
    });

    const dispatch=useDispatch();
    const navigate=useNavigate();


    const citiesToState = {
        Mumbai: 'Maharashtra',
        Pune: 'Karnataka',
        Ahmedabad: 'Gujarat',
    }

 const handleTextChange=(e)=>{
    const {value,name}=e.target;
    setUserData({
        ...userData,
        [name]:value,
    })
 }

    const handleDropDownChange = (e) => {
        const { value, name } = e.target;
    
            setUserData({
                ...userData,
                [name]:value,
                state: citiesToState[value]
            })
        
    }
    const handleRadioChange = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        const updatedSource = checked
            ? [...userData.source, value]
            : userData.source.filter((item) => item !== value);

        setUserData({
            ...userData,
            source: updatedSource
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const res = await signup(userData);
         
            if(res.status===200){
            navigate('/login');
            }
        } catch (error) {
            // Handle signup failure, show an error message, etc.
            console.error('Signup failed:', error.message);
        }

    };


    return (
        <div className='w-[70%] p-3 m-auto '>
            <div className=' w-[80%] m-auto p-4 shadow-lg shadow-[#0766AD] mt-6 border-2 '>
                
                <h2 className='text-center font-semibold text-5xl p-3 text-[#0766AD]'>Signup</h2>
                <form className='flex flex-col w-ful  justify-center p-4' onSubmit={handleSubmit}>

                    <label htmlFor="name" className='text-xl pl-2 font-bold'>Name:</label>
                    <input type="text" id="name" name="name" pattern="[A-Za-z]+" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' value={userData.name} onChange={handleTextChange} />


                    <label htmlFor="email" className='text-xl pl-2 font-bold'>Email:</label>
                    <input type="email" id="email" name="email" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' value={userData.email} onChange={handleTextChange} />


                    <label htmlFor="phone" className='text-xl pl-2 font-bold'>Phone:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]+" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' onChange={handleTextChange} />

                    <label htmlFor="password" className='text-xl pl-2 font-bold'>Password:</label>
                    <input type="password" id="password" name="password" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' value={userData.password} onChange={handleTextChange} />


                    <label className='text-xl pl-2 font-bold mt-4'>Gender:</label>
                    <div className='flex justify-center gap-1 flex-col p-2'>

                        <div>
                            <input type="radio" id="male" name="gender" value="Male" required className='
                     size-4 m-3' onChange={handleRadioChange} />
                            <label htmlFor="male" className='text-lg font-semibold' >Male</label>
                        </div>


                        <div>
                            <input type="radio" id="female" name="gender" value="Female" required className='
                     size-4 m-3' onChange={handleRadioChange} />
                            <label htmlFor="female" className='text-lg font-semibold'>Female</label>
                        </div>

                        <div>
                            <input type="radio" id="others" name="gender" value="Others" required className='
                     size-4 m-3' onChange={handleRadioChange} />
                            <label htmlFor="others" className='text-lg font-semibold'>Others</label>
                        </div>

                    </div>

                    <label className='text-xl pl-2 font-bold mt-4'>How did you hear about this?</label>
                    <div className='flex justify-center gap-1 flex-col p-2'>
                        <div>
                            <input type="checkbox" id="linkedin" name="source" value="LinkedIn" className='
                     size-4 m-3' onChange={handleCheckboxChange} />
                            <label htmlFor="linkedin" className='text-lg font-semibold'>LinkedIn</label>
                        </div>

                        <div>
                            <input type="checkbox" id="friends" name="source" value="Friends" className='
                     size-4 m-3' onChange={handleCheckboxChange} />
                            <label htmlFor="friends" className='text-lg font-semibold'>Friends</label>
                        </div>

                        <div>
                            <input type="checkbox" id="jobPortal" name="source" value="Job Portal" className='
                     size-4 m-3' onChange={handleCheckboxChange} />
                            <label htmlFor="jobPortal" className='text-lg font-semibold'>Job Portal</label>
                        </div>

                        <div>
                            <input type="checkbox" id="othersSource" name="source" value="Others" className='
                     size-4 m-3' onChange={handleCheckboxChange} />
                            <label htmlFor="othersSource" className='text-lg font-semibold'>Others</label>
                        </div>
                    </div>


                    <label htmlFor="city" className='text-xl pl-2 font-bold mt-4' >City:</label>
                    <div>
                        <select id="city" name="city" required className='flex justify-center gap-4 flex-col p-2 
                    mt-2 border-2  text-lg font-semibold'  onChange={handleDropDownChange}>
                            <option value="Mumbai" className='text-lg font-semibold'>Mumbai</option>
                            <option value="Pune" className='text-lg font-semibold'>Pune</option>
                            <option value="Ahmedabad" className='text-lg font-semibold' >Ahmedabad</option>
                        </select>
                    </div>


                    <label htmlFor="state" className='text-xl pl-2 font-bold mt-4'>State:</label>
                    <input type="text" id="state" name="state" value={userData.state} readOnly className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2'/>


                    <button type="submit" className='w-[40%] p-3 border-2 border-[#0766AD] bg-[#0766AD] text-white rounded-md 
            text-xl m-auto font-semibold hover:bg-[#91C8E4] hover:text-black mt-7'>Signup</button>
                </form>
                <Link to="/login">
                    <p className='text-center text-blue-700 mt-[-1rem] hover:text-[#0766AD] cursor-pointer'>Or Login instead</p>
                </Link>
            </div>
        </div>
    )
}

export default Signup