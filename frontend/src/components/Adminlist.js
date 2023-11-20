import React,{useEffect}from 'react'
import {useState} from 'react'
import Axios from "axios";
import AdminlistRow from './AdmionlistRow';


export default function Adminlist() {
  const [arr,setArr] = useState([]);
  useEffect(()=>{
    Axios.get("http://localhost:4000/studentRoute/Admin")
    .then((res)=>{
      if(res.status===200)
      setArr(res.data);
    else
    Promise.reject();


    })
    .catch((err)=>alert(err));
  },[])

  const ListItems = ()=>{
    return arr.map((val,ind)=>{
      return <AdminlistRow obj={val}/>
    })
  }

  return (
    <h1>
      <table className="table table-bordered table-striped table-success">
        <thead>
          <tr>
            <th className="text-center">id</th>
            <th className="text-center">Email</th>
            <th className="text-center">Password</th>
            <th class="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {ListItems()}
        </tbody>
      </table>
    </h1>
  )
}
