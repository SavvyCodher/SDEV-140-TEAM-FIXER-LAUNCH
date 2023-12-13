import Nbar from '../Pages/Nbar';
import './Flooring.css';
import useUser from '../hooks/useUser';




const Flooring = () => {

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
         Flooring Services</div>
       

   
       <div className="col-sm col p-4 fs-2">
          <p>IndyFIXER offers flooring services from experienced contractors that are licensed, bonded, and insured.  We are well qualified to meet your needs and deliver 100% satisfaction.  With our job right guarantee you can schedule with confidence and know that our job isn't done until it meets the customer standards. You can customize your service based on these flooring types: </p>
        </div>

    
 
  <div className="container align-items-center">
    <div className="container row bg-white-subtle p-4 justify-content-around">
    <div className="col-sm col "> 
    <div className="card h-100" style={{width: 225}}>
    <img src="https://i.postimg.cc/nMf9g5wT/vinyl.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
          <h5 className="card-title">Vinyl</h5>
     </div> </div></div>
     <div className="col-sm col"> 
    <div className="card h-100" style={{width: 225}}>
    <img src="https://i.postimg.cc/HkB9Kwb5/Hardwood-flooring.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
          <h5 className="card-title">Wood</h5>
     </div> </div></div>
     <div className="col-sm col"> 
    <div className="card h-100" style={{width: 225}}>
    <img src="https://i.postimg.cc/X7nFbZjg/laminate.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
          <h5 className="card-title">Laminate</h5>
     </div> </div></div>
     <div className="col-sm col"> 
    <div className="card h-100" style={{width: 225}}>
    <img src="https://i.postimg.cc/3xVddWTV/carpet.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
          <h5 className="card-title">Carpet</h5>
     </div> </div></div>
     <div className="col-sm col"> 
    <div className="card h-100" style={{width: 225}}>
          <img src="https://i.postimg.cc/RZ6059HR/tile.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
          <h5 className="card-title">Tile</h5>
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
            If you have any questions or would like ideas before you create a job, please request an online consultation to ensure we can handle your request in the most efficient way to meet your needs.  If you are ready to schedule click the post a job tab above to begin.
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
  
  export default Flooring;