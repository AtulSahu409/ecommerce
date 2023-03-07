import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, Heading, Image, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Stack, Text, Textarea, useDisclosure } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from "react-redux"
import {Link, useLocation} from "react-router-dom"
import { deleteadd, getadd } from "../Redux/AddCart/action"
// import {GiHamburgerMenu} from "react-icons/gi"
// import {TbBusinessplan} from "react-icons/tb"
// import {CgShutterstock} from "react-icons/cg"
import styled from "../Styles/Navbar.module.css"
const DrawerComponent= ({cart,pa})=>{
      const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const dispatch=useDispatch()
    const location=useLocation()
    console.log(location,"ck")
    
    const data=useSelector((state)=>state.Addcart.data)
    
    
    
    console.log(data)
    
    useEffect(()=>{
      dispatch(getadd)
    },[dispatch])
    
    const handleDel=(id)=>{
  
      dispatch(deleteadd(id))
    }
  
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
       
         
          
        </Button>
        <Drawer
          
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          size={'sm'}
          
        >
          <DrawerOverlay />
          <DrawerContent  >
            <DrawerCloseButton placement='left' fontSize={"25px"} mt="2%" mr="82%" />
            <DrawerHeader borderBottomWidth='1px' textAlign={"center"} fontSize={"14px"} color={"#777777"} >
              
                 Cart
              
            </DrawerHeader>
  
            <DrawerBody>
              <Stack spacing='24px'>
              {
                data && data.map((el)=>{
                  return(
                    <>
                      <Box display={"flex"}>
                        <Image src={el.Images[0]} w="120px" h="110px"/>
                        <Box>
                          <Heading mt="3%" size={"xs"}>{el.Title}</Heading>
                          <Text>color:{el.Color[0]}</Text>
                          <Text>Size:{el.Size[0]}</Text>

                          <Text>Price:{el.Price}</Text>

                        </Box>
                        <Box mt="10%" onClick={()=>handleDel(el._id)}><RiDeleteBin6Line  fontSize={"25px"}/></Box>
                      </Box>
                    </>
                  )
                })
              }
                <Box display={"flex"}>
                
                </Box>
  
                <Box  display={"flex"} gap="15">
               <Link to="/addtocart"> <Button ml="95%" p="36%" borderRadius={"35px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}}>View Cart</Button></Link>
                <Link to="/checkout"> <Button ml="145%" p="33%" borderRadius={"35px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}}>Check Out</Button></Link>
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