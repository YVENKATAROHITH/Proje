import React from 'react'
import Axios from "axios";

function AdminlistRow(props) {
  const {id,email,password} = props.obj;
  
  const handleClick = ()=>{
    Axios.delete("http://localhost:4000/studentRoute/delete-Admin/" + props.obj._id)
    .then((res)=>{
      if(res.status === 200){
      alert("Record deleted");
    window.location.reload();}
    else
     Promise.reject();
    


    })
    .catch((err) => {
      console.log(err);
    });

     
  }
 

  return (
    <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>
        

          <button onClick={handleClick} class="btn btn-danger">
            Delete
           </button >
        </td>
    </tr>
  )
}
export default AdminlistRow;