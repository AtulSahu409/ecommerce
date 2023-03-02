import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import styled from '../Styles/Home.module.css'

import catbanner1 from "../Images/catbanner-01.jpg"
import catbanner2 from "../Images/catbanner-02.jpg"
import catbanner3 from "../Images/catbanner-03.jpg"
import catbanner4 from "../Images/catbanner-04.jpg"
import laptop from "../Images/laptop.jpg"
import Speaker from "../Images/speaker.jpg"
import watch from "../Images/watch.jpg"
import SwipeToSlide from "../Components/Slider"
import ResponsiveSlider from  "../Components/Slider2"
import  MultiplyRows  from "../Components/MultipleRow"
import BrandSlider from "../Components/BrandSlider"
import ShowSlider from '../Components/ShowSlider'
import ProductSlider from '../Components/ProductSlider'
import Blogs from '../Components/Blogs'
const Home = () => {
  const [title,settitle]=useState("")
  console.log(title,"val")
  const handletitle=(va)=>{
   
    console.log(va,"dat")
  }
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
  <div className={styled.home_wrapper6}>
  <Box  ml="-60%" p="2%" display={"block"}  bgColor={"white"}  w="100%" h="430px" mt="3%" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}  borderRadius={"10px"} >
    <Box mt="10%" display={"flex"} cursor={"pointer"} >
      <Box w="100px"><Image w="150px" h="100px" src={watch} /></Box> 
      <Box w="100px" m="auto"><Button  textAlign={"right"} fontWeight={"500"}   onClick={(e)=>settitle(e.target.value)} > Smartwatch </Button> </Box>
    </Box>
    <Box display={"flex"} cursor={"pointer"} ><Box><Image src={Speaker}/></Box> <Box m="auto"> <Text textAlign={"right"} value={"Speaker"} onClick={(e)=>settitle(e.target.value)}  fontWeight={"500"}>Speaker</Text> </Box></Box>
    <Box display={"flex"} cursor={"pointer"} ><Box><Image src={laptop} /></Box> <Box m="auto"> <Text textAlign={"right"} value={"Laptops"} onClick={(e)=>settitle(e.target.value)} fontWeight={"500"}>Laptops</Text> </Box></Box>
  </Box>
  <Box ml="1%"  w="100%" mt="3%" h="430px"  >
    <Image borderRadius={"10px"} src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/cat-product-banner.jpg?v=1655367105" w="100%" h="100%"/>
  </Box>
    <ProductSlider/>
  </div>
  <div className={styled.home_wrapper4}>
    <BrandSlider/>
     
  </div>
  <div className={styled.home_wrapper7}>
    <Blogs/>
     
  </div>
 
  
</div>
  </div>
  )
}

export default Home


  