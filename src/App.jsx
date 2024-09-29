import { useState } from 'react';
import './App.css';
import NavBar from "./components/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/Footer.jsx";
import Abouts from "./components/home/about/Abouts.jsx";
import { Element } from "react-scroll";
import Offer from "./components/home/offer/Offer.jsx";
import Service from "./components/home/service/service.jsx";
import Feadback from "./components/home/Feadback/feadback.jsx";

function App() {
    return (
        <div >
            <NavBar></NavBar>
                <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default App;
