import React from 'react';
import GoogleMapReact from 'google-map-react';
function Contact(props) {

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 10
    };


    return (
        <>
            <div style={{ height: '100vh', width: '100%', position: 'relative' }}>

                {/* Flex container for the overlay */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row z-10">
                    {/* Contact Information Section */}
                    <div className="flex-1 bg-red-500 p-8 text-white flex items-center justify-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p>If you have any questions, feel free to reach out!</p>
                            <ul className="mt-4">
                                <li>Email: example@example.com</li>
                                <li>Phone: +1 (234) 567-890</li>
                                <li>Address: 123 Main St, City, Country</li>
                            </ul>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div id="form" className="flex-1 bg-white p-8 flex items-center justify-center">
                        <form className="w-full max-w-lg">
                            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="message"
                                    placeholder="Your Message"
                                    rows="4"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-red-400 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>



    );
}

export default Contact;