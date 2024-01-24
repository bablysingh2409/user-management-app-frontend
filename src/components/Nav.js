import React from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { authSelector } from '../redux/reducers/authReducer';


function Nav() {
    const {isAuthenticated}=useSelector(authSelector);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleLogOut=()=>{
        //    dispatch(actions.logout()); 
           navigate('/');
    }
    return (
        <>
            <div className='h-[15vh] bg-[#0766AD] p-3'>
                <div className='flex justify-between items-center '>
                    <div className='w-[50px] h-[50px] border-2 border-black rounded-full transition ease-in-out delay-150 hover:-translate-y-1 
                    hover:scale-110 ml-3 '>
                        <Link to='/'>
                           <p className=' text-xl font-bold pt-2 w-[100%] h-[100%] border-2 border-black rounded-full 
                           text-center  hover:text-white'> FSA</p>
                        </Link>
                    </div>
                    <div className=' w-[50%]'>
                        {
                            isAuthenticated ?
                                <div className='p-3'>
                                    <ul className='flex justify-around'>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to='/'>Home</Link></li>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to='/profile'>User Profile</Link></li>
                                        <li className='text-xl text-white font-semibold hover:text-[#053B50] cursor-pointer ' onClick={handleLogOut}>Logout</li>
                                    </ul>
                                </div> :
                                <Link to='/'><p className='text-xl text-white font-semibold hover:text-[#053B50] float-end mr-10'>Home</p></Link>
                        }
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav