import React, { useEffect, useState } from 'react'
import '../Css/AboutMe.css'


function AboutMe() {
    const roles=['Senior Software Engineer','Custom Software Development Specialist','Java Backend Developer'];
    const [currentRoleIndex,setCurrentRoleIndex]= useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
      }, [currentRoleIndex]);

  return (
    <div className='aboutme'>
        <div>
          <h1>About Me</h1>
            <h3>Hello' My name is <b>Shubham Raj</b>.</h3>
            <h3>I am working as <b className='roles'>{roles[currentRoleIndex]}</b>.</h3>
            <h3> I have 6 Years of <b>Backend Development</b> experience.</h3>
            <h3>I born in <b>Bihar , Patna</b>.</h3>
            <h3>I did my Graduation in EEE ( Electrical and Electronics Engineering ) from <strong>Sathyabama University , Chennai </strong> <b>2014-2018</b> batch.</h3>
            <h3> I worked on Bank Domain , IAM ( Identity and Authentication ) Domain.</h3>
            <br></br>
            <h1>My Hobbies</h1>
            <h3>I like playing games like Cricket , Football . I like playing online games too.</h3>
            <h3>I like learning new Technologies.</h3>
        </div>
        <div>

        </div>

    </div>
  )
}

export default AboutMe