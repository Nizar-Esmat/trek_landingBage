import React from 'react';

function Footer() {
    return (
        <footer className="bg-red-600 text-white py-9">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">
                    © 2024 galaxy. All Rights Reserved.
                </p>
                <div className="flex justify-center space-x-4">
                    {/* Facebook Icon */}
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                        <div className="rounded-full bg-white p-2 hover:bg-red-500">
                            <svg
                                className="h-6 w-6 text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22.675 0h-21.35C.42 0 0 .419 0 .935v21.129C0 23.581.42 24 1.325 24h11.493V14.709h-3.12v-3.823h3.12V8.041c0-3.095 1.853-4.787 4.53-4.787 1.297 0 2.417.096 2.743.139v3.168l-1.882.001c-1.477 0-1.76.699-1.76 1.723v2.26h3.53l-.46 3.823h-3.07V24h6.065c.905 0 1.325-.419 1.325-1.035V.935C24 .419 23.58 0 22.675 0z" />
                            </svg>
                        </div>
                    </a>

                    {/* Instagram Icon */}
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                        <div className="rounded-full bg-white p-2 hover:bg-red-500">
                            <svg
                                className="h-6 w-6 text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm6.5 12c0 3.582-2.918 6.5-6.5 6.5s-6.5-2.918-6.5-6.5 2.918-6.5 6.5-6.5 6.5 2.918 6.5 6.5zm-9.5 0c0 1.653 1.347 3 3 3s3-1.347 3-3-1.347-3-3-3-3 1.347-3 3zm8.5-4c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
                            </svg>
                        </div>
                    </a>

                    {/* X (Twitter) Icon */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110">
                        <div className="rounded-full bg-white p-2 hover:bg-red-500">
                            <svg
                                className="h-6 w-6 text-red-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M22.46 6c-.77.34-1.6.57-2.47.67a4.28 4.28 0 001.88-2.36 8.6 8.6 0 01-2.72 1.04A4.24 4.24 0 0015.15 5c-2.33 0-4.23 1.92-4.23 4.28 0 .33.04.65.11.96A12.06 12.06 0 013.25 4.6a4.28 4.28 0 001.31 5.71 4.18 4.18 0 01-1.92-.53v.05c0 2.07 1.47 3.8 3.43 4.19a4.29 4.29 0 01-1.91.07c.54 1.67 2.13 2.88 4 2.92a8.6 8.6 0 01-5.36 1.84A12.07 12.07 0 008 20.29a12.09 12.09 0 006.5-1.9c7.8-4.52 9.64-10.76 9.64-15.89 0-.21 0-.43-.02-.64A6.83 6.83 0 0024 6c-.89.39-1.85.65-2.85.76a4.28 4.28 0 001.88-2.36z" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
