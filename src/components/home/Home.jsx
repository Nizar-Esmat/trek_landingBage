import React from 'react';
import Typography from "@mui/material/Typography";
import logo from '../../assets/pic3.svg';
import {Element} from "react-scroll";
import Abouts from "./about/Abouts.jsx";
import Offer from "./offer/Offer.jsx";
import Service from "./service/service.jsx";
import Feadback from "./Feadback/feadback.jsx";

function Home() {
    return (
        <>
        <div className="md:flex-row flex flex-col items-center justify-center ">
            <div className="md:w-1/2 w-full  ">
        <img src={logo} alt="logo" className="object-cover object-center" />
            </div>
            <div className="md:w-1/2  w-full px-4 flex flex-col items-center justify-center  gap-7 ">
                <h2 className="font-bold text-red-700 text-5xl text-center py-2">home </h2>
                <p className="px-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis odit aperiam libero ipsa
                    natus, asperiores inventore incidunt numquam consequatur harum aliquid qui sapiente modi quam autem
                    fugiat illum illo.
                </p>
                <button className="px-6 py-3 bg-red-500  rounded-full hover:bg-red-800 text-zinc-50 ">Learn more </button>
            </div>
        </div>

            <Element name="abouts">
                <Abouts />
            </Element>
            <Element name="offers">
                <Offer></Offer>
            </Element>
            <Element name="Service">
                <Service></Service>
            </Element>
            <Element name="feadback">
                <Feadback></Feadback>
            </Element>
        </>
    );
}

export default Home;