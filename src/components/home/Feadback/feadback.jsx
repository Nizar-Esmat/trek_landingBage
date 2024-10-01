import React from 'react';
import Slider from 'react-slick';

// Sample card data with ratings
const cards = [
    {
        img: 'https://via.placeholder.com/300x300', // Use a square placeholder
        text: 'Card 1 Description',
        rating: 4, // Number of stars
    },
    {
        img: 'https://via.placeholder.com/300x300', // Use a square placeholder
        text: 'Card 2 Description',
        rating: 3, // Number of stars
    },
    {
        img: 'https://via.placeholder.com/300x300', // Use a square placeholder
        text: 'Card 3 Description',
        rating: 5, // Number of stars
    },
];

function CardSwitcher() {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: (i) => (
            <div className="flex items-center  justify-center w-7 h-7 rounded-full bg-red-600 text-white ">
                {i + 1}
            </div>
        ),
    };



    return (
        <div className="my-10">
            <h2 className="font-bold text-red-700 text-5xl text-center py-1">Feedback</h2>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col items-center justify-center my-10">
                        <img
                            className="w-48 h-48 object-cover m-auto"
                            src={card.img}
                            alt={`Card ${index + 1}`}
                        />
                        <p className="text-4xl  text-center text-gray-700    mt-4">{card.text}</p>

                        {/* Stars Section */}
                        <div className="flex justify-center mt-4">
                            {[...Array(5)].map((_, starIndex) => (
                                <svg
                                    key={starIndex}
                                    className={` h-5 w-5 ${starIndex < card.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 15l-5.878 3.09 1.121-6.568L0 6.19l6.593-.952L10 0l2.407 5.238L19 6.19l-5.243 5.332 1.121 6.568L10 15z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CardSwitcher;
