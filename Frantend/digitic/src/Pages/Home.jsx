import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styled from '../Styles/Home.module.css'

import catbanner1 from "../Images/catbanner-01.jpg"
import catbanner2 from "../Images/catbanner-02.jpg"
import catbanner3 from "../Images/catbanner-03.jpg"
import catbanner4 from "../Images/catbanner-04.jpg"

import SwipeToSlide from "../Components/Slider"
import ResponsiveSlider from  "../Components/Slider2"
import  MultiplyRows  from "../Components/MultipleRow"
import BrandSlider from "../Components/BrandSlider"
import ShowSlider from '../Components/ShowSlider'
const Home = () => {
  return (
  <div className={styled.home_container}>
  <div className={styled.home_wrapper1}>
    <div className={styled.maingrid}>
     
     <div className={styled.rightgrid} >
        <SwipeToSlide/>
    </div>

     <div className={styled.leftgrid}>

     
       <div className={styled.catcontainer}>
         <Image src={catbanner1} alt="cat1" borderRadius={"20px"} />
         
          <div className={styled.catbanner_description} >
            <div className={styled.catbanner_title} >BEST SALE</div>
            <div className={styled.catbanner_subtitle}>Laptops Max</div>
            <div className={styled.catbanner_desc}> From $999.00 or  $41.62/mo.  </div>
          </div>
        
      </div>
      <div className={styled.catcontainer} >
      <Image src={catbanner2}   alt="cat1" borderRadius={"20px"}/>
      <div className={styled.catbanner_description} >
      <div className={styled.catbanner_title} >15% OFF</div>
      <div className={styled.catbanner_subtitle}>Smartwatch 7</div>
      <div className={styled.catbanner_desc}> Shop the latest band<br/>Styles & colors</div>
      </div>

      </div>
      <div  className={styled.catcontainer}>
      <Image src={catbanner3 }     alt=" cat1" borderRadius={"20px"}/>
      <div className={styled.catbanner_description1} >
      <div className={styled.catbanner_title} >NEW ARRIVAL</div>
      <div className={styled.catbanner_subtitle}>Buy IPad Air</div>
      <div className={styled.catbanner_desc}> From $999.00 or $41.62/mo. <br/> for 24 mo. Footnote*</div>
      </div>

      </div>
      <div  className={styled.catcontainer}>
      <Image src={catbanner4}   alt="cat1" borderRadius={"20px"}/>
      <div className={styled.catbanner_description1} >
      <div className={styled.catbanner_title} >FREE ENGRAVING</div>
      <div className={styled.catbanner_subtitle}>AirPods Max</div>
      <div className={styled.catbanner_desc}> High-fidelity playback &<br/> ultra-low distortion</div>
      </div>


      </div>
    </div>
    </div>
    
  </div>
<div className={styled.home_wrapper}>
  <div className={styled.home_wrapper2}>
   <ResponsiveSlider/>
  
  </div>
  <div className={styled.home_wrapper3}>
    <MultiplyRows/>
     
  </div>
  <div className={styled.home_wrapper5}>
    <ShowSlider/>
     
  </div>
  <div className={styled.home_wrapper4}>
    <BrandSlider/>
     
  </div>
 
  
</div>
  </div>
  )
}

export default Home


  