// const heading = React.createElement("h1",{id:"heading",xyx:"abc"},"Hello World from React")
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/BodyComponent";
import Headercomponent from "./components/Headercomponent";
import { useState,useEffect } from "react";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import {lazy,Suspense} from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Contact from "./components/Contact";


const About = lazy(()=>import("./components/About"));
const Appcomponent = () =>{
    const [username,setusername] = useState();
    useEffect(()=> {
        const data = {
            name: "Anish Dogra"
        }
        setusername(data.name)
    },[]
    );

  return( 
    <Provider store = {appStore}>
    <UserContext.Provider value={{loggedInUser:username,setusername}} >
      <div className="app">
          <Headercomponent/>
          <Outlet/>
       
      </div>
    </UserContext.Provider>
    </Provider>
  )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element:<Appcomponent/>,
        children:[
            {
                path: "/",
                element:<BodyComponent/>,
                errorElement:<Error/>
        
            },
            {
                path: "/about",
                element:<Suspense fallback = {<h1>Loading.....</h1>}><About/></Suspense>,
                errorElement:<Error/>
        
            },
            {
                path: "/cart",
                element:<Cart/>,
                errorElement:<Error/>
        
            },
            {
                path: "/restaurants/:resId",
                element:<RestaurantMenu/>,
                // errorElement:<Error/>
        
            },
            {
                path: "/contact",
                element:<Contact/>,
                // errorElement:<Error/>
        
            },
        ],
        errorElement:<Error/>

    },
    
])







const root = ReactDOM.createRoot(document.getElementById("root"))
// console.log(parent); //object
root.render(<RouterProvider router = {approuter}/>)