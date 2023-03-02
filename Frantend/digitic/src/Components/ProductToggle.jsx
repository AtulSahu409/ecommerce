import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox,  Grid, Heading, Image, Input, Select, Tag, Text } from '@chakra-ui/react'
import styled from "../Styles/Collection.module.css"
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa'
import addcart from "../Images/add-cart.svg"
import view from "../Images/view.svg"
import compare from "../Images/prodcompare.svg"

import ReactStars from 'react-rating-stars-component'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { singledata } from '../Redux/Products/action'
import { deletewish,postwish } from '../Redux/Wishlist/action'


const ProductToggle = ({el,grid}) => {
    const [Shown, setIsShown] = useState("true");
    const [check,setcheck]=useState(true)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    
    const single=(el)=>{
        dispatch(singledata(el.Title))
        navigate(`/products/${el.Title}`)
        console.log(el,el._id,)
      }

      const addwish=()=>{
        
        check?setcheck(false):setcheck(true)
        if(check){
          console.log(el._id,"id")
          
          // dispatch(deletewish(el._id))
          dispatch(postwish(el))
        }
        else if(check==false){
          console.log(el._id)
          
          dispatch(deletewish(el._id))
        }

        console.log(check)
      }
  return (

          <div className={`${grid==1?(styled.card1):(styled.card)}`} key={el._id} >
                <Box display={"flex"} >
                  <Image w="90%" mt={`${grid==1?"-5%":"10%"}`}    h="250px" src={`${Shown?el.Images[0]:el.Images[1]}`}  onMouseEnter={() => setIsShown(false)} onMouseLeave={() => setIsShown(true)} onClick={()=>single(el)} />                
                    <Box position={"relative"} zIndex="100" mt={`${grid==1?"-10%":""}`} >
                      <AiFillHeart fontSize={"25px"}  className={`${check?(styled.hearticonblack):styled.hearticonred}`} onClick={addwish} />
                      <Box overflow={'hidden'} className={styled.icon}>
                      <Image src={compare} mt="10px" fontSize={"25px"}  />
                      <Image src={view} mt="10px" fontSize={"25px"}/>
                      <Image src={addcart} mt="10px" fontSize={"25px"} />
                  </Box>
                  </Box>
                    
                </Box>
                
                <div className={styled.card_information__wrapper} >
                  <div className={styled.card_caption}>{el.Brand}</div>
                  <div className={styled.card_information__text}>{el.Title}</div>
                  <ReactStars
                     count={5}
                     size={24}
                     value={el.Rating}
                     edit={false}
                     activeColor="#ffd700"
                    />
                    <div className={`${grid==1?(styled.card_caption_des):(styled.card_caption_des_none)}`}>{el.Discription}</div>
                  <Box display={`${grid==1?"none":"flex"}`} >
                    <Box mt={"5px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box>
                    <div className={styled.price}>{el.Price}</div>
                  </Box>
                </div>
                </div> 
  )
}

export default ProductToggle