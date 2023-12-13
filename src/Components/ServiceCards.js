const ServiceCards = () => {
    return ( 
        <>
        <div className="container align-items-lg-stretch">
    <div className="container row bg-white-subtle p-4 justify-content-around">
   
      <div className="col-sm col mb-4">
        <div className="card  h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/T1gQbXht/Interior-Design.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Interior Design</h5>
            <p className="card-text"> Luxury, innovative solutions, curated in unique styles to fit your needs. We provide
              support with all phases of the design process.
           
            <a href="/interior" className="btn btn-primary mt-3">Learn More</a> </p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/L6q2rCwN/TV-mount.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Mounting</h5>
            <p className="card-text">Offering fast and accurate mounting services. We can handle basic and custom mounting to beautify and declutter your space.
            <a href="/Mounting" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
   
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/4y7qFMyc/plumbing.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Plumbing</h5>
            <p className="card-text">Offering full service repair and maintenance services. We help you develop the best plan for your plumbing or drainage needs.
            <a href="/Plumbing" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/BZFGpLKV/Landscape.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Landscaping</h5>
            <p className="card-text">From weekly mowing to custom landscapes we are ready to get your project off the ground. Let us enhance your curb appeal.
            <a href="/land" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/bwCMppnn/Housekeeping.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Housekeeping</h5>
            <p className="card-text">Providing solutions for residential and commercial cleaning needs. Give us a try and we'll get the job done right the first time.
            <a href="/house" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
   
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/9Mtrw8CG/Flooring.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Flooring</h5>
            <p className="card-text">Providing solutions for residential and commercial flooring needs. We've got you covered for complete repairs and installs.
            <a href="/flooring" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
   
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/brhV3v77/images-1.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Pool Maintenance</h5>
            <p className="card-text">We provide testing and maintenance services to maintain your private spa and keep you swimming as long as the weather allows. 
            <a href="/Pool" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    
      <div className="col-sm col mb-4">
        <div className="card h-100" style={{width: 250}}>
          <img src="https://i.postimg.cc/hvcMV5xg/Home-Security.jpg" className="card-img-top" alt="..." width="150px" height="150px"/>
          <div className="card-body border primary">
            <h5 className="card-title">Home Security</h5>
            <p className="card-text">We provide initial consulting services to get you the right protection for your home when you need it; then we install it for you.
            <a href="/security" className="btn btn-primary mt-3">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

        
        </>
     );
}
 
export default ServiceCards;