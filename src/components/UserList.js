import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector, action } from '../redux/reducers/userReducer';
import { fetchUsers } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

function UserList() {
    const { users } = useSelector(userSelector);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {

        const getAllUser = async () => {
            setLoading(true);
            try {

                dispatch(fetchUsers());
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        getAllUser();
    }, [])




    const handleClick = (userId) => {
        navigate(`/user-details/${userId}`)
    }

    if (loading) {
        return <p>Loading.....</p>
    }

    const saveFilterSettings = (filterOption) => {
        localStorage.setItem('filterOption', filterOption);
    }

    const handleSortAZ = () => {
        dispatch(action.sortAZ());
        saveFilterSettings('sortAZ');
    }

    const handleSortZA = () => {
        dispatch(action.sortZA());
    }




    return (
        <div className='w-full p-2'>
            <div className='w-[100%] m-auto p-2 '>
                <h1 className='text-7xl font-bold text-center p-4 text-[#910A67] underline'>DashBoard</h1>
                {
                    users.length > 0 ?
                        <div className='flex w-[100%] justify-between'>
                            <div className='w-[10%] flex flex-col gap-3'>
                                <button onClick={handleSortAZ} className='w-full p-2
                                border-2 border-[#1D2B53] rounded-md text-white bg-[#1D2B53]
                                text-lg font-bold hover:bg-white hover:text-[#1D2B53]'>Sort A-Z</button>
                                <button onClick={handleSortZA} className='w-full p-2 
                                border-2 border-[#7E2553] rounded-md text-white bg-[#7E2553]
                                text-lg font-bold hover:bg-white hover:text-[#7E2553]'>Sort Z-A</button>

                            </div>


                            <div className='flex p-3 flex-wrap justify-center m-3  w-[90%]'>

                                {
                                    users.map((user) => {
                                        return (
                                            <div className=' p-5 m-3 w-[20%]
                                                        border-2 border-[#0766AD] shadow-md shadow-[#0766AD]
                                                        transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
                                                         cursor-pointer' key={user._id} onClick={() => handleClick(user._id)}>
                                                <h1 className='text-center text-2xl uppercase font-bold
                                                       text-[#D63484] p-2'>{user.name}</h1>
                                                <h1 className='text-lg font-semibold text-[#561C24]'>{user.email}</h1>
                                                <h1 className='text-lg font-semibold text-[#720455]'>{user.phone}</h1>
                                            </div>
                                        )
                                    })
                                }



                            </div>

                        </div>

                        :
                        <div className='flex flex-col gap-4 p-4 pr-5 '>

                            <h1 className='text-3xl font-semibold text-[#D63484] text-center'>NO DATA FOUND</h1>
                            <p className='text-2xl font-semibold text-[#7E30E1] m-auto'>Create User,By Clicking on Create User Link</p>
                        </div>
                }

            </div>
        </div>
    )
}

export default UserList