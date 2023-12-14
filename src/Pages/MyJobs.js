import Nbar from './Nbar';
import useUser from '../hooks/useUser';
import { useState, useEffect } from 'react';
import moment from 'moment';


const MyJobs = () => {
    const[jobs, setJobs] = useState([])    
    const {user} = useUser();  // is the user logged in
    //console.log(user?.uid)
    console.log({jobs})

    const GetUserJobs = async () => {
        const response = await fetch (`http://localhost:3001/api/ads/?uid=${user?.uid}`)
        const UserJobs = await response.json()
        console.log(UserJobs)
        setJobs(UserJobs)
        }
    useEffect(() => {
        if(user){
            GetUserJobs()
        } 
    }, [user])

    const approveApplicant = async(jobId, applicant) =>{
        await fetch (`http://localhost:3001/api/ads/${jobId}/approve`,{
            method:"PUT",
            body:JSON.stringify({
            ApprovedApplicant: applicant
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        GetUserJobs()
        //console.log(`approved applicant ${applicant}`)
    }
    return ( 
        <>
              <div><Nbar/></div>
           
            
            <br /> <br />
              {user
        ? <h2 className="text-center">My Jobs</h2>
        : <h2  className="text-center">You must be logged in to view this page.
            <br />
            <a href="/login"><button className="btn bg-black btn-dark mt-3" >Log In</button></a></h2>}
            {jobs.length ? (
                <div className="card-group">
                    {jobs.map (job => (

                                    <div className="card text-center shadow m-2" key={job.UserId} >

                                    <div className="card-body text-dark">


                                            <h4 className="card-title">{job.ServiceRequest}</h4>

                                            <p className="card-text text-secondary">
                                                {job.Desc}
                                            </p>

                                            <p className="card-text text-secondary">
                                           {moment(job.DateNeeded).format('MMM DD, YYYY')}

                                            </p>
                                            <p className="card-text text-secondary">
                                            {job.City}
                                            </p>
                                            {job.Accepted ? (
                                            <p>Fixer{job.ApprovedApplicant.substring(0,5)}<span style={{display:"inline-block",padding:5,background:"limegreen",color:"white"}}>Approved</span></p>
                                            ) : (
                                                <ul style={{listStyle:"none",paddingLeft:0}}>
                                                    {job.Applicants.map(applicant=>(
                                                        <li><a>Fixer{applicant.substring(0,5)}</a><button onClick={() => approveApplicant(job._id,applicant)}>Approve</button></li>
                                                    ))}
                                                </ul>
                                            )}

                                    </div>
                                    <div class="card-footer bg-transparent border-success">
                                    <button>Apply</button>
                                    </div>
                                    </div>
                    ))}
                </div>
            ):(
                <h2></h2>  

            )}
        </>
     );
}
 
export default MyJobs;
