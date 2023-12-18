import Cards from '../Cards/Cards'
import './HomeWebPage.css'
import ServiceCards from '../Components/ServiceCards';

import Nbar from './Nbar';

const HomePage = () => {
    return(
        <>
      
     <div><Nbar/></div>
      
  
         <div className="container fs-2 p-3 fw-bold border border-black text-center">
    Welcome to IndyFIXER</div>
 
    <div className="container p-3 fw-bold text-center">
      <p className="fs-3 p-5 fw-bold">At IndyFixer, our mission is to provide exceptional services to our valued customers and communities. 
      We are dedicated to delivering quality workmanship, reliable solutions, and outstanding customer service. 
      With our team of skilled professionals, we always aim to exceed our customers' expectations, tackling each 
      home improvement and repair project efficiently and effectively. We strive to build lasting relationships with
      our clients, earning trust through our commitment to honesty, integrity, and transparency.  Our ultimate goal is
     to enhance functionality, comfort and aesthetic of homes, and ensure every customer's vision is brought to life.</p>
    
  </div>

  <div className="container border border-black">
    <div className=" text-center row fs-2 p-3"><strong>Overall Services</strong></div>
  </div>
 <div><ServiceCards/></div>
  <div className="container border border-black">
    <div className=" text-center row fs-2 p-3"><strong>Reviews</strong></div>
  </div>
  <div className="container pb-5  ">
  <div className="row align-items-center pb-5 fs-3">
    <Cards />
</div></div>


   <div className="col-sm fs-5 fs-2">           
    <footer className="footer bg-black text-white text-center position-relative">
        <p className="lead pb-5">Copyright &copy; 2023 IndyFIXER</p>
        <div  className="position-fixed bottom-0 end-0">
            </div></footer></div>
    </>
        
    )
}

export default HomePage
