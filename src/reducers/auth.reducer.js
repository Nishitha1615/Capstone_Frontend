import { authconst } from "../actions/constants"

const initstate={
    
    token:null,
    user:{
        FirstName:'',
        LastName:'',
        email:'',
        picture:''

    },
    aunthenticate:false,
    authenticating:false,
    loading:false,
    error:null,
    message:''
}


export default (state=initstate,action)=>{
    console.log(action);
    
    switch(action.type)
    {
        case authconst.LOGIN_REQUEST:
            state={
                ...state,
               authenticating:true
            }
            break;
            case authconst.LOGIN_SUCCESS:
                state={
                    ...state,
                    user:action.payload.user,
                    token:action.payload.token,
                    aunthenticate:true,
                    authenticating:false
                }
                break;
                case authconst.LOGOUT_REQUEST:
                    state={
                        ...state,
                        loading:true
                       
                    }
                    break;
                    case authconst.LOGOUT_FAILURE:
                    state={
                        ...state,
                        error:action.payload.error,
                        loading:false
                       
                    }
                    break;
                    case authconst.LOGOUT_SUCCESS:
                    state={
                        ...initstate,
                        
                       
                    }
                    break;
    }

    return state

}