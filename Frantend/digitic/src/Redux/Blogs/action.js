import * as types from "./actiontype"
import axios from "axios"

const getBlog=(dispatch)=> {
 
    dispatch({type:types.Get_Blog_Request})
      
    return axios.get('https://shift-raven.cyclic.app/blogs')
      .then((r) => {
          dispatch({type:types.Get_Blog_Success, payload:r.data})
          console.log(r)
          
      })
      .catch((e) =>{dispatch({type: types.Get_Blog_Failure})
          console.log(e) 
        })
    
      
    }
    





const postBlog=(data)=>(dispatch)=>{
    dispatch({type:types.Post_Blog_Request})
    return axios.post(`https://shift-raven.cyclic.app/blogs/newpost`,data)
    .then((res)=>{dispatch({type:types.Post_Blog_Success})
        console.log(res)
    })
    .catch((err)=>{dispatch({type:types.Post_Blog_Failure})
        console.log(err)
    })
    



}

const deleteBlog=(id)=>(dispatch)=>{
    dispatch({type:types.Delete_Blog_Request})
    return axios.delete(`https://shift-raven.cyclic.app/blogs/delete/${id}`)
    .then((res)=>{dispatch({type:types.Delete_Blog_Success})
    console.log(res)
    })
    .catch((err)=>{dispatch({type:types.Delete_Blog_Failure})
        console.log(err)
    })

}


export { getBlog,postBlog,deleteBlog }