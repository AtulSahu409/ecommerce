import styled from '../Styles/Collection.module.css'
import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Checkbox,  Grid, Heading, Image, Input, Select, Tag, Text } from '@chakra-ui/react'
import {FaDollarSign} from "react-icons/fa"
import {CiBag1, CiHeart} from "react-icons/ci"
import {AiOutlineEye} from "react-icons/ai"
import  {IoIosGitCompare} from "react-icons/io"
import {IoReorderFourOutline, IoReorderThreeOutline, IoReorderTwoOutline} from "react-icons/io5"
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {obj} from "./data"
const Collect = (cat) => {
  
  const location =useLocation()
  let path=location.pathname.split("/")
  console.log(path[2])
  console.log(obj)

  const [check,setcheck]=useState("")
  const [grid,setgrid]=useState("")
  
  const handle=()=>{}
  const handleclick=(gr)=>{
      console.log(gr)
}
  console.log(cat,"cat")
  return (
    <div className={styled.Container}>
    <div className={styled.Containertop}>
    <Breadcrumb fontWeight='medium' fontSize='sm'>
      <BreadcrumbItem>
        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink >{path[2]}</BreadcrumbLink>
      </BreadcrumbItem>

  </Breadcrumb>
  </div>
  <div className={styled.Containerbottom}>
      <div className={styled.leftbox}>
        <div className={styled.lefttop}>
          <Heading size={"sm"} p="4%">Shop By Categories</Heading>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Home</Text>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Our Store</Text>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Blogs</Text>
          <Text className={styled.lefttext} color={"#777777"} fontSize={"12px"} fontWeight={"medium"} pl="5%" >Contact</Text>

        </div>
        <div className={styled.leftmiddle}>
        <Heading size={"sm"} p="4%">Fiter By</Heading>
        <Heading size={"xs"} p="4%">Availability</Heading>
        <Box display={"flex"} flexDirection="column">
          <Checkbox size={"sm"} colorScheme='green' onClick={handle} >
           In stock
          </Checkbox>
          <Checkbox  size={"sm"} colorScheme='green' onClick={handle} >
            Out of stock 
          </Checkbox>
         </Box>
         <Heading size={"xs"} p="4%">Price</Heading>
         <Box display={"flex"} gap={"1"} >
            <Box mt={"10px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box><Input w="30%" Type={"number"} bg="#f7f7f7" />
            <Box mt={"10px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box><Input w="30%" Type={"number"} bg="#f7f7f7" />
        </Box>
        <Heading size={"xs"} p="4%">Color</Heading>
          <Grid gridTemplateColumns={"repeat(8,.5fr)" } gap="1" >
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#000000"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#0DFDFC"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#11273B"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#293163"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#424448"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#7D2C33"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#948D9A"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#A85A5A"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#ADADAD"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#B5CEDE"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#BAB7BA"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#CCBFAF"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#D7252A"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#E2BFB9"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#E33935"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#E3A4A5"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#F3CBC4"/>
            <Input width={"15%"} h="30px" borderRadius={"50%"} bg="#FE9377"/>
          </Grid>
          <Heading size={"xs"} p="4%" >Size</Heading>
         <Box display={"flex"}  flexDirection="column" gap={"1"} >
         <Checkbox size={"sm"} colorScheme='green' >S</Checkbox>
         <Checkbox size={"sm"} colorScheme='green' >M</Checkbox>
         <Checkbox size={"sm"} colorScheme='green' >L</Checkbox>
         <Checkbox size={"sm"} colorScheme='green' >XL</Checkbox>
         <Checkbox size={"sm"} colorScheme='green' >XXL</Checkbox>
         

        </Box>

        </div>
        <div className={styled.leftbottom}>
          <Tag p="15%" pl="1%" size={"lg"}>Headphones</Tag>
          <Tag p="15%" size={"lg"}>Laptop</Tag>
          <Tag p="15%" size={"lg"}>Mobile</Tag>
          <Tag p="15%" size={"lg"}>Oppo</Tag>
          <Tag p="15%" size={"lg"}>Speaker</Tag>
          <Tag p="15%" size={"lg"}>Tablet</Tag>
          <Tag p="15%" size={"lg"}>Vivo</Tag>
          <Tag p="15%" size={"lg"}>Wire</Tag>


        </div>
      </div>

      <div className={styled.rightbox}>
        <div className={styled.righttopbox}>
          <Box display={"flex"} gap="2" alignItems={"center"} p="auto">
            <Heading size={"xs"}  p="1">Sort by:</Heading>
            <Select className={styled.lefttext} w="70%" fontSize="14px" fontFamily={"sans-serif"} color={"#777777"}  p="1" bg="#f7f7f7">
              <option  value='Feature'>Feature</option>
              <option  value='Bestselling'>Best selling</option>
              <option  value='Alphabetically_A-Z'>Alphabetically,A-Z</option>
              <option  value='Alphabetically_Z-A'>Alphabetically,Z-A</option>
              <option  value='Price_l-h'>Price,low to high</option>
              <option  value='Price_h-l'>Price,high to low</option>
              <option  value='Date_o-n'>Date,old to new</option>
              <option  value='Date_n-o'>Date,new to old</option>
            </Select>
          </Box>
          <Box display={"flex"} gap="2" mt="1%" left={"0"} >
            <Box  border={"2px solid black"} borderRadius="10px" bg="#f7f7f7" m="auto"  onClick={(e)=>handleclick("repeat(4,1fr)")} >
              <IoReorderFourOutline className={styled.burgaricon}  />
            </Box>
            <Box  border={"2px solid black"} borderRadius="10px" m="auto" bg="#f7f7f7" >
              <IoReorderThreeOutline className={styled.burgaricon}   />
            </Box>
            <Box  border={"2px solid black"} borderRadius="10px" m="auto" bg="#f7f7f7" >
              <IoReorderTwoOutline className={styled.burgaricon}  />
            </Box>
            <Box  border={"2px solid black"} borderRadius="10px" m="auto" bg="#f7f7f7" >
              <IoReorderThreeOutline fontSize={"30px"} />
            </Box>
            
          </Box>
        </div>
        <div className={styled.rightbottombox}>
          {
            obj && obj.map((el)=>{
              return(
                <div className={styled.card}>
                <Box display={"flex"}  >
                <Image w="90%" mt="-30%"  h="250px"  src={el.Images[0]} />
                  <Box position={"relative"} zIndex="100" >
                    <CiHeart fontSize={"25px"} />
                    <Box overflow={'hidden'} className={styled.icon}>
                    <AiOutlineEye fontSize={"25px"}  />
                    <IoIosGitCompare fontSize={"25px"}/>
                    <CiBag1 fontSize={"25px"} />
                  </Box>
                  </Box>
                    
                </Box>
                
                <Box ml="10%">
                  <Text>{el.Brand}</Text>
                  <Heading size={"xs"}>{el.Title}</Heading>
                  <Text>stars</Text>
                  <Box display={"flex"}>
                    <Box mt={"5px"}><FaDollarSign fontSize={"15px"}  color="#777777"/></Box><Text>{el.Price}</Text>
                  </Box>
                </Box>
                </div>
              )
            }) 

          }
        </div>
      </div>
    
    </div>
    </div>
  )
}

export default Collect