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
      </div>
      <div className="Half">
        <AboutMe />
      </div>
    </div>
  );
}

export default Home;
