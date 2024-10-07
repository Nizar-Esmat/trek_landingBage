import React from 'react';
import img1 from '../../assets/About/img1.png';
import cover from '../../assets/About/img18.png';
import img2 from '../../assets/About/img19.png';
import img3 from '../../assets/About/img20.png';
import Abouts from "../home/about/Abouts.jsx";
import {Feedback} from "@mui/icons-material";
import CardSwitcher from "../home/Feadback/feadback.jsx";
import {Helmet} from "react-helmet";
import {AnimatePresence, motion} from "framer-motion";



function About(props) {

    let [visible, setVisible] = React.useState(true);
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <section className="text-center my-10 flex flex-col items-center justify-center relative">
                <h1 className="text-[#F26554] text-5xl font-bold py-5">About</h1>

                {/* Wrapper for images to manage position */}
                <div className="relative w-full flex justify-center items-center">
                    {/* Cover image (behind) */}
                    <img src={cover} alt="Cover"
                         className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-auto opacity-50"/>

                    {/* Main image (in front of cover) */}
                    <img src={img1} alt="About" className="relative z-10 w-1/2 h-auto object-cover shadow-lg"/>
                </div>

                <span className="text-2xl font-bold mt-10 text-[#F26554]">About text</span>
            </section>


            <section className="my-10">
                {/* First Section: Image on the Top, Text on the Bottom on Small Screens */}
                <div className="flex flex-col md:flex-row items-center justify-end gap-6">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img src={img2} alt="Mission Image"
                             className="m-auto h-auto object-cover transition-transform duration-300 hover:scale-125"/>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 px-4 text-center">
                        <h3 className="text-4xl font-bold text-[#F26554] mb-4">mission_title</h3>
                        <span className="text-lg text-gray-700">mission_text</span>
                    </div>
                </div>

                {/* Second Section: Image on the Top, Text on the Bottom on Small Screens */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-end gap-6 mt-10">
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src={img3}
                            alt="Mission Image"
                            className="m-auto h-auto object-cover transition-transform duration-300 hover:scale-125"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 px-4 text-center">
                        <h3 className="text-4xl font-bold text-[#F26554] mb-4">mission_title</h3>
                        <span className="text-lg text-gray-700">mission_text</span>
                    </div>
                </div>
            </section>


            <CardSwitcher></CardSwitcher>




        </div>
    );
}

export default About;
