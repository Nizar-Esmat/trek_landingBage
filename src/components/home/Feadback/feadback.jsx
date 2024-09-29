import React, { useState } from 'react';

// Sample card data with ratings
const cards = [
    {
        img: 'https://via.placeholder.com/300x200',
        text: 'Card 1 Description',
        rating: 4, // Number of stars
    },
    {
        img: 'https://via.placeholder.com/300x200',
        text: 'Card 2 Description',
        rating: 3, // Number of stars
    },
    {
        img: 'https://via.placeholder.com/300x200',
        text: 'Card 3 Description',
        rating: 5, // Number of stars
    },
];

function CardSwitcher() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="flex flex-col items-center justify-center my-7">
            <h2 className="font-bold text-red-700 text-3xl text-center py-1">Feedback</h2>
            <div className="flex items-center justify-center my-7">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center p-6">
                    <img
                        className="w-full h-48 object-cover"
                        src={cards[currentIndex].img}
                        alt={`Card ${currentIndex + 1}`}
                    />
                    <p className="text-gray-700 text-base mt-4">
                        {cards[currentIndex].text}
                    </p>

                    {/* Stars Section */}
                    <div className="flex justify-center mt-4">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                className={`h-5 w-5 ${index < cards[currentIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 15l-5.878 3.09 1.121-6.568L0 6.19l6.593-.952L10 0l2.407 5.238L19 6.19l-5.243 5.332 1.121 6.568L10 15z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-4">
                {cards.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`mx-2 w-10 h-10 rounded-full cursor-pointer transition duration-300 ease-in-out flex items-center justify-center ${
                            currentIndex === index ? 'bg-red-600' : 'bg-gray-300'
                        }`}
                    >
                        <span className={`text-white font-semibold`}>{index + 1}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardSwitcher;
