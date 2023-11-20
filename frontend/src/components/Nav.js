import {Link} from "react-router-dom";
import "../Navst.css"
function Nav(){

    return(
<div className="navs">
<nav class="navbar navbar-expand-lg " >
  <div class="container-fluid">
  <Link to="/Home" class="nav-link" style={{backgroundColor:"aqua",paddingRight:"10px",fontWeight:"bold"}}>ONLINE VOTING APP</Link>
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
     
        <li className="nav-item" >
          <Link to="/Home" class="nav-link" style={{color:"black"}}>HOME</Link>
        </li>
        <li class="nav-item">
          <Link to="/login-user-list" class="nav-link"  style={{color:"black"}}>Voters List</Link>
        </li>
        <li class="nav-item">
          <Link to="/#" class="nav-link"  style={{color:"black"}}>NEWS</Link>
        </li>
       
        <li class="nav-item">
          <Link to="/contact" class="nav-link"  style={{color:"black"}}>CONTACT</Link>
        </li>

        <li class="nav-item">
          <Link to="/#" class="nav-link"  style={{color:"black"}}>About</Link>
        </li>


      </ul>
      <form class="d-flex" >
            
          <button class="btn btn-light" type="button" style={{paddingRight:"10px"}}>  <Link to="/Admininside" class="nav-link" >Admin</Link></button>
          <button class="btn btn-light"  type="button"><Link to="/user-inside" class="nav-link">User</Link> </button>
        </form>
    </div>
  </div>
</nav>
    
</div>
        
    )
     
    
}
export default Nav;