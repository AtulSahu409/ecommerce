import * as types from "./actiontype"
import axios from "axios"


const Productdata =(Cat)=>(dispatch)=> {
 dispatch({type:types.GET_Products_REQUEST})
  return axios.get(`http://localhost:3005/product/${Cat}`)
  .then((r) => {
      dispatch({type:types.GET_Products_SUCCESS, payload:r.data})
      console.log(r)
      
  })
  .catch((e) =>{dispatch({type: types.GET_Products_FAILURE})
      console.log(e) 
    })

  
}

export {Productdata}