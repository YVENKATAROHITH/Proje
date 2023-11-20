import React from 'react'
import { Link } from 'react-router-dom'
import '../Homesty.css'
export default function Home() {
   
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&usqp=CAU';
    const adimageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7nFdX1g_CVR4WyP5LgKOGytP0J8PE53_RQ&usqp=CAU';
  return (
    
    
   
    <div className='Homep'>
    
    <center>

<div class="container text-center">
  <div class="row">
    <div class="col" style={{paddingLeft:"200px"}}>
    <div className="card" style={{ width: "18rem" }}>
  <img src={adimageUrl}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">SignUp or Login as a Admin</h5>
    <p className="card-text">
   
    </p>
    <div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <button className="btn btn-outline-success me-2" type="button" >  <Link to="/Admin" class="nav-link">SignUp</Link></button>
    </div>
    <div class="col">
    <button className="btn btn-outline-success me-2" type="button" >  <Link to="/loginad" class="nav-link">Login</Link></button>
    </div>
  </div>
  </div>
      
    </div>
      
  
  </div>
</div>

      
    </div>
    <div class="col">
    <div className="card" style={{ width: "18rem" }}>
  <img src={imageUrl}className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">WELCOME TO ONLINE VOTING APP</h5>
    <p className="card-text">
   
    </p>
    <div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <button className="btn btn-outline-success me-2" type="button" >  <Link to="/create-student" class="nav-link">SignUp</Link></button>
    </div>
    <div class="col">
    <button className="btn btn-outline-success me-2"  type="button"><Link to="/login" class="nav-link">Login</Link> </button>
    </div>
  </div>
      
      
    </div>
    </div>
      
  
  </div>
</div>


</div>
    </div>
   
  </div>
  </center>
</div>

    
  )
}
