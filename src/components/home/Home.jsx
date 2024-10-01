import React from 'react';

import logo from '../../assets/pic3.svg';
import building from '../../assets/Home/buildings.png'
import car from '../../assets/Home/car.svg'
import {Element} from "react-scroll";
import Abouts from "./about/Abouts.jsx";
import Offer from "./offer/Offer.jsx";
import Service from "./service/service.jsx";
import Feadback from "./Feadback/feadback.jsx";

import './service/moving.moudel.css'

function Home() {
    return (
        <>
            <div
                className="md:flex-row h-screen flex flex-col items-center justify-around p-0 md:p-8">
                <div id="an"
                    className="relative md:w-full w-1/2  h-screen overflow-hidden">
                    <div
                        id="building"
                        className="absolute inset-0 bg-no-repeat bg-cover "
                        style={{
                            backgroundImage: {building}, // Update the path as needed
                            backgroundSize: 'contain', // Adjust for better fit
                            backgroundPosition: 'center', // Center the image
                        }}
                    />
                    <img
                        src={car}
                        alt="Car"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-auto md:w-1/3 lg:w-1/5 animate-car"
                    />
                </div>


                <div className="md:w-1/2 w-full px-4 flex flex-col items-center justify-center gap-7">
                    <h1 className="font-bold text-red-700 text-5xl text-center py-2">Home</h1>
                    <h4 className="px-6 text-center text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis odit aperiam libero ipsa
                        natus, asperiores inventore incidunt numquam consequatur harum aliquid qui sapiente modi quam
                        autem
                        fugiat illum illo.
                    </h4>
                    <button className="px-6 py-3 bg-red-500 rounded-full hover:bg-red-800 text-zinc-50 text-xl">
                        Learn more
                    </button>
                </div>
            </div>


            <Element name="abouts">
                <Abouts/>
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