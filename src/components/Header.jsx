import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

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

    return (
        <>
            <header
                className={`
                    fixed left-0 w-full bg-white py-1 sm:py-3 transition-transform duration-300 
                    ease-in-out z-40 top-12 sm:top-9
                    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                `}
            >
                <div className="2xl:container mx-auto px-2 sm:px-6 md:px-10 2xl:px-35">
                    <div className="flex items-center justify-center">
                        <div className="text-center">
                            <Link to="/" className="inline-block">
                                <img
                                    src={logo}
                                    alt="Bụi Motobike Tour"
                                    className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto mx-auto object-contain"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}