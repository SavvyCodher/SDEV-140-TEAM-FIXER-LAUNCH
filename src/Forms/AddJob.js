import './AddJob.css'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nbar from '../Pages/Nbar';
import useUser from '../hooks/useUser';

const Categories = ["Interior Design", "Flooring", "Plumbing", "Housekeeping", "Landscaping", "Mounting", "Pool Maintenance", "Home Security" ]

const AddJob = () => {
  const [ServiceRequest, setServiceRequest] = useState('');
  const [Desc, setDesc] = useState('');
  const [DatePosted, setDatePosted] = useState('');
  const [JobCategory, setJobCategory] = useState('');
  const [DateNeeded, setDateNeeded] = useState('');
  const [TimeSlot, setTimeSlot] = useState('');
  const [Email, setEmail] = useState('');
  const [City, setCity] = useState('');
  const [ZipCode, setZipCode] = useState('');  
  //const [Applicants, setApplicants] = useState('');
  const [Accepted, setAccepted] = useState(false);
  const [ApprovedApplicant, setApprovedApplicant] = useState('');
  const [error, setError] = useState(''); 

    //remove? const {user, isLoading} = useUser();  //is the user logged in
    const {user} = useUser();  //is the user logged in
    //const {user:{ uid:UserId }} = useUser();  //is the user logged in
    //const {user} = useUser();  //is the user logged in
    //console.log(user.uid)

      const navigate = useNavigate();  
        
      const SubmitJob = async (e) => {
        e.preventDefault()
        const NewJob = {
          ServiceRequest, Desc, DatePosted, JobCategory, DateNeeded, TimeSlot, Email:user.email, City, ZipCode, UserId:user.uid, Accepted, ApprovedApplicant
        }
        console.log(NewJob)
        // const NewJob = {
        //   ServiceRequest, Desc, DatePosted, JobCategory, DateNeeded, TimeSlot, Email, City, ZipCode, UserId:user.uid
        // }
        try {
            const response = await fetch("http://localhost:3001/api/ads/", {
                method: "POST",
                body: JSON.stringify(NewJob),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.ok) {
                alert("Successful")
                navigate("/myjobs")
            } else {
                setError("Please fill out all fields")
            }

        } catch (error) {
            console.log(error)
        }
    }
      //can we add a statement above that navigates the user to the my jobs page after adding a job
      // date posted and date needed do not show up as placeholders

return( 
  <>
  <div><Nbar/></div>
    <div className="createJobs">
      <br />
      <br />
      <h2>Post a Job</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={SubmitJob}>
      <label>Service Request:</label>
      <select   
        required
        placeholder="Service Request"            
        value={ServiceRequest}
        onChange={e => setServiceRequest(e.target.value)}>
        <option value="">Please Select a Category</option>  
        { Categories.map(service => (<option value={service}>{service}</option>) )}
      </select>        
        <label>Job Description</label>
        <textarea 
          type="text"
          rows="4" 
          cols="50"
          //required 
          value={Desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <label>City</label>
        <textarea 
          type="text"
          rows="1" 
          cols="50"
          //required 
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <label>Job Posted Date</label>
        <input 
          type="date" 
          //required 
          value={DatePosted}
          onChange={(e) => setDatePosted(e.target.value)}
        /> */}
        
        
        <label>Service Needed By</label>
        <input 
          type="date" 
          //required 
          value={DateNeeded}
          onChange={(e) => setDateNeeded(e.target.value)}

        />
        <label>Service Time Slot</label>
        <input 
          type="time" 
          //required 
          value={TimeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        />
        {/* <label>Email address</label>
        <input 
          type="text" 
          //required 
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        /> */}
        <div>
        <h5 className="card-title">
        
        {user 
      ? <a href="/AddJob" className="btn bg-black btn-dark mt-3" onClick={SubmitJob}>Post Job</a>
      : <button className="btn bg-black btn-dark mt-3" >Login to Post Jobs</button>} 
      </h5>
        </div>

      </form>
    </div>
 

   
    </>
    );
}


export default AddJob;
