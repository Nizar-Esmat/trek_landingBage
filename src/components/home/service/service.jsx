import React from 'react';
import img1 from "../../../assets/service/img1.png";
import img2 from "../../../assets/service/img2.png";
import img3 from "../../../assets/service/img3.png";
import img4 from "../../../assets/service/img4.png";
import img5 from "../../../assets/service/img9.png";

import cover1 from "../../../assets/service/cover1.png";
import cover2 from "../../../assets/service/cover2.png";
import cover3 from "../../../assets/service/cover3.png";
import cover4 from "../../../assets/service/cover4.png";

const service = [
    { img: img1, cover: cover1, title: "Service 1", description: "Best deal on service 1" },
    { img: img2, cover: cover2, title: "Service 2", description: "Best deal on service 2" },
    { img: img3, cover: cover3, title: "Service 3", description: "Best deal on service 3" },
    { img: img4, cover: cover4, title: "Service 4", description: "Best deal on service 4" },
];

function Service() {
    return (
        <div className="container my-14">
            <h2 className="font-bold text-[#F26554] text-5xl text-center py-1 my-3">service</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                {/* First Column: Two smaller images */}
                <div className="flex flex-col gap-8">
                    {service.slice(0, 2).map((item, index) => (
                        <div key={index} className="text-center relative">
                            <div className="relative w-full  hover:scale-110 transition duration-300 ">
                                <img src={item.cover} alt={`Cover ${index + 1}`} className="w-full"/>
                                <img
                                    src={item.img}
                                    alt={`Service ${index + 1}`}
                                    className="absolute inset-0 mx-auto top-1/2 transform -translate-y-1/2 z-10"
                                    style={{left: "50%", transform: "translate(-50%, -50%)"}}
                                />
                            </div>
                            <h3 className="font-bold text-xl text-yellow-400 mt-4">{item.title}</h3>
                            <p className="font-semibold text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Middle Column: Center Image (img5) */}
                <div className="text-center flex items-center justify-center w-full md:w-1/3">
                    <img
                        src={img5}
                        alt="Center Image"
                        className="w-full object-contain"
                    />
                </div>

                {/* Third Column: Two smaller images */}
                <div className="flex flex-col gap-8">
                    {service.slice(2).map((item, index) => (
                        <div key={index + 2} className="text-center relative">
                            <div className="relative w-full  hover:scale-110 transition duration-300">
                                <img src={item.cover} alt={`Cover ${index + 3}`} className="w-full"/>
                                <img
                                    src={item.img}
                                    alt={`Service ${index + 3}`}
                                    className="absolute inset-0 mx-auto top-1/2 transform -translate-y-1/2 z-10"
                                    style={{
                                        left: "50%",
                                        transform: "translate(-50%, -50%)"
                                    }} // Centering both horizontally and vertically
                                />
                            </div>
                            <h3 className="font-bold text-xl text-yellow-400 mt-4">{item.title}</h3>
                            <p className="font-semibold text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Service;
