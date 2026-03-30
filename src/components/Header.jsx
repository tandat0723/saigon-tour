import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
        if (placeholderRef.current && headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            placeholderRef.current.style.height = `${headerHeight}px`;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 30) {
                setIsSticky(true);
            } else if (scrollY < 20) {
                setIsSticky(false);
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div ref={placeholderRef} className="hidden"></div>

            <header
                ref={headerRef}
                className={`
                    w-full transition-all duration-300 z-50
                    ${isSticky
                        ? 'fixed top-0 left-0 bg-white/98 shadow-lg animate-slideDown py-2'
                        : 'bg-white shadow-md relative py-3 md:py-4'
                    }
                `}
                style={{
                    willChange: isSticky ? 'transform' : 'auto',
                    transform: 'translateZ(0)'
                }}
            >
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-1"></div>

                        <div className="text-center">
                            <Link to="/" className="inline-block">
                                <div className="flex justify-center mb-0.5 sm:mb-1">
                                    <div className={`
                                        bg-gradient-to-br from-teal-400 to-blue-500 rounded-full 
                                        flex items-center justify-center shadow-lg
                                        transition-all duration-300
                                        ${isSticky ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10'}
                                    `}>
                                        <span className={`
                                            text-white transition-all duration-300
                                            ${isSticky ? 'text-base' : 'text-lg sm:text-xl'}
                                        `}>🏍️</span>
                                    </div>
                                </div>
                                <h1 className={`
                                    font-bold bg-gradient-to-r from-teal-500 to-blue-500 
                                    bg-clip-text text-transparent transition-all duration-300
                                    whitespace-nowrap
                                    ${isSticky
                                        ? 'text-sm sm:text-base'
                                        : 'text-base sm:text-xl md:text-2xl lg:text-3xl'
                                    }
                                `}>
                                    Bụi motobike tour
                                </h1>
                                <p className={`
                                    text-teal-600 font-medium transition-all duration-300
                                    hidden sm:block
                                    ${isSticky ? 'text-[10px]' : 'text-xs sm:text-sm'}
                                `}>
                                    'Saigon by night'
                                </p>
                            </Link>
                        </div>

                        <div className="flex-1 flex justify-end">
                            <button
                                onClick={handleContactClick}
                                className={`
                                    group relative rounded-full cursor-pointer
                                    bg-gradient-to-r from-teal-500 to-blue-500
                                    text-white font-semibold
                                    overflow-hidden transition-all duration-300
                                    hover:shadow-lg hover:shadow-teal-500/30
                                    hover:scale-105 active:scale-95
                                    whitespace-nowrap
                                    ${isSticky
                                        ? 'px-3 sm:px-4 py-1.5 text-xs sm:text-sm'
                                        : 'px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 text-sm sm:text-base'
                                    }
                                `}
                            >
                                <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                                    <span className={isSticky ? 'text-sm' : 'text-base'}>💬</span>
                                    <span className="hidden sm:inline">Contact us</span>
                                    <span className="inline sm:hidden">Contact</span>
                                    <span className={`
                                        transition-transform group-hover:translate-x-1
                                        ${isSticky ? 'text-sm' : 'text-base'}
                                    `}>→</span>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}