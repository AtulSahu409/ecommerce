import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import WishCart from '../Components/WishCart'
import { getwish } from '../Redux/Wishlist/action'

const Wishlist = () => {
    const dispatch=useDispatch()
    
    const data=useSelector((state)=>state.Wishlist.data)
    console.log(data);

    useEffect(()=>{
        
      dispatch(getwish)

    },[])
      
  return (
    <Box bgColor={"#f5f5f7"} p="2%">
    <Grid templateColumns={{ xl:"repeat(5, 1fr)" ,md: "repeat(3, 1fr)" }}  gap="5">
    { data && data.map((el)=>{
        return(
            <WishCart el={el}/>
        )
    })

    }
        
    </Grid>

    </Box>
  )
}

export default Wishlist