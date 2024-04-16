import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [det , setDet] = useState()
  const navigate = useNavigate();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("loginSuccess",true)
    axios.post("https://capstone-ba.onrender.com/login", { email, password })
      .then((result) => {console.log(result)
        if (result.data == "success"){ 
          navigate("/");
          // window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

   
 useEffect (()=>{ 
  if(det === true){
    
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("loginSuccess",true)
    navigate('/')
  }
 },[det])


  return (
    <div className="total-page">
      <div className="total-back">
        <div className="total-input">
          <form onSubmit={handleSubmit}>
            <div className="input1">
              <h4 className="title1"> Welcome </h4>
              <input
                className="input-mail"
                placeholder="Enter E-mail Address"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input2">
              <input
                className="input-pass"
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="button">
              <button className="login-button" type="submit">Login</button>
            </div>
            <hr/>
            <div className="but-s">
              <button className="but-google">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const credentialResponseDecoded = jwtDecode(
                      credentialResponse.credential
                    );
                    
                    console.log("login success");
                    
                    setDet(credentialResponseDecoded.
                      email_verified)
                      
                    // window.location.reload();
                  }}
                  onError={(err) => {
                    console.log(err,"Login Failed");
                  }}
                  
                />
                
                {""}
              </button>
            </div>
          </form>
          <hr />
          <div className="bottom-fp">
            <Link className="bottom-fp1">Forget password?</Link>
            <br />
            <Link className="bottom-fp2" to="/register">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
