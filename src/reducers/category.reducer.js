import { categoryConst } from "../actions/constants";

const initstate={
    categories:[],
    loading:false,
    error:null,
}

export default (state=initstate,action)=>{
    switch(action.type)
    {
        case categoryConst.GET_ALL_CATEGORIES_SUCESS:
            state={
                ...state,
                categories:action.payload.categories
            }
            break;
        }

        return state;
}