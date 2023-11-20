
import Axios from "axios";
import { Link } from 'react-router-dom';


function VoterListRow(props) {
  const {name,email,password,_id} = props.obj;

  const handleClick = ()=>{
    Axios.delete("http://localhost:4000/studentRoute/delete-student/" + props.obj._id)
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
        <td>{name}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>
        <button class="btn btn-success">
          <Link class="text-decoration-none text-light" to={"/edit-student/"+ _id}>Edit</Link>
        </button>
    

          <button onClick={handleClick} class="btn btn-danger">
            Delete
           </button >
        </td>
    </tr>
  )
}
export default VoterListRow;