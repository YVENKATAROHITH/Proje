import React,{useState} from 'react'
import VotersForm from './VotersForm'
import Axios from "axios";
export default function CreateStudent() {
  const [arr,setArr] =useState([]);
  const getState = (childData ) =>{
    setArr(childData)
  
  }
  const handleSubmit = (event)=>{
    const data = {name:arr[0],email:arr[1],password:arr[2]};
    Axios.post("http://localhost:4000/studentRoute/create-student",data)
    .then((res)=>{
      if(res.status === 200 ){
      alert("record add successfully");}
    else{
     Promise.reject();}
    })
    .catch((err)=>alert(err));
    event.target.reset();
   
  
  }
  return (
    
    <form onSubmit={handleSubmit}>
 <VotersForm getState={getState}/>
    </form>
  )
}
