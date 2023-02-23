import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Collection from './Collect'
import Home from './Home'
import Signup from '../Components/Signup'
import SingleProduct from './SingleProduct'
const MainRouter = () => {
  
  return (
    <Box mt="5%" >
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collections/:cat" element={<Collection/>}/>
            <Route path="/products/:title" element={<SingleProduct />}/>
            <Route path="/login" element={<Signup/>}/>

        </Routes>
    </Box>
  )
}

export default MainRouter