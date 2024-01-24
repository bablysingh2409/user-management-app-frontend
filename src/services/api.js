import axios from "axios";

export const signup=async(userData)=>{
    try{
        const res=await axios.post('http://localhost:5500/auth/signup',userData);
        const data=await res.data;
        console.log(data);
        return data;
    }catch(err){
         console.log(err);
    }
}

export const login=async(userData)=>{
    try{
        const res=await axios.post('http://localhost:5500/auth/login',userData);
        const data=await res.data;
        return data;
    }catch(err){
         console.log(err);
    }
}