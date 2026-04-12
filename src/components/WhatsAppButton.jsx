import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const phoneNumber = '84564957525';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
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
        <div
            className={`
                fixed bottom-6 right-6 z-50 transition-all duration-300
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
            `}
        >
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    group relative flex items-center justify-center
                    bg-green-500 hover:to-green-700
                    text-white rounded-full shadow-lg
                    transition-all duration-300
                    hover:scale-110 hover:shadow-2xl
                    active:scale-95
                "
            >
                {/* Icon WhatsApp */}
                <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    <i className="fab fa-whatsapp text-3xl md:text-4xl"></i>
                </div>

                {/* Tooltip */}
                <span className="
                    absolute right-full mr-3 px-3 py-2 
                    bg-gray-800 text-white text-xs md:text-sm rounded-lg 
                    whitespace-nowrap opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible
                    transition-all duration-300
                ">
                    Chat with us!
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full 
                        border-4 border-transparent border-l-gray-800"></span>
                </span>

                {/* Hiệu ứng pulse */}
                <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-50"></span>
            </a>
        </div>
    );
}