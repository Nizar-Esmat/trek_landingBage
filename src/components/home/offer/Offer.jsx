import React from 'react';
import img1 from '../../../assets/service1.png';
import img2 from '../../../assets/service2.png';
import img3 from '../../../assets/service3.png';
import img4 from '../../../assets/service4.png';

const offers = [
    { img: img1, title: "Offer 1", description: "Best deal on service 1" },
    { img: img2, title: "Offer 2", description: "Exclusive offer for service 2" },
    { img: img3, title: "Offer 3", description: "Get a discount on service 3" },
    { img: img4, title: "Offer 4", description: "Special offer for service 4" },
];

function Offer() {
    return (
        <div className="container my-10">
            <h2 className="font-bold text-red-700 text-3xl text-center py-1 my-4">Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {offers.map((offer, index) => (
                    <div key={index} className="text-center transition transform hover:scale-105 duration-300">
                        <img src={offer.img} alt={`Image for ${offer.title}`} className="mx-auto "/>
                        <h3 className="font-bold text-2xl text-yellow-400">{offer.title}</h3>
                        <span className="font-semibold text-gray-600">{offer.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Offer;
