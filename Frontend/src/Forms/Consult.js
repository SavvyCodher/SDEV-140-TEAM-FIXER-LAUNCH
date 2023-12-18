import Nbar from '../Pages/Nbar';
import useUser from '../hooks/useUser';
import { useState } from "react";
import './Consult.css';

const Categories = ["Interior Design", "Flooring", "Plumbing", "Housekeeping", "Landscaping", "Mounting", "Pool Maintenance", "Home Security" ]

const Consult = () => {
  const [consultdate, setDatePosted] = useState('');
  const [consultservices, setJobCategory] = useState('');
  const [consultemail, setCustomerEmail] = useState('');
  const [body, setBody] = useState('');

  const {user, isLoading} = useUser();  // is the user logged in
  const handleClickAgain = () => {
        alert("We will contact you soon!")
      }

    return( 
     <>
        <div><Nbar/></div>
        <div className="consulting">
          <br />
          <br />

      <h2>Consultation Form</h2>
    {/*  {error && <p className="error">{error}</p>} do we need a fetch request and error statement*/}  
      <form>
      <label>What are you consulting about:</label>
      <select
               
                value={consultservices}
                onChange={e => setJobCategory(e.target.value)}>
                { Categories.map(service => (<option value={service}>{service}</option>) )}
            </select>
        <label>Date</label>
        <input 
          placeholder="Date"
          type="date" 
          value={consultdate}
          onChange={(e) => setDatePosted(e.target.value)}

        />

        <label>Contact email address</label>
        <input 
          type="text" 
          value={consultemail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />

        <label>Reference:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>


<div>
  {user
      ? <button><a href="/" className="btn bg-black btn-dark mt-3"onClick={handleClickAgain}>Submit</a></button>
      : <button className="btn bg-black btn-dark mt-3" >Log In to Request Consult</button>}
    </div>
      </form>
    </div>
    </>
        )
  }
    
    
    export default Consult;