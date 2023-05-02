import { Router, Route, Switch, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Container/HomePage";
import SigninPage from "./Container/SigninPage";
import SignupPage from "./Container/SignupPage";
import Layout from "./Components/Layout";
import PrivateRoute from "./Components/HOC/PrivateRoutes";
import React, { useEffect} from "react";
import { isUserLoggedIn } from "./actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import Products from "./Container/Products/product";
import Orders from "./Container/Orders/order";
import Category from "./Container/Category/category"
function App() {
  const auth=useSelector(state=>state.auth);
  const dispatch=useDispatch();

  useEffect(()=>{
    if(!auth.aunthenticate)
    {
      dispatch(isUserLoggedIn());
    }

   
  },[]);

  
  return (
    <div className="App">
      <Routes>
        {/* <PrivateRoute>
      <Route path="/" element={<HomePage/>} />
      </PrivateRoute> */}
  
          <Route path="/" element={<PrivateRoute>
            <HomePage />
          </PrivateRoute>} />

          <Route path="/products" element={<PrivateRoute>
           <Products/>
          </PrivateRoute>} />

          <Route path="/category" element={<PrivateRoute>
           <Category/>
          </PrivateRoute>} />

          <Route path="/order" element={<PrivateRoute>
            <Orders/>
          </PrivateRoute>} />

          {/* <PrivateRoute path="/" component={<HomePage />} /> */}
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />

      </Routes>
    </div>
  );
}

export default App;
