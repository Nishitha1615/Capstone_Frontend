import axios from "axios";
import instance from "../helpers/axios"
import { categoryConst } from "./constants";
// import {headers} from '../helpers/axios'
export const getAllCategory=()=>{
    return async dispatch =>{

        dispatch({type:categoryConst.GET_ALL_CATEGORIES_REQUEST});
        const res=await instance.get(`category/getcategory`);
        console.log(res);
        if(res.status===200)
        {
            const {categoryList}=res.data;
            dispatch({
                type:categoryConst.GET_ALL_CATEGORIES_SUCESS,
                payload:{categories:categoryList}
            })
        }
        else{
            dispatch({
                type:categoryConst.GET_ALL_CATEGORIES_FAILURE,
                payload:{error:res.data.error}
            })
        }
    }
}

export const addcategory=(form)=>{
    return async dispatch => {
        dispatch({ type: categoryConst.ADD_NEW_CATEGORY_REQUEST });
        try {
            const res = await axios.post(`/category/create`, form,{headers: instance});
            if (res.status === 200) {
                dispatch({
                    type: categoryConst.ADD_NEW_CATEGORY_SUCCESS,
                    payload:  res.data.category 
                });
            } else {
                dispatch({
                    type: categoryConst.ADD_NEW_CATEGORY_FAILURE,
                    payload: res.data.error
                });
            }
        } catch (error) {   
            console.log(error.response);
        }

    }
}