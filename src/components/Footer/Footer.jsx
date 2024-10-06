import Lottie from 'lottie-react';
import footerAnimation from './grey.json'; // Path to your Lottie JSON file

function Footer() {
    return (
        <footer className="text-white">
            <div className="flex justify-center items-center">
                {/* Lottie Animation */}
                <Lottie
                    animationData={footerAnimation}
                    loop={true}
                    style={{height: '100%', width: '100%'}}
                />
            </div>

            {/* Footer Content */}

        </footer>
    );
}

export default Footer;
