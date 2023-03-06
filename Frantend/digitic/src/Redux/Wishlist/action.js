import * as types from "./actiontype"
import axios from "axios"

const getwish=(dispatch)=> {
 
    dispatch({type:types.Get_Wish_Request})
      
    return axios.get('http://localhost:3005/wish/')
      .then((r) => {
          dispatch({type:types.Get_Wish_Success, payload:r.data})
          console.log(r)
          
      })
      .catch((e) =>{dispatch({type: types.Post_Wish_Failure})
          console.log(e) 
        })
    
      
    }
    





const postwish=(data)=>(dispatch)=>{
    dispatch({type:types.Post_Wish_Request})
    return axios.post(`http://localhost:3005/wish/newpost/`,data)
    .then((res)=>{
        console.log(res)
       return  dispatch({type:types.Post_Wish_Success,payload:res.data})
    
        
    })
    .catch((err)=>{dispatch({type:types.Post_Wish_Failure})
        console.log(err)
    })
}


const deletewish=(id)=>(dispatch)=>{
    dispatch({type:types.Delete_Wish_Request})
    return axios.delete(`http://localhost:3005/wish/delete/${id}`)
    .then((res)=>{dispatch({type:types.Delete_Wish_Success,payload:res.data})
    console.log(res)
    })
    .catch((err)=>{dispatch({type:types.Delete_Wish_Failure})
        console.log(err)
    })

}


export { getwish,postwish,deletewish }