import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef(null);
    const placeholderRef = useRef(null);

    useEffect(() => {
        // Tạo một placeholder để tránh giật
        if (placeholderRef.current && headerRef.current) {
            const headerHeight = headerRef.current.offsetHeight;
            placeholderRef.current.style.height = `${headerHeight}px`;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Thêm threshold để tránh giật
            if (scrollY > 30) {
                setIsSticky(true);
            } else if (scrollY < 20) {
                setIsSticky(false);
            }
        };

        // Sử dụng requestAnimationFrame để tối ưu performance
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
            {/* Placeholder giữ khoảng trống khi header fixed */}
            <div ref={placeholderRef} className="hidden"></div>
            
            <header
                ref={headerRef}
                className={`
                    w-full py-3 transition-all duration-300 z-50
                    ${isSticky 
                        ? 'fixed top-0 left-0 bg-white/98 shadow-lg animate-slideDown' 
                        : 'bg-white shadow-md relative'
                    }
                `}
                style={{
                    willChange: isSticky ? 'transform' : 'auto',
                    transform: 'translateZ(0)'
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Logo và tên công ty - căn giữa */}
                        <div className="flex-1"></div>
                        
                        <div className="text-center">
                            <Link to="/" className="inline-block">
                                {/* Logo */}
                                <div className="flex justify-center mb-1">
                                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                        <span className="text-white text-xl">🏍️</span>
                                    </div>
                                </div>
                                {/* Tên chính */}
                                <h1 className={`font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 ${isSticky ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
                                    Bụi motobike tour
                                </h1>
                                {/* Slogan */}
                                <p className={`text-teal-600 font-medium transition-all duration-300 ${isSticky ? 'text-xs' : 'text-sm'}`}>
                                    'Saigon by night'
                                </p>
                            </Link>
                        </div>

                        {/* Button Contact Us - bên phải */}
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
                                    ${isSticky ? 'px-4 py-1.5 text-sm' : 'px-6 py-2.5'}
                                `}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>💬</span>
                                    Contact us
                                    <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
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