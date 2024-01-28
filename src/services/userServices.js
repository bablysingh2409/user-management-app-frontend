import axios from "axios";


export const addNewUser=async(userData)=>{
    try{
      const res=await axios.post('https://user-management-wph0.onrender.com/user/users',userData);
      const data=await res.data;
      return data;
    }catch(err){
        return err;
    }
}

export const getAllUser=async()=>{
    try{
    const res=await axios.get('https://user-management-wph0.onrender.com/user/users');
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

export const deleteUser=async(userId)=>{
    try{
    const res=await axios.delete(`https://user-management-wph0.onrender.com/user/users/${userId}`);
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

export const updateUser=async(userData)=>{
    try{
    const res=await axios.put(`https://user-management-wph0.onrender.com/user/users/${userData._id}`,userData);
    const data=await res.data;
    return data;
    }catch(err){
        return err;
    }
}

