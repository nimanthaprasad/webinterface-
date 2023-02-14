import React from 'react'
import './fpassword.css';
import profile from "../image/image2.png"
import { Link } from 'react-router-dom';

export default function fpassword() {
  return (
    <div>
    <div className="head">
     <a href="#/">Back</a>
     
    </div>
    <div className="flogo"> 
              <div>
                 <img src={profile} alt="profile" className="profile"/>

              </div>
           </div>
           
           <div className="fbox">
           <div className="fbox2">
            <div>
            <h1> <b>Forgot Password </b> </h1> 
             <div className="content"> <p>Enter the username we'll <br></br> help you creatw a new password</p></div>
             <div className="username1">
                
            <input type="text" placeholder='User Name' className="username"/>
            <div className="login-button">
           <button> <Link to="/cheak"> Next</Link> </button>  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <button> <Link to="/"> Back</Link></button> 
           </div> 
           </div>
            </div>
            
           

           </div>
           </div>
           
          
          
    </div>
    
  )
}
