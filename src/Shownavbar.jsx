import React from 'react'
import { useEffect,useState } from 'react'
import { useLocation } from 'react-router-dom'

const Shownavbar = ({children}) => {

    const location = useLocation();
    const [showNav, setShowNav] = useState(false)

    useEffect(()=>{
        if(location.pathname === "/login"){
            setShowNav(false)
        }else if(location.pathname === "/register"){
            setShowNav(false)
        }else{
            setShowNav(true)
            console.log("true");
        }
    },[location])
  return (
    <div>
      {showNav && children}
    </div>
  )
}

export default Shownavbar
