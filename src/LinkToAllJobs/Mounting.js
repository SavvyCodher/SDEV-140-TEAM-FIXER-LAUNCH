import Nbar from '../Pages/Nbar';
import './Mounting.css'
import useUser from '../hooks/useUser';


const Mounting = () => {

  const {user, isLoading} = useUser();  // is the user logged in

  const handleClick = () => {
    
    //redirect to add a job form//
    console.log("Take me to the flooring form");
  }

  const handleClickAgain = () => {
    console.log("consult");
  }
   return(
<>
<div><Nbar/></div>

     
 
        <div className="container fs-2 p-3 fw-bold text-center">
        Mounting Services</div>
  

   
       <div className="col-sm col p-4 fs-2">
         <p>IndyFIXER allows experienced individuals in mounting to offer their expertise to help serve the public in need of lawn services.  We are well qualified to meet your needs and deliver 100% satisfaction.  With our job right guarantee you can schedule with confidence and know that our job isn't done until it meets the customer standards. </p>
       </div>

         <div className="container align-items-center">
    <div className="container row bg-white-subtle p-4 justify-content-around">
    <div className="col-sm col">  
       <div className="card h-100" style={{width: 225}}>
       <img src="https://i.postimg.cc/zB1SFtGT/061-A4059-scaled.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Garage Storage Mounting</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/m2xzzzhF/c60477-7a7635e3c830447a96c532fcfd9810de-mv2.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">TV Mounting</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/mkNhQj6p/Designsby-Donnie-Donnie-Galli-FY22-Summer-Ceiling-Beam-Header2.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Beam Mounting</h5>
     </div> </div></div>
     <div className="col-sm col"> 
     <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/9M8P6pLf/entertainment-wall.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Home Theater</h5>
     </div> </div></div>
     <div className="col-sm col"> 
         <div className="card h-100" style={{width: 225}}>
         <img src="https://i.postimg.cc/J4yfg0QK/apartmenttherapy.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
         <div className="card-body border primary">
         <h5 className="card-title">Artwork Mounting</h5>
     </div> </div></div>
  <div className="card-footer  text-muted">
  <h5 className="card-title">
  {user 
      ? <a href="/AddJob" ><button className="btn bg-black btn-dark mt-3" onClick={handleClick}>Post Job</button></a>
      : <a href="/login" ><button className="btn bg-black btn-dark mt-3" >Log In to Post Jobs</button></a>}  
     
  {user
      ? <a href="/Consult" className="btn bg-black btn-dark mt-3"onClick={handleClickAgain}>Consult FIXER</a>
      : <a href="/login" ><button className="btn bg-black btn-dark mt-3" >Log In to Request Consult</button></a>}
      </h5>
            </div>
            </div>
            </div>
      <p className="col-sm col p-4 fs-2">
           If you have any questions or would like ideas before you create a job, please request an online consultation to ensure we can handle your request in the most efficient way to meet your needs.  If you are ready to schedule click the add a job tab above and someone will contact you.
         </p>
    

         <div className="col-sm fs-5 fs-2">           
    <footer className="footer bg-black text-white text-center position-relative">
        <p className="lead pb-5">Copyright &copy; 2023 IndyFIXER</p>
        <div  className="position-fixed bottom-0 end-0">
    </div>
</footer>
       </div>

     
   

  
     
     </>
   )
 }
 
 export default Mounting;
         
        
    
           
