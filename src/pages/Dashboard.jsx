import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../pages/pag.css";
import Carousel from 'react-bootstrap/Carousel';


function BasicExample({name,text,img,imgnam}) {
  
    return (
        <div className='cardd'>
      <Card style={{ width: '25rem' , padding: '5px' }}>
        <Card.Img variant="top" src={img} alt={imgnam} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Go to</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }

  function DarkVariantExample({img1,img2,img3}) {
    return (
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Devopes program</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5 style={{color:'white'}}>UI/UX program</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5 style={{color:'white'}}>Blockchain program</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }


const Dashboard = () => {
  return (
    <div className='total'>
    <div className='total1'>
      <BasicExample name="Full Stack Developement" text='React,Node,MySql' img="./src/pages/img/img4.jpg" imgnam="fsd"/>
      <BasicExample name="Data Analyst" text='Alteryx,Anaconda' img="./src/pages/img/img3.jpeg" imgnam="dss"/>
      <BasicExample name="Data Science" text='Domo,Tableau,ThoughtSpot' img="./src/pages/img/soo.jpg" imgnam="daa"/>
      </div>
      <div className='total2'>
      <DarkVariantExample img1="./src/pages/img/dev.jpeg" img2="./src/pages/img/uiux.jpg" img3="./src/pages/img/bc.png"/>
      <div>
      <h1 className='totaltext'>Description</h1>
      <h4 className='totaltext1'>Fun Class is one of the industry s leading Project Based Career Programs offered by YUVI that promises 100% Job Placement Support on completing the course. Conducted by an IIT kovai incubated company & designed by our Founders(Ex-Paypal Employees) also offers mentoring through experts from companies like Google, Microsoft, Flipkart, Zoho & Freshworks for placing you in top companies with high salaries.</h4>
      </div>
      </div>
      <br/>
      
    </div>

  )
}



export default Dashboard
