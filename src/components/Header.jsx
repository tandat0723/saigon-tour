import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import whatsappIcon from '../assets/whatsapp.svg';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const phoneNumber = '84564957525';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Chào%20BuiMotobikeTour,%20tôi%20muốn%20đặt%20tour!`;

    return (
        <>
            <header
                className={`
                    fixed left-0 w-full bg-white shadow-md py-1 sm:py-3 transition-transform duration-300 
                    ease-in-out z-40 top-12 sm:top-9
                    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <div className="container mx-auto px-2 sm:px-6 md:px-10 lg:px-24">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 sm:hidden inline-block"></div>

                        <div className="text-center">
                            <Link to="/" className="inline-block">
                                <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold bg-blue-700 bg-clip-text 
                                            text-transparent whitespace-nowrap"
                                >
                                    Bui Motobike Tour
                                </h1>
                                <p className="text-xs text-gray-600 block">
                                    Saigon by night
                                </p>
                            </Link>
                        </div>

                        {/* WhatsApp Button - style như ảnh */}
                        <div className="flex-1 flex justify-end">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group relative rounded-full cursor-pointer sm:bg-[#075e54] text-white font-semibold
                                    overflow-hidden transition-all duration-300 whitespace-nowrap px-3 sm:px-4 md:px-5 py-1.5 
                                    sm:py-2 text-xs sm:text-sm md:text-base flex items-center gap-1.5 sm:gap-2"
                            >
                                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                                    <img
                                        src={whatsappIcon}
                                        alt="WhatsApp"
                                        className="w-8 h-8 sm:w-5 sm:h-5 object-contain"
                                    />
                                    <span className='hidden sm:block'>WhatsApp</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}