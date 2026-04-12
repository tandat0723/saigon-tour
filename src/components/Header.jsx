import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const direction = currentScrollY > lastScrollY ? 'down' : 'up';

                    if (direction === 'down' && currentScrollY > 80) {
                        setIsVisible(false);
                    } else if (direction === 'up' && currentScrollY <= 80) {
                        setIsVisible(true);
                    }

                    setLastScrollY(currentScrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]); // ✅ Chỉ còn lastScrollY

    return (
        <header
            className={`
                fixed left-0 w-full bg-white py-1 transition-transform duration-300 
                ease-in-out z-40 top-12 sm:top-9
                ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            `}
        >
            <div className="2xl:container mx-auto px-2 sm:px-6 md:px-10 2xl:px-35">
                <div className="flex items-center justify-center">
                    <Link to="/" className="inline-block">
                        <img
                            src={logo}
                            alt="Bụi Motobike Tour"
                            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto mx-auto object-contain"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}