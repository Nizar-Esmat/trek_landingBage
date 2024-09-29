import React from 'react';
import logo from "../../../assets/1.png";

function Abouts() {
    return (
        <div className="md:flex-row flex flex-col items-center justify-center p-4 md:p-8">

            <div className="md:w-1/2 w-full px-2 flex flex-col items-center justify-center gap-9">
                <h2 className="font-bold text-red-700 text-3xl text-center py-1">About</h2>
                <p className="px-4 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis odit aperiam libero ipsa
                    natus, asperiores inventore incidunt numquam consequatur harum aliquid qui sapiente modi quam autem
                    fugiat illum illo.
                </p>
                <button className="px-4 py-2 bg-red-500 rounded-full hover:bg-red-800 text-white">
                    Learn more
                </button>
            </div>

            <div className="md:w-1/2 w-full flex justify-center">
                <img src={logo} alt="logo" className="object-contain w-2/3 h-auto"/>
            </div>
        </div>
    );
}

export default Abouts;
