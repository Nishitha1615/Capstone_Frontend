import instance from "../helpers/axios"
import {  userconstants } from "./constants"

export const signup=(user)=>{
    return async (dispatch)=>
    {
        dispatch({type:userconstants.USER_REGISTER_REQUEST});
        const res=await instance.post('/admin/signup',{
            ...user
        })

        if(res.status===200)
        {
            const {message}=res.data;
         
            dispatch({
                type:userconstants.USER_REGISTER_SUCCESS,
                payload:{
                   message
                }
            });
        }
        else
        {
            if(res.status===400)
            {   
                dispatch({
                    type:userconstants.USER_REGISTER_FAILURE,
                    payload:{
                        error:res.data.error
                    }
                });

            }
        }
    }
}