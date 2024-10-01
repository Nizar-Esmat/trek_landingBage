import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

import img1 from "../../assets/blog/img20.png"; // Adjust paths as necessary
import img2 from "../../assets/blog/img19.png"; // Adjust paths as necessary

const plog = [
    { title: "plog 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quis odit aperiam libero ipsa natus, asperiores inventore incidunt numquam consequatur harum aliquid qui sapiente modi quam autem fugiat illum illo." },
    { title: "Plog 2", text: "Blog text 2" },
    { title: "Plog 3", text: "Blog text 3" },
    { title: "Plog 4", text: "Blog text 4" },
    { title: "Plog 5", text: "Blog text 5" },
    { title: "Plog 6", text: "Blog text 6" },
    { title: "Plog 7", text: "Blog text 7" },
    { title: "Plog 8", text: "Blog text 8" },
    { title: "Plog 9", text: "Blog text 9" },
    { title: "Plog 10", text: "Blog text 10" },
    { title: "Plog 11", text: "Blog text 11" },
];

function Bagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Number of items to show per page

    // Calculate total pages
    const totalPages = Math.ceil(plog.length / itemsPerPage);

    // Get the current items
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = plog.slice(startIndex, startIndex + itemsPerPage);

    // Handle page change
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            {/* Display the current items */}
            <div className="mb-4">
                {currentItems.map((item, index) => (
                    <div key={index} className="border  rounded-full p-4 mb-2 hover:scale-110 transition:transform ease-in-out duration-200">
                        {(index % 2 === 0) ? (
                            <div className="flex items-center justify-between">
                                <div className="flex-1 mx-2">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                                <img src={img1} alt={`Image for ${item.title}`} className="w-20 h-20 object-cover" />
                            </div>
                        ) : (
                            <div className="flex flex-row-reverse items-center justify-between">
                                <img src={img2} alt={`Image for ${item.title}`} className="w-20 h-20 object-cover"/>
                                <div className="flex-1 mx-2">
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700">
                            Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{Math.min(startIndex + itemsPerPage, plog.length)}</span> of{' '}
                            <span className="font-medium">{plog.length}</span> results
                        </p>
                    </div>
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                disabled={currentPage === 1}
                            >
                                <span className="sr-only">Previous</span>
                                <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'} focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                disabled={currentPage === totalPages}
                            >
                                <span className="sr-only">Next</span>
                                <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bagination;
