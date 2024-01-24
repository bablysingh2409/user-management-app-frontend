import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelector } from '../redux/reducers/userReducer';
import { fetchUsers } from '../redux/actions/userActions';

function UserList() {
    const { users } = useSelector(userSelector);
    const [allUser, setAllUser] = useState([]);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        const getAllUser = async () => {
            setLoading(true);
            try {
                dispatch(fetchUsers());
                setAllUser(users);
                setLoading(false);
                console.log(allUser)
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }
        getAllUser();
    }, [])

    const handleClick=(user)=>{
                
    }

    if (loading) {
        return <p>Loading.....</p>
    }

    return (
        <div className='w-full p-2'>
            <div className='w-[80%] m-auto p-2 '>
                {
                    allUser.length >= 0 ?
                        <div className='flex p-3 flex-wrap justify-center m-3'>
                            {
                                allUser.map((user) => {
                                    return (<div className=' p-5 m-3 w-[20%]
                       border-2 border-[#0766AD] shadow-md shadow-[#0766AD]
                       transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
                       cursor-pointer' key={user._id} onClick={()=>handleClick(user)}>
                                        <h1 className='text-center text-2xl uppercase font-bold
                           text-[#D63484] p-2'>{user.name}</h1>
                                        <h1 className='text-lg font-semibold text-[#561C24]'>{user.email}</h1>
                                        <h1 className='text-lg font-semibold text-[#720455]'>{user.phone}</h1>
                                    </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='flex flex-col gap-4 p-4 pr-5 '>
                            <h1 className='text-4xl font-bold text-[#D63484] text-center'>NO DATA FOUND</h1>
                            <p className='text-2xl font-bold text-[#7E30E1]'>Create User,By Clicking on Create User Link</p>
                        </div>
                }

            </div>
        </div>
    )
}

export default UserList