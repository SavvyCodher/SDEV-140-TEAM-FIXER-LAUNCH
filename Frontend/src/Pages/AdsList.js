import moment from "moment";
import useUser from "../hooks/useUser";
const AdsList = ({ ads }) => {
  const {user} = useUser()
  const ApplyToAd = async(jobid) => {
    try {
      const response = await fetch(`http://localhost:3001/api/ads/${jobid}/apply`, {
          method: "PUT",
          body: JSON.stringify({applicantid:user.uid}),
          headers: {
              "Content-Type": "application/json"
          }
      })
      if (response.ok) {
          alert("Successful")
          //navigate("/myjobs")
      } else {
          //setError("Please fill out all fields")
      }

  } catch (error) {
      console.log(error)
  }
  }


    return (
      <div className="ads-list">
        <div className="container">
        <div className="card-group">
          <div className="row">

            {ads.map(ad => (
                <div className="col-sm col mb-4">

                    <div className="card m-3 text-center shadow" key={ad.UserId}>

                              <div className="card-header">
                                Date Needed: {moment(ad.DateNeeded).format('MMM DD, YYYY')}
                              </div>


                              <div className="card-body text-dark">

                                <h5 className="card-title">{ad.ServiceRequest}</h5>
                                <p className="card-text">{ad.Desc}</p>
                                <p className="card-text">{ad.City}</p>
                                <button class="btn btn-dark" onClick={() => ApplyToAd(ad._id)}>Apply</button>
                              </div>


                              <div className="card-footer text-muted">
                                Posted on: {moment(ad.DatePosted).format('MMM DD, YYYY')}
                              </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div></div>
  
  );
  }
   
  export default AdsList;
