import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import laptop from "../Images/laptop.jpg"
import camera from "../Images/camera.jpg"
import game from "../Images/game.jpg"
import mobile from "../Images/mobile.jpg"
import watch from "../Images/watch.jpg"
import acc from "../Images/acc.jpg"
import headphone from "../Images/headphone.jpg"
import homeapp from "../Images/homeapp.jpg"
import speaker from "../Images/speaker.jpg"
import tv from "../Images/tv.jpg"

import styled from "../Styles/Home.module.css";
import { Divider } from "@chakra-ui/react";
export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 5,
      
      slidesToScroll: 1,
      speed: 500,
      rows: 2,
      slidesPerRow: 1,
      responsive: [
        {
          breakpoint: 984,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            // dots: true
          }
        },
        {
          breakpoint: 710,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }
        
      ]
    };
    return (
      <div className={styled.Multirow}>
        
        <Slider {...settings}>
        
          <div className={styled.Multi_container}>
          
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={laptop} alt="lap"/> </div>
            <Divider/>
            
          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={camera} alt="lap"/> </div>
            <Divider/>
          </div>
          <div className={styled.Multi_container}>
          
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={tv} alt="lap"/> </div>
            <Divider/>
          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={watch} alt="lap"/> </div>
            <Divider/>
          </div>

          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={game} alt="lap"/> </div>
            <Divider/>
          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={mobile} alt="lap"/> </div>
            <Divider/>
          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={headphone} alt="lap"/> </div>
            <Divider/>
          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={acc} alt="lap"/> </div>
            <Divider/>
          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={speaker} alt="lap"/> </div>
            <Divider/>

          </div>
          <div className={styled.Multi_container}>
            <div className={styled.Multi_title} >Computers & <br/> Laptop </div>
            <div className={styled.Multi_item }> 8 Items</div>
            <div className={styled.Multi_image} ><img src={homeapp} alt="lap"/> </div>
            <Divider/>
          </div>
          
          
        </Slider>
      </div>
    );
  }
}