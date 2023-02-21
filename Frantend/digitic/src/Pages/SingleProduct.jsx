import React from 'react'
import { useLocation, useParams } from 'react-router-dom';

const SingleProduct = (el) => {
    const {title}=useParams()
    const location=useLocation()
    console.log(el,"single",title);
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct