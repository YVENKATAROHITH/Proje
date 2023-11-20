import React from 'react'
import { Link } from 'react-router-dom';
export default function Adinside() {
  
  
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvgRMad98wVTdc-qAMIhYEF6tJ0QVKdJ03oA&usqp=CAU';
  return (
    <div className='Homep'>
    <center>
    <div className="card" style={{ width: "18rem" }}>
  <img src={imageUrl}className="card-img-top" alt="..." />
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
    <button className="btn btn-outline-success me-2"  type="button"><Link to="/loginad" class="nav-link">Login</Link> </button>
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
