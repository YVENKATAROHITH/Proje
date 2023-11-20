import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Axios from 'axios';
import VotersForm from '../components/VotersForm'
export default function EditStudent() {
    const {id} = useParams();
    useEffect(()=>{
        Axios.get("http://localhost:4000/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status===200)
            console.log(res);
        else
         Promise.reject();
        })
        .catch((err)=>alert(err))
    },[id])
  return (
  
    <form>
        
        <VotersForm/>
      
    </form>
  )
}
