import axios from "axios";


export const addNewUser=async(userData)=>{
    try{
      const res=await axios.post('http://localhost:5500/user/users',userData);
      const data=await res.data;
      return data;
    }catch(err){
        return err;
    }
}

export const getAllUser=async()=>{
    try{
    const res=await axios.get('http://localhost:5500/user/users');
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

export const deleteUser=async(userId)=>{
    try{
    const res=await axios.delete(`http://localhost:5500/user/users/${userId}`);
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

export const updateUser=async(userId)=>{
    try{
    const res=await axios.put(`http://localhost:5500/user/users/${userId}`);
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}