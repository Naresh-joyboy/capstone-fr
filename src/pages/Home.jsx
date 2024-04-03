import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../pages/pag.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars-2';

const Home = ({specificdata}) => {
   const[data, setData] = useState([])
   const login = window.localStorage.getItem("isLogedIn");

  const callApi =async ()=>{
    try{
        const res = await axios.get('http://localhost:5000/usersdet');
        {login?setData(res.data):setData("")}
        
      
        
     
    }catch(err){
        console.log("There is an error");
    }
  }


  useEffect(()=>{
    callApi()
  },[])

  
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ margin: "10px" }}>
        <Link to="/recquery" className="btn btn-primary btn-icon-split">
          <span className="icon text-white-50">
            <i style={{ fontWeight: "700", fontSize: "20px" }}>+</i>
          </span>
          <span className="text">Add Query</span>
        </Link>
      </div>
      
      <div className="boxs" >
        <div className="first-box">
        <Scrollbars style={{height:"600px"}}>
        {data && data.map((item,index) => (
          <div className="first-box-up" key={index} onClick={() => {
            specificdata(item)
            navigate('/useform')
          }}>
            <div className="box-details">
              <div className="container" >
                <div className="left-box">
                  <div className="detail-id-name">{`QN${item.id}-${item.quDescription}`}</div>
                  <div className="detail-doubt-name">{item.category}</div>
                </div>
                <div className="right-box">
                  <div className="box-assign">Assigned</div>
                  <div className="box-date">{item.date}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </Scrollbars>
      </div>
        
        <div className="second-box">
        <div className="second-box-up">
          <div className="detailedbox">
            {data.length > 0 && (
              <div className="container" key={data[data.length - 1].id}>
                <div className="con-detaile" >
                  <div className="box-title"><h5>Recent query</h5></div>
                  <div className="description2"><h4>{`QN${data[data.length - 1].id} - ${data[data.length - 1].queTitle}`}</h4></div>
                  <div className="assigned2"><h5 >Assigned</h5></div>
                  <div className="box-created">Created at:<br /><span className="inner-line">{data[data.length - 1].date}</span></div>
                  <div className="box-des">Description:<br /><span className="inner-line">{data[data.length - 1].quDescription}</span></div>
                  <div className="box-assig">Assigned to:{}</div>
                  <div className="box-attach">Attachments:<img alt=""></img></div>
                  <div className="but2"><button className="query-btn2" onClick={() => {
                    specificdata(data[data.length - 1]);
                    navigate('/useform');
                  }}>Go to query</button></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Home;
