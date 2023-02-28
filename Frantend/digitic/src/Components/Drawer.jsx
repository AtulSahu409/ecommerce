import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
// import {GiHamburgerMenu} from "react-icons/gi"
// import {TbBusinessplan} from "react-icons/tb"
// import {CgShutterstock} from "react-icons/cg"
import styled from "../Styles/Navbar.module.css"
const DrawerComponent= ({cart,pa})=>{
      const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
  
    return (
      <>
        <Button colorScheme=''m="auto"  onClick={onOpen}>
          <div className={styled.Navicon}>
                  <div className={styled.Naviconfrant}>
                  <Image w="45px" src={cart} ml={{lg:"-60%",base:"-15%"}} mt={{base:"-5%",lg:"1%"}} alt="compare"/>
                  </div>
                  <div className={styled.Naviconback}>
                  <Image w="45px" src={cart}  ml={{lg:"45%",base:"70%"}} mt={{base:"-5%",lg:"1%"}} alt="compare"/>
                  </div> 
          </div>
        <></>
          {/* <Button color={"white"} bg={"#232f3e"} _hover={{bg:"#febd69"}}>Filter And Sort</Button> */}
          
        </Button>
        <Drawer
          
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent  >
            <DrawerCloseButton placement='left' fontSize={"25px"} mt="4%" mr="82%" />
            <DrawerHeader borderBottomWidth='1px' textAlign={"center"} fontSize={"14px"} color={"#777777"} >
              
                 Cart
              {/* Filter And Sort <br/> products */}
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
                <Box display={"flex"}>
                
                </Box>
  
                <Box display={"flex"}>
               <Link to="/addtocart"> <Button>View Cart</Button></Link>
                <Link to="/checkout"> <Button>Check Out</Button></Link>
                </Box>
  
                <Box>
                  
                </Box>
  
                <Box>
                  
                </Box>
              </Stack>
            </DrawerBody>
  
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default DrawerComponent