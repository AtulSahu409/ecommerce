import { Box } from '@chakra-ui/react'
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
const MainRouter = () => {
  return (
    <Box mt="5%" >
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Box>
  )
}

export default MainRouter