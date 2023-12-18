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
        :   <h2  className="text-center">You must be logged in to view this page.
            <br />
            <a href="/login"><button className="btn bg-black btn-dark mt-3" >Log In</button></a>
            </h2>
            }

            <div className="container">
            {jobs.length ? (
                <div className="card-group">
                    <div className="row">
                        {jobs.map (job => (
                            <div className="col-sm col mb-4">

                                <div className="card text-center shadow m-3" key={job.UserId} >

                                        <div className="card-header">
                                                Date Needed: {moment(job.DateNeeded).format('MMM DD, YYYY')}                                        
                                        </div>
                                        <div className="card-body text-dark">

                                                    <h5 className="card-title">{job.ServiceRequest}</h5>

                                                    <p className="card-text text-secondary">
                                                        {job.Desc}
                                                    </p>
                            
                                                    {job.Accepted ? (

                                                                <>
                                                                <table class="table">
                                                                <thead>
                                                                <tr>
                                                                    <th colspan="2">Fixer Applicants</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">{job.ApprovedApplicant.substring(0,7).toUpperCase()}</th>
                                                                    <td><button type="button" class="btn btn-success float-end" text="white">Approved</button></td>
                                                                </tr>
                                                                </tbody>
                                                                </table>
                                                                </>

                                                   
                                                    ) : (
                                                        <ul style={{listStyle:"none",paddingLeft:0}}>
                                                            {job.Applicants.map(applicant=>(
                                                                <>
                                                                <table class="table">
                                                                <thead>
                                                                  <tr>
                                                                    <th colspan="2">Fixer Applicants</th>
                                                                  </tr>
                                                                </thead>
                                                                <tbody>
                                                                  <tr>
                                                                    <th scope="row">{applicant.substring(0,7).toUpperCase()}</th>
                                                                    <td><button onClick={() => approveApplicant(job._id,applicant)}> Approve</button></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                              </>
                                                              
                                                                // <li><a>Fixer {applicant.substring(0,5)}</a> <button onClick={() => approveApplicant(job._id,applicant)}> Approve</button></li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                

                                        </div>
                                        
                                </div> 
                            </div>   
                        ))}
                    </div>
                </div>
            ):(
                <h2></h2>

            )}
</div>
        </>
    );
}
 
export default MyJobs;
