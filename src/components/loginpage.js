import './loginpage.css';
import profile from "../image/image2.png"
import profile1 from "../image/image1.png"
import { Link } from 'react-router-dom';


function Loginpage() {
  return (
    /* Background image */
    <div         style={{
        backgroundImage: 'url('+profile1+')',
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5"
      }}>
       <div className="mainApp">
     
    <div className="sub-main">
       
      <div> 
        
           <div className="imgs"> 
              <div className="container-image">
                 <img src={profile} alt="profile" className="profile"/>

              </div>
           </div>
           <div>
                <input type="text" placeholder='User Name' className="username"/> 
           </div>
           <div className="second-input">
                <input type="text" placeholder='Password' className="username"/>
           </div>
           <div className="login-button">
                <button> Login </button>
           </div>
           <div>
                <p className="link"> 
                <Link to="fpassword"> Forgot Password</Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href='r'>Remember me</a>
              
            </p>
           </div>
      </div>

    </div>
    
      
    </div> 
    </div>
    
 
  );
}

export default Loginpage;