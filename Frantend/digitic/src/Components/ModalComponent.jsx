import React from 'react'
import {Box, Button,Heading,Image,Input,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay, Select, Text, useDisclosure,} from "@chakra-ui/react"
import view from "../Images/view.svg"
import ImageSlider from "./ImageSlider"
import { Link, useNavigate } from 'react-router-dom'
const ModalComponent = ({el}) => {
    console.log(el,"Modale");
    const navigate=useNavigate()

    const handlenext=()=>{
        navigate(`products/${el.Title}`)
    }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Image  src={view} mt="10px" fontSize={"25px"}  onClick={onOpen} />

      <Modal isOpen={isOpen} size={"5xl"} m="10%"  onClose={onClose} scrollBehavior={"inside"} >
        <ModalOverlay />
        <ModalContent    >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton  />
          <ModalBody display={"flex"} gap={5}>
            <Box bgColor={"#f2f2f2"} >
                <ImageSlider data={el.Images} />
            </Box>
            <Box >
                <Heading size={"lg"}>{el.Title}</Heading>
                <Text fontFamily={"sans-serif"} fontSize={"20px"} mt="4%" fontWeight={"600"}>Price:{el.Price}</Text>
                <Box display={"flex"}>
                <Text fontFamily={"sans-serif"} fontSize={"20px"} mt="5%" fontWeight={"600"} >Size :</Text>
                <Select mt="5%" w="50%" ml="10%" >
                {el.Size.map((e)=>{
                    return(
                        <option value={e}>{e}</option>
                    )

                })}
                   
                </Select>
                </Box>
                <Box display={"flex"}>
                <Text fontFamily={"sans-serif"} fontSize={"20px"} mt="5%" fontWeight={"600"} >Color :</Text>
                <Select mt="5%" w="50%" ml="8%">
                {el.Color.map((e)=>{
                    return(
                        <option value={e}>{e}</option>
                    )

                })}
                   
                </Select>
                </Box>
                <Box display={"flex"}>
                    <Text fontFamily={"sans-serif"} fontSize={"20px"} mt="5%" fontWeight={"600"}>Quantity</Text>
                    <Input type="number"   mt="5%" w="50%" ml="5%" />

                </Box>
                <Button mt="5%" p="2%" w="45%"  borderRadius={"35px"} color={"white"} bg={"#232F3E"} _hover={{bg:"#FEBD69"}} >Add To Cart</Button>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Text textDecoration={"underline"} onClick={handlenext} mr="40%">View full Product Details</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
 


export default ModalComponent