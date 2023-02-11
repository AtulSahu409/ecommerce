import { Box, Divider, Input, InputGroup, InputLeftElement, InputRightElement, Link, Select, Stack, Text } from '@chakra-ui/react'

import {Search2Icon} from "@chakra-ui/icons"
import {IoMdGitCompare} from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import {BsCart} from "react-icons/bs"
import {CiUser} from "react-icons/ci"
import {CgMenuGridO} from "react-icons/cg"

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
             <div className={styled.icon}><IoMdGitCompare fontSize={"30px"} p="10px" /></div>
             <Link><p>Compare <br/>Product</p></Link>
            </div>
            <div className={styled.item}>
             <div className={styled.icon}> <AiOutlineHeart fontSize={"30px"} p="10px" /></div>
            <Link><p>Favouite<br/> Wishlist</p></Link>
            </div>
            <div className={styled.item}>
             <div className={styled.icon}><CiUser fontSize={"30px"} p="10px" /></div>
             <Link><p>Log in <br/> My Account</p></Link>
            </div>
            <div className={styled.item}>
             <Link><div className={styled.icon}><BsCart fontSize={"30px"} p="10px" /></div></Link>
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