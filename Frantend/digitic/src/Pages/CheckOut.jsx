import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '../Styles/CheckOut.module.css'
import { getadd } from '../Redux/AddCart/action'

const CheckOut = () => {
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.Addcart.data)
console.log(data)
    useEffect(()=>{
        dispatch(getadd)
    })
    return (
    <div>
        <div className={styled.Container}>
            <div className={styled.RightContainer}>
kkdkkdk
            </div>
            <div className={styled.LeftContainer}>
mkxmxk
            </div>
        </div>
    </div>
  )
}

export default CheckOut