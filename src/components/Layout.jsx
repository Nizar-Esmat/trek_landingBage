import React from 'react';
import NavBar from "./NavBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

function Layout(props) {
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">


            <Outlet></Outlet>

            </div>
            <Footer></Footer>

        </div>
    );
}

export default Layout;