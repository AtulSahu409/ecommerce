import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "../Styles/Home.module.css"
import brand  from "../Images/brand-01.png"
import brand1 from "../Images/brand-02.png"
import brand2 from "../Images/brand-03.png"
import brand3 from "../Images/brand-04.png"
import brand4 from "../Images/brand-05.png"
import { Box, Heading, Image } from "@chakra-ui/react";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 984,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
        
      ]
    };
    return (
      <div className={styled.serviceslider}>
        
        <Slider {...settings}>
        <div className={styled.service}>
        
            <Image  src={brand} w="50px" alt="service"/>
        

        </div>

        {/* <div className={styled.service}>
        <div>
            <Image  src={service1} w="40px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Daily  surprise offers</div>
            <div className={styled.service_subtitle}>Save up to 25% off</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service2} w="35px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Support 24/7</div>
            <div className={styled.service_subtitle}>Shop with an expert</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service3} w="40px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Affordable Prices</div>
            <div className={styled.service_subtitle}>Get Factory direct price</div>
        </div>
        </div>

        <div className={styled.service}>
        <div>
            <Image  src={service4} w="47px" alt="service"/>
        </div>

        <div className={styled.service_description}>
            <div className={styled.service_title} >Secure Payments</div>
            <div className={styled.service_subtitle}>100% Protected Payments</div>
        </div>
        </div> */}

       
          
        </Slider>
      </div>
    );
  }
}



 