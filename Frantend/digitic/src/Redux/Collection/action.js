import * as types from "./actiontype"
import axios from "axios"



const Collection=(dispatch)=> {
 
dispatch({type:types.GET_Collection_REQUEST})
  
return axios.get('https://shift-raven.cyclic.app/collection/')
  .then((r) => {
      dispatch({type:types.GET_Collection_SUCCESS, payload:r.data})
      console.log(r)
      
  })
  .catch((e) =>{dispatch({type: types.GET_Collection_FAILURE})
      console.log(e) 
    })

  
}

export {Collection}