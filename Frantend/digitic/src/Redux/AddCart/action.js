import * as types from "./actiontype"
import axios from "axios"

const getadd=(dispatch)=> {
 
    dispatch({type:types.Get_Add_Request})
      
    return axios.get('http://localhost:3005/addcart')
      .then((r) => {
          dispatch({type:types.Get_Add_Success, payload:r.data})
          console.log(r)
          
      })
      .catch((e) =>{dispatch({type: types.Post_Add_Failure})
          console.log(e) 
        })
    
      
    }
    





const postadd=(data)=>(dispatch)=>{
    dispatch({type:types.Post_Add_Request})
    return axios.post(`http://localhost:3005/addcart/newpost/`,data)
    .then((res)=>{dispatch({type:types.Post_Add_Success})
        console.log(res)
    })
    .catch((err)=>{dispatch({type:types.Post_Add_Failure})
        console.log(err)
    })
    



}

const deleteadd=(id)=>(dispatch)=>{
    dispatch({type:types.Delete_Add_Request})
    return axios.delete(`http://localhost:3005/addcart/delete/${id}`)
    .then((res)=>{dispatch({type:types.Delete_Add_Success})
    console.log(res)
    })
    .catch((err)=>{dispatch({type:types.Delete_Add_Failure})
        console.log(err)
    })

}


export { getadd,postadd,deleteadd }