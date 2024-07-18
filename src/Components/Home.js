import React from 'react';
import '../Css/Home.css';
import AboutMe from './AboutMe';

function Home() {
  return (
    <div className="HomeMain">
      <div className="Half">
        <div>
          <img
            className="passport-image"
            src="https://firebasestorage.googleapis.com/v0/b/myportfolio-ee684.appspot.com/o/Shubham.jpeg?alt=media&token=e4530d7e-0d96-4c1c-8f62-6c5157ed49fc"
            alt="Shubham Raj Image"
          />
        </div>
        <div className='HalfData'>
          <h3><b>Email :</b> <span>sr1226035@gmail.com</span></h3>
          <h3><b>Phone No :</b> <span>8248154199</span> </h3>
          <h3><b>Birthday :</b> <span>19th Oct</span> </h3>
          <h3><b>Location :</b> <span>Chennai, India</span>  </h3>
        </div>
      </div>
      <div className='middleLine' style={{backgroundColor:'white',width:'20px', marginLeft:'5px',marginRight:'25px',backgroundColor:'chocolate'}}>
        
      </div>
      <div className="Half">
        <AboutMe />
      </div>
    </div>
  );
}

export default Home;
