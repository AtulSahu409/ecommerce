import { Box, Divider, Image, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Stack, Text } from '@chakra-ui/react'

import {Search2Icon} from "@chakra-ui/icons"

import {CgMenuGridO} from "react-icons/cg"
import compare from "../../Images/compare.svg"
import cart  from "../../Images/cart.svg"
import user  from "../../Images/user.svg"
import wishlist from "../../Images/wishlist.svg"
import React from 'react'
import styled from "../../Styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styled.container}>
        <nav className={styled.topnav}>
           <Text>logo</Text>
           <InputGroup bg={"white"} color="black" w="40%" h={"10%"}>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              
            />
            <Input placeholder='Search Product here..' />
            <InputRightElement bg="yellow" children={<Search2Icon fontSize={"2xl"} color='green.500' />}  />

            </InputGroup>
           <div className={styled.topnavright}>
            <div className={styled.item}>
            <Image src={compare} alt="compare"/>
            
             <Link><p>Compare <br/>Product</p></Link>
            </div>
            <div className={styled.item}>
            <Image src={wishlist} alt="compare"/>
            <Link><p>Favouite<br/> Wishlist</p></Link>
            </div>
            <div className={styled.item}>
            <Image src={user} alt="compare"/>
             <Link><p>Log in <br/> My Account</p></Link>
            </div>
            <div className={styled.item}>
             <Link><Image src={cart} alt="compare"/></Link>
             <p>cart</p>
            </div>
            
           </div>
           

        </nav>
        <Divider />
        <nav className={styled.bottomnav}>
    
        <div className={styled.item}>
             <div className={styled.icon}><CgMenuGridO fontSize={"30px"} p="10px" /></div>
             <Select placeholder='SHOP CATEGORIES' mt="5px" bg={"black"} border={"none"} >
              <option value='option1' >Option 1</option>
              <option value='option2' >Option 2</option>
              <option value='option3' >Option 3</option>
            </Select>
            <Divider orientation='vertical' h='40px' mt="10px" />     
        </div>
        <div className={styled.item2 }>
            <div >
              <Link>  <p>HOME</p></Link>
            </div>
            <div >
                <Link><p>OUR STORE</p></Link>
            </div>
            <div >
                <Link> <p>BLOGS</p></Link>
            </div>
            <div >
                <Link> <p>CONTACT</p></Link>
            </div>
        </div>
        

        </nav>
    </div>
  )
}

export default Navbar