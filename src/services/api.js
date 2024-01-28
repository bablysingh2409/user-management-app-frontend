import axios from "axios";

export const signup=async(userData)=>{
    try{
        const res=await axios.post('https://user-management-wph0.onrender.com/auth/signup',userData);
        // const data=await res.data;
        // console.log(data);
        return res;
    }catch(err){
        //  console.log(err);
         return err;
    }
}

export const login=async(userData)=>{
    try{
        const res=await axios.post('https://user-management-wph0.onrender.com/auth/login',userData);
        // const data=await res.data;
        // console.log(res)
        return res;
    }catch(err){
        //  console.log(err);
         return err;
    }
}