import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                        {/* Logo và tên ở trung tâm */}
                        <div className="text-center">
                            <Link to="/" className="inline-block">
                                <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0461CA] whitespace-nowrap">
                                    Bụi Motobike Tour
                                </h1>
                                <p className="text-xs text-gray-600">
                                    Saigon by night
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}