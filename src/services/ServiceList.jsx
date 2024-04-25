import React from 'react';
import ServiceCard from "./ServiceCard";
import {Col} from "reactstrap";



import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicedata =[
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, consectur adipisicing elit.", 
  },
  {
    imgUrl: guideImg,
    title: "Best of Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectur adipisicing elit.", 
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet, consectur adipisicing elit.", 
  },
]
const ServiceList = () => {
  return <>
    {
      servicedata.map((item, index)=> <Col lg='3' key={index}><ServiceCard item={item}/>
      </Col>)
    }
  </>
}

export default ServiceList