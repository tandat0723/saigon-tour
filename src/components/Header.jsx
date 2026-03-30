import { Link } from 'react-router-dom';

export default function Header() {
    const handleContactClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="w-full bg-white shadow-md py-3 md:py-4 mt-10">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center justify-between">
                    {/* Logo và tên công ty - căn giữa */}
                    <div className="flex-1"></div>

                    <div className="text-center">
                        <Link to="/" className="inline-block">
                            {/* Logo */}
                            <div className="flex justify-center mb-0.5 sm:mb-1">
                                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white text-base sm:text-lg md:text-xl">🏍️</span>
                                </div>
                            </div>
                            {/* Tên chính */}
                            <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                                Bụi motobike tour
                            </h1>
                            {/* Slogan */}
                            <p className="text-xs text-teal-600 font-medium hidden sm:block">
                                'Saigon by night'
                            </p>
                        </Link>
                    </div>

                    {/* Button Contact Us - bên phải */}
                    <div className="flex-1 flex justify-end">
                        <button
                            onClick={handleContactClick}
                            className="
                                group relative rounded-full cursor-pointer
                                bg-gradient-to-r from-teal-500 to-blue-500
                                text-white font-semibold
                                overflow-hidden transition-all duration-300
                                hover:shadow-lg hover:shadow-teal-500/30
                                hover:scale-105 active:scale-95
                                whitespace-nowrap
                                px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base
                            "
                        >
                            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                                <span className="text-sm sm:text-base">💬</span>
                                <span className="hidden sm:inline">Contact us</span>
                                <span className="inline sm:hidden">Contact</span>
                                <span className="text-sm sm:text-base transition-transform group-hover:translate-x-1">→</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}