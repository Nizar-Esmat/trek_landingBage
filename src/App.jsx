import { useState } from 'react';
import './App.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import Service from "./components/Service/Service.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/home/Home.jsx";


let router = createBrowserRouter([
    {path: "/", element:<Layout/> , children:[
            {index : true , element : <Home/> },
            {path : "/home" , element : <Home/> },
            {path : "/About", element : <About />},
            {path : "/Blog" , element : <Blog></Blog>} ,
            {path :"/Contact" , element : <Contact></Contact>},
            {path :"/Service" , element : <Service></Service>},
            {path : "*"  , element:<NotFound></NotFound>}
        ]},
])

function App() {
    return (
        <div >
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
