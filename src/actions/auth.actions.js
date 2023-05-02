// make an api calls

import axios from "axios";
import instance from "../helpers/axios"
import { authconst, userconstants } from "./constants"

export const login=(user)=>{
    return async (dispatch)=>
    {
        dispatch({type:authconst.LOGIN_REQUEST,});
        const res=await instance.post('/admin/signin',{
            ...user
        })

        if(res.status===200)
        {
            const {token,user}=res.data;
            localStorage.setItem('token',token);
            localStorage.setItem('user',JSON.stringify(user))
            dispatch({
                type:authconst.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            });
        }
        else
        {
            if(res.status===400)
            {   
                dispatch({
                    type:authconst.LOGIN_FAILURE,
                    payload:{
                        error:res.data.error
                    }
                });

            }
        }
    }
}

export const isUserLoggedIn=()=>{
    return async dispatch =>{
        const token=localStorage.getItem('token');
        if(token)
        {
            const user=JSON.parse(localStorage.getItem('user'));
            dispatch({
                type:authconst.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            });
        }
        else{
            dispatch({
                type:authconst.LOGIN_FAILURE,
                payload:{
                    error:"failed to login"
                }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {

        dispatch({ type: authconst.LOGOUT_REQUEST });
        const res = await axios.post(`/admin/signout`);

        if(res.status === 200){
            localStorage.clear();
            dispatch({ type: authconst.LOGOUT_SUCCESS });
        }else{
            dispatch({
                type: authconst.LOGOUT_FAILURE,
                payload: { error: res.data.error }
            });
        }

        
    }
}

// export const signout=()=>{
//     return async dispatch=>{

//         dispatch({type:authconst.LOGOUT_REQUEST});


//         const res=await axios.post(`/admin/signout`)

//         if(res.status===200)
//         {
//             localStorage.clear();
//             dispatch({
//                 type:authconst.LOGOUT_SUCCESS
//             });
//         }
//         else{
//             dispatch({
//                 type:authconst.LOGOUT_FAILURE,
//                 payload:{
//                     error:res.data.error
//                 }
//             });
//         }
        
//     }
// }