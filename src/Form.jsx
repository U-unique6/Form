import React ,{useState} from "react";
import { UserIcon , PasswordIcon , EmailIcon } from "./Icon";
const Form=()=>{

    const[active , setActive]=useState("Sign Up");

   
    return(
        <>
    <div className="container d-flex justify-content-center align-items-center">
        <div className="form py-5 px-5 ">
            <div className="header d-flex justify-content-center flex-column align-items-center ">
                <div className="text my-2">{active}</div>
                <div className="underline mb-2">
                </div>
                </div>
                <div className="inputs">        
                {
                    active==="Sign Up" ?<div className="input d-flex align-items-center position-relative">
                <UserIcon/>
                    <input type="text" placeholder="Enter Your Name"/>
                    
                </div> : null
                }
                <div className="input d-flex align-items-center position-relative">
                
               <EmailIcon/>
                    <input type="email" placeholder="Enter Your Email"/>

                </div>
                <div className="input d-flex align-items-center position-relative">
              <PasswordIcon/>
                    <input type="password" placeholder="Enter Password"/>
                </div>
                </div>
                <div className="forget-password mt-2">Lost Password?<span>Check Here!</span></div>
                <div className="submit-container d-flex justify-content-around mt-4">
                    <div className="submit" onClick={()=>setActive("Sign Up")}>Sign Up</div>
                    <div className="submit" onClick={()=>setActive("Login")}>Login</div>
                </div>
           
        </div>
    </div>
        </>
    )
}

export default Form;