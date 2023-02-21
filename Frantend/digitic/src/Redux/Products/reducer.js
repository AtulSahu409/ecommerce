import * as types from "./actiontype"

const initialstate={
    isError:false,
    Product:[],
    IsLoading:false,
};

const reducer=(state=initialstate,action)=>{
const {type,payload}=action
switch(type){
    case types.GET_Products_REQUEST:
        return{
            ...state,
            IsLoading:true,
        };

    case types.GET_Products_SUCCESS:
        return{
            ...state,
            IsLoading:false,
            Product:payload
        };

    case types.GET_Products_FAILURE:
        return{
            ...state,
            isError:true,
            Product:[],
        };            
        default:
        return state
        
}
}

export {reducer}