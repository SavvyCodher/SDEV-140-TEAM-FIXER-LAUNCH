import moment from "moment";
import useUser from "../hooks/useUser";
const AdsList = ({ ads }) => {
  const {user} = useUser()
  const ApplyToAd = async(jobid) => {
    try {
      const response = await fetch(http://localhost:3001/api/ads/${jobid}/apply, {
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

        <div className="card-group">
        <div className="row">



        {ads.map(ad => (

          <div className="col-lg">

            <div className="card m-3 text-center shadow" key={ad.UserId} >

              <div className="card-body text-dark">


                      <h4 className="card-title">{ad.ServiceRequest}</h4>

                      <p className="card-text text-secondary">
                          {ad.Desc}
                      </p>

                      <p className="card-text text-secondary">
                      {moment(ad.DateNeeded).format('MMM DD, YYYY')}

                      </p>
                      <p className="card-text text-secondary">
                        {ad.ZipCode}
                      </p>
                      <button onClick={() => ApplyToAd(ad._id)}>Apply</button>
                      </div>

              </div>
            </div>


        ))}
        </div>
        </div>
        </div>
    );
  }

  export default AdsList;
