import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"


// component:Component,...rest
const PrivateRoute=({children})=>{
    // return <Route {...rest} component={(props) => {
    //     const token = window.localStorage.getItem('token');
    //     if(token){
    //         return <Component {...props} />
    //     }else{
    //         return <Navigate to={`/signin`} />
    //     }
    // }} />

const token=window.localStorage.getItem('token');// replace with your authentication logic


return token ? children :<Navigate to="/signin" />
// return (
//   <Route
//     {...rest}
//     element={token ? <Component /> : <Navigate to="/signin" />}
//   />
// );
    
}

export default PrivateRoute