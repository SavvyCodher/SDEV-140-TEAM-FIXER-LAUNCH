import { useEffect, useState } from "react";
import AdsList from "./AdsList";
import Nbar from './Nbar';
import useUser from '../hooks/useUser';

const AllJobs=() => {
    const {user, isLoading} = useUser();  // is the user logged in
    const [ads,setAds]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:3001/api/ads/')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                setAds(data);
            });
    },[]);

    return (
        <>
         <div><Nbar/></div>
              <br /> <br />
              {user
        ? <div className="alljobs">
            <h2 className="text-center">Job Postings </h2>
            <br/>
            
                {ads && <AdsList ads={ads}/>}</div>

        : <h2 className="text-center">You must be logged in to view this page.
            <br/>
        <a href="/login"><button className="btn bg-black btn-dark mt-3" >Log In</button></a></h2>}
       </>
    );

}

export default AllJobs; 
