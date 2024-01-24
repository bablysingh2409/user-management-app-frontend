import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/reducers/authReducer';
import UserList from '../components/UserList';


function Home() {
    const navigate = useNavigate();
    const {isAuthenticated}=useSelector(authSelector);

    const handleClick = () => {
        navigate('/login')
    }
    return (
        <>{ !isAuthenticated?
        <div className=''>
            <div className='flex p-7 justify-between'>
                <div className='w-[50%]'>
                    <img src='https://img.freepik.com/free-vector/hand-drawn-profile-icons-pack_52683-72355.jpg?w=900&t=st=1706020556~exp=1706021156~hmac=b021f94e882e985736641fe8d0e0db6b47cf6b23484098b4c51118dd51ac34aa'
                        alt='books' className='w-full' />
                </div>
                <div className='w-[40%] flex items-center'>
                    <div className='flex flex-col justify-center items-center gap-6'>
                        <p className='text-2xl w-[60%] font-bold'>If You Want to access the user Data then login/signup!</p>
                        { !isAuthenticated?
                        <button className='w-[70%] bg-[#379237] text-white border-2 border-[#379237] p-3
                    text-lg font-semibold rounded hover:bg-[#54B435]' onClick={handleClick}>I ALREADY HAVE AN ACCOUNT</button>:
                    <button className='w-[70%] bg-[#379237] text-white border-2 border-[#379237] p-3
                    text-lg font-semibold rounded hover:bg-[#54B435]' onClick={handleClick}>Go To Users Page</button>
} 
                    </div>
                </div>
            </div>
        </div>
    : <UserList/>    
    }
        </>
    )
}

export default Home