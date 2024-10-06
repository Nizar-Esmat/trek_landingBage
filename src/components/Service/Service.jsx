import React from 'react';
import backgroundImg from '../../assets/About/img18.png';
import img1 from '../../assets/New folder/img6.png';
import ContactForm from "./ContactForm.jsx";
import {Helmet} from "react-helmet";
import './pizzaAnimation.moudle.css'

function Service(props) {
    return (
        <div>
            <Helmet>
                <title>Service</title>
            </Helmet>
            <h1 className="font-bold text-[#F26554] text-5xl text-center py-5">Service</h1>
        <div className="relative">
            <div
                className="bg-contain bg-no-repeat bg-center h-screen" // Adjust height as needed
                style={{ backgroundImage: `url(${backgroundImg})` }} // Correctly set background image
            >
                <img
                    id="pizzaAnimation"
                    src={img1} // Replace with your second image variable
                    alt="Second Image"
                    className="absolute md:left-10   top-0  w-full h-auto md:top-1/4 md:w-1/3  lg:w-1/4" // Full width on small screens
                />
            </div>
        </div>

        <ContactForm/>

        </div>
    );
}

export default Service;
