import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { FaDollarSign } from 'react-icons/fa'

const WishCart = ({el}) => {
  console.log(el)
  return (
    <div>
        <Box border={"1px solid"} p="2">
          <Image src={el.Images[0]} alt="img" />
          <Heading mt="2%" size={"sm"}>{el.Title}</Heading>
          
          <Box mt="5%" display={"flex"} ><FaDollarSign fontSize={"15px"}  color="#777777"/>
            <Box  mt="-2.5%" ml="1%" >{el.Price}</Box>
            </Box>

        </Box>

    </div>
  )
}

export default WishCart