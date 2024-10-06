import React from 'react';
import cover from "../../assets/About/img18.png";
import img1 from "../../assets/About/img1.png";


import blog1 from "../../assets/About/img19.png";
import blog2 from "../../assets/About/img20.png";
import Bagination from "./Bagination.jsx";
import {Helmet} from "react-helmet";

function Blog(props) {

    let plogs = [
        {tilte : "blog" , text : "blog text"}
    ]
    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <section className="text-center my-10 flex flex-col items-center justify-center relative">
                <h1 className="text-[#F26554] text-5xl font-bold py-5">Blog</h1>

                {/* Wrapper for images to manage position */}
                <div className="relative w-full flex justify-center items-center">
                    {/* Cover image (behind) */}
                    <img src={cover} alt="Cover"
                         className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-auto opacity-50"/>

                    {/* Main image (in front of cover) */}
                    <img src={img1} alt="About" className="relative z-10 w-1/2 h-auto object-cover shadow-lg"/>
                </div>

                <span className="text-2xl text-[#F26554] font-bold mt-10">Blog text</span>
            </section>


            <Bagination></Bagination>
        </div>

    );
}

export default Blog;