import React, { useEffect, useState } from 'react';
import "./index.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Singup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState({})

  const navigate = useNavigate()

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const validation = {}
    if(!name.trim()){
      validation.name ="Name is required"
    }
    if(!email.trim()){
      validation.email = "email is required"
    }
    if(!password.trim()){
      validation.password = "password is required"
    }
    setError(validation)
    if(Object.keys(validation).length === 0){
     await axios.post('https://capstone-ba.onrender.com/register',{name,email,password})
    .then(result => {
      if(result){
      navigate('/login')
      window.location.reload()
      }else{
        console.log("posted");
      }
    })
    .catch(err => console.log(err,"post error"))
  }
    }
    
 

  return (
    <div className='total-page2'>
    <div className='total-back'>
    <div className='total-input'>
    <form onSubmit={handleSubmit} autoComplete="on">
    <div className='input1'>
    <h4  className='title1'>Create an Account</h4>
      <input className='input-name' autoComplete="input-name"  name='name' placeholder='username' onChange={(e)=>setName(e.target.value)}></input>
      <br/>{error.name && <span className="errorform">{error.name}</span>}
      <input className='input-mail' autoComplete="input-mail" type='email' name='email' placeholder='Enter E-mail Address..' onChange={(e)=>setEmail(e.target.value)}></input>
      <br/>{error.email && <span className="errorform">{error.email}</span>}
      </div>
      <div className='input2'>
      <input className='input-pass' name='password' placeholder='password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
      <br/>{error.password && <span className="errorform">{error.password}</span>}
      </div>
      <div className='button'>
      <button className='login-button' type='submit' >signup</button>
      </div>
      </form>
      <hr/>
      <div className='bottom-fp'>
      <Link className='bottom-fp1'>Forget password?</Link><br/>
      <Link className='bottom-fp2' to="/login">Already have an account</Link>
      </div>
      
    </div>
    </div>
    </div>
  )
}

export default Singup
// <p style={{color:"red"}}>{mesage}</p>