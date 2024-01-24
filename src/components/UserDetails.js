import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { userSelector } from '../redux/reducers/userReducer'
import { removeUser } from '../redux/actions/userActions';

function UserDetails() {
   const {id}=useParams();
   const {users}=useSelector(userSelector);
   const [user,setUser]=useState([]);
   const navigate=useNavigate();
   const dispatch=useDispatch();

   useEffect(()=>{
       const selectedUser= users.filter((user)=>user._id===id) ;
       setUser(selectedUser);
   },[])

const handleEdit=(userId)=>{
       navigate(`/edit-user/${userId}`)
}

const handleDelete=(userId)=>{
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
        dispatch(removeUser(userId));
        navigate('/');
      }
}

  return (
    <div className=' p-2 h-[70vh]'>
        <div className='w-[80%] m-auto p-2  h-full'>
            {
                user.map((u)=>{
                    return (<div key={u._id} className='flex gap-3 p-4 justify-between
                      h-full shadow-lg shadow-[#0766AD]'>
                        <div className='w-[50%]  flex flex-col gap-4 p-3 justify-evenly'>
                         <h1 className='text-3xl uppercase font-bold text-[#7E2553]'>NAME- <span className='font-semibold
                         pl-4 text-[#3B3486]'>{u.name}</span></h1>
                         <h1 className='text-3xl uppercase font-bold text-[#7E2553]'>EMAIL- <span className='font-semibold
                         pl-4 text-[#3B3486]'>{u.email}</span></h1>
                         <h1 className='text-3xl uppercase font-bold text-[#7E2553]'>PHONE NO.- <span className='font-semibold
                         pl-4 text-[#3B3486]'>{u.phone}</span></h1>
                         </div>
                         <div className='w-[50%]  flex gap-4 p-2 justify-evenly m-auto flex-col'>
                            <button className='mt-3 p-2  bg-[#B80000] border-2 border-[#B80000] w-[50%] m-auto text-xl font-bold text-white hover:border-2 hover:bg-white
                             hover:text-[#B80000] rounded' onClick={()=>handleDelete(u._id)}>Delete</button>
                            <button className='mt-3 p-2  border-2 border-[#294B29] bg-[#294B29] w-[50%] m-auto text-xl font-bold text-white hover:text-[#294B29]
                                     hover:bg-white rounded' onClick={()=>handleEdit(u._id)}>Edit</button>
                         </div>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default UserDetails