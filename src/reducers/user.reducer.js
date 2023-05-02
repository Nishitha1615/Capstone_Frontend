import { userconstants } from "../actions/constants";

const initstate={
    error:null,
    message:'',
    loading:false
    
}

export default (state=initstate,action)=>{
    switch(action.type)
    {
        case userconstants.USER_REGISTER_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
            case userconstants.USER_REGISTER_FAILURE:
            state={
                ...state,
                loading:false,
               error:action.payload.error
            }
            break;
            case userconstants.USER_REGISTER_SUCCESS:
            state={
                ...state,
                loading:false,
               message:action.payload.message
            }
            break;
    }

    return state;
}