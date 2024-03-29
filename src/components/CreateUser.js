import React, { useState } from 'react';
import { addUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const dispatch = useDispatch();
    const navigate=useNavigate();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            dispatch(addUser(userData));
            navigate('/');

        }catch(err){
            console.log(err);
        }
    }

    const handleChange = (e) => {
       
            const { value, name } = e.target;
            setUserData({
                ...userData,
                [name]: value,
            })
      
    }

    return (
        <div className='w-[70%] p-3 m-auto '>
            <div className=' w-[80%] m-auto p-4 shadow-lg shadow-[#0766AD] mt-6 border-2 '>

                <h2 className='text-center font-semibold text-5xl p-3 text-[#0766AD]'>Create New User</h2>
                <form className='flex flex-col w-ful  justify-center p-4 ' onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="name" className='text-xl pl-2 font-bold'>Name:</label>
                        <input type="text" id="name" name="name" required className='w-[60%] p-1 border-2 
    border-[#B6BBC4] rounded-md text-lg m-2' value={userData.name} onChange={handleChange} />
                    </div>

                    <div>
                        <label htmlFor="email" className='text-xl pl-2 font-bold'>Email:</label>
                        <input type="email" id="email" name="email" required className='w-[60%] p-1 border-2 
    border-[#B6BBC4] rounded-md text-lg m-2' value={userData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="phone" className='text-xl pl-2 font-bold'>Phone:</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]+" required className='w-[60%] p-1 border-2 
            border-[#B6BBC4] rounded-md text-lg m-2' onChange={handleChange} value={userData.phone} />
                    </div>
                    <button type="submit" className='w-[40%] p-3 border-2 border-[#0766AD] bg-[#0766AD] text-white rounded-md 
    text-xl m-auto font-semibold hover:bg-[#91C8E4] hover:text-black mt-7'>Create User</button>
                </form>

            </div>
        </div>
    )
}

export default CreateUser