import { useState, useEffect } from 'react';
import { heroSlides } from '../data/tours';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="relative h-[400px] sm:h-[450px] md:h-[500px] overflow-hidden">
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {heroSlides.map((slide) => (
                    <div
                        key={slide.id}
                        className="w-full flex-shrink-0 relative h-full"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/50"></div>

                        {/* Content */}
                        <div className="relative container mx-auto px-4 h-full flex items-center">
                            <div className="text-white max-w-2xl animate-fadeInUp">
                                <span className="text-sm md:text-base uppercase tracking-wider text-yellow-400 font-semibold">
                                    Khám Phá
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3">
                                    {slide.title}
                                </h1>
                                <p className="text-base md:text-lg mb-2 text-gray-200">
                                    {slide.description}
                                </p>
                                <p className="text-sm md:text-base mb-6 text-gray-300">
                                    {slide.subText}
                                </p>
                                <a
                                    href="#tours"
                                    className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-5 py-2 md:px-6 md:py-2.5 rounded-lg transition transform hover:scale-105 text-sm md:text-base"
                                >
                                    Khám phá ngay →
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition z-10"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition z-10"
            >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                                ? 'w-6 h-1.5 bg-yellow-500'
                                : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}