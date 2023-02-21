import { Grid, Image } from '@chakra-ui/react';
import React from 'react'
import ReactImageZoom from "react-image-zoom";
import { useLocation, useParams } from 'react-router-dom';
import styled from "../Styles/SingleProduct.module.css";
const SingleProduct = (el) => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,

    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };
    const {title}=useParams()
    const location=useLocation()
    console.log(el,"single",title);
  return (
    <div className={styled.Container}>
      <div className={styled.rightContainer}>
        <div>
        <div>
            <ReactImageZoom {...{ 
                width: 594,
                height: 600,
                zoomWidth: 600,
                img:"https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_884x.jpg?v=1655097254" 
                }} />
          </div>
          <Grid mt="-10%" gridTemplateColumns={"repeat(2,1fr)"}>
          <Image src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_884x.jpg?v=1655097254" alt="img1" />
          <Image src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_884x.jpg?v=1655097254" alt="img1" />
          <Image src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_884x.jpg?v=1655097254" alt="img1" />
          <Image src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_884x.jpg?v=1655097254" alt="img1" />

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