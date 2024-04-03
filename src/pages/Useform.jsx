import React, { useState ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./pag.css";


const Userform = ({spechange}) => {
const [data , setData] = useState('')

const callApi =async ()=>{
  try{
      setData(spechange) 
  }catch(err){
      console.log("There is an error");
  }
}


useEffect(()=>{
  callApi()
},[spechange])


  return (
    <div>
       <div style={{ margin: "10px" }}>
          <Link to="/home" className="btn btn-primary btn-icon-split">
            <span className="text">Back</span>
          </Link>
        </div>
        <div className="box3">
        <div className="first-box3">
            <div></div>
        </div>
        <div className="second-box3">
        <div className="second-box-up">
        <div className="detailedbox">
        
        <div className="container">
        <div className="con-detaile" >
          
          <div className="description4"><h4>{`QN${data.id}-${data.queTitle}`}</h4></div>
          <div className='detailss1'>
          <div className="box-created4">Created at:{data.date}</div>
          <div className="box-assig4">Assigned to: Thiru</div>
          </div>
          <div className='detailss2'>
          <div className="box-des4">Description:{data.quDescription}</div>
          </div>
          <div className='detailss3'>
          <div className="category4">category:{data.category}</div>
          <div className="sub-category4">sub-category:{data.subcategory}</div>
          </div>
          <div className='detailss4'>
          <div className="prefLanguage4">preferred Language:{data.voiceLanguage}</div>
          <div className="box-attach4">Attachments:</div>
          </div>
          </div>
        </div>
       
        </div> 
        </div>
        </div>
    
        </div>
        
    </div>
  )
}

export default Userform