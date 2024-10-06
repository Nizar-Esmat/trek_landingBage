import React from 'react';

function ContactForm() {
    return (
        <div className="flex items-center justify-between w-full  ">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full h-screen">
                <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Name Input */}
                    <div className="col-span-1">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="col-span-1">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    {/* Phone Input */}
                    <div className="col-span-1">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="phone"
                            type="tel"
                            placeholder="Your Phone Number"
                            required
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="col-span-1">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="subject"
                            type="text"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    {/* Company Input */}
                    <div className="col-span-1">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="company">
                            Company
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="company"
                            type="text"
                            placeholder="Your Company Name"
                            required
                        />
                    </div>

                    {/* Address Input */}
                    <div className="col-span-1">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            type="text"
                            placeholder="Your Address"
                            required
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="col-span-1 md:col-span-3">
                        <label className="block text-[#F26554] text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-[#F26554] leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Your Message"
                            rows="4"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-3 flex items-center justify-center">
                        <button
                            className="bg-red-500 hover:bg-[#F26554] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
