import React,{useState} from 'react'
import '../signupst.css'
export default function StudentForm(props) {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword]= useState("")
  
    const arr = [name,email,password];
    const handleClick=()=>{
      props.getState(arr);
    }
  return (
    
    <div className='signup'>
  <center>

    
<div className="card" style={{width: '30rem'}}>

<div className="card-body">
<form>
 
 <div className="mb-3">
   <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
   <input onChange={(event)=>setName(event.target.value)}  className="form-control my-3" placeholder="Enter your Name"/>

 
 </div>
 <div className="mb-3">
   <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
   <input onChange={(event)=>setEmail(event.target.value)}className="form-control my-3" placeholder="Enter your email" />
 </div>
 <div className="mb-3">
   <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
   <input type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control my-3" placeholder="Enter your Password"/>
 </div>
 <button onClick={handleClick} className="btn btn-primary" type="button">SignUp</button>
</form>
</div>
</div>
</center>
    </div>
  )
}

