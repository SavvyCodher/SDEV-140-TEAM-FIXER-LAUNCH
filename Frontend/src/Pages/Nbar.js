import {Link, useNavigate} from 'react-router-dom';
import './Nbar.css';
import {getAuth, signOut} from 'firebase/auth';
import useUser from '../hooks/useUser';


const Nbar = () => {
  const {user} = useUser();
  const navigate = useNavigate();
    return (

      <nav className="bg-black navbar-dark py-3">
      <div className="col-sm fs-5  pt-2  navbar-brand fs-2 ps-5"> 
        <div className=" justify-content-center">
    
          <img src="https://i.postimg.cc/wBf3kxrr/Final-Logo-2.png" width="200" height="120" alt="Logo"></img>
      </div>
    </div>
    <div className="row "/>
      <div className="btn toolbar align-items-center"> 
      <nav className="nav">
 <div className="row "/>
      <div className="btn toolbar align-items-center">         
<div className="links btn btn-group" role="group">
<Link to="/"><button className="btn btn-warning">Home</button></Link>
<Link to="/ourservices" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><button className="btn btn dropdown-toggle btn-warning dropdown">Our Services</button></Link>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li><a class="dropdown-item" href="/interior">Interior Design</a></li>
        <li><a class="dropdown-item" href="/Flooring">Flooring</a></li>
        <li><a class="dropdown-item" href="/Plumbing">Plumbing</a></li>
        <li><a class="dropdown-item" href="/house">Housekeeping</a></li>
        <li><a class="dropdown-item" href="/land">Landscaping</a></li>
        <li><a class="dropdown-item" href="/Mounting">Mounting</a></li>
        <li><a class="dropdown-item" href="/Pool">Pool Maintenance</a></li>
        <li><a class="dropdown-item" href="/security">Home Security</a></li>
   </ul>   
<Link to="/myjobs"><button className="btn btn-warning">My Jobs</button></Link>
<Link to="/alljobs"><button className="btn btn-warning">All Jobs</button></Link>
<Link to="/login"> {user
                    ? <button className="btn btn-warning" onClick= {() => {
                      signOut(getAuth());
                  }}> Log Out</button>
                    : <button className="btn btn-warning" onClick={() => {
                      navigate('/login');
                  }} >Log In</button>}</Link>     
                  

   <Link to="/create"><button className="btn btn-warning">CreateAccount</button></Link>
</div>  
</div>   
</nav>
</div>
</nav>

      
      );
}
 
export default Nbar;



