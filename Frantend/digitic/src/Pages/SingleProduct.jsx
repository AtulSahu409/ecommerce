import { Grid, Image } from '@chakra-ui/react';
import React from 'react'
import ReactImageZoom from "react-image-zoom";
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import styled from "../Styles/SingleProduct.module.css";
const SingleProduct = () => {
  
    const obj =useSelector((state)=>state.Product.singledata)
    const {isError,IsLoading} =useSelector((state)=>state.Product)  

  console.log(isError,IsLoading)
  
console.log(obj)
  

    const {title}=useParams()
    const location=useLocation()
    console.log("single",title);
  return (
    <div className={styled.Container}>
      <div className={styled.rightContainer}>
        <div className={styled.ImageContainer}>
        <div className={styled.ZoomImage}>
        <div>
            <ReactImageZoom {...{ 
                width: 590,
                height: 600,
                zoomLensStyle:"opacity: 0",
                zoomPosition:"original",
                zoomWidth: 600,
                img:obj[0].Images[0], 
                }} />
            </div>
          </div>
          <Grid ml="1%"  mr="1%" mt="-10%" gridTemplateColumns={"repeat(2,1fr)"} gap="3">
            <div className={styled.smallimage}><Image src={obj[0].Images[0]} /></div>
            <div className={styled.smallimage}><Image src={obj[0].Images[1]} alt="img1" /></div>
            <div className={styled.smallimage}><Image src={obj[0].Images[2]} alt="img1" /></div>
            <div className={styled.smallimage}><Image src={obj[0].Images[3]} alt="img1" /></div>

            
            
            
            

          </Grid>
        </div>
      </div>
      <div className={styled.leftContainer}>
      kkk
      </div>
      
    </div>
  )
}

export default SingleProduct