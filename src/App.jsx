import './index.css'
import {BrowserRouter, Route , Routes, useLocation} from 'react-router-dom'
import Singup from './Singup';
import Login from './Login';
import Userform from './Useform';
import Recquery from './Recquery'; 
import Home from './Home';
import Navbar from './Navbar'
import Dashboard from './Dashboard';
import './assets/sb-admin-2.min.css'
import { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shownavbar from './Shownavbar';

function App() {

  const [spechange , setSpeChange] = useState('')
 

  const specificdata =(e)=> {
    const detail =e
    setSpeChange(detail)
  }
 
  
   const login = window.localStorage.getItem("isLogedIn");
  const googlelogin = window.localStorage.getItem("loginSuccess");
 

  return (
    <div>
    <BrowserRouter>

    <Shownavbar>
    <Navbar/>
    </Shownavbar>

    <Routes>
    <Route path="/register" element={<Singup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Dashboard/>}/>
    
    <Route path="/useform" element={<Userform spechange={spechange}/>}/>
    <Route path="/recquery" element={ <Recquery/>}/>
    <Route path="/home" element={<Home specificdata={specificdata}/>}/>
    </Routes>
    
    </BrowserRouter>
    </div>
  )
}

export default App
  