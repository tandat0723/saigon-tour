import { useState, useEffect } from 'react';
import { heroSlides } from '../data/tours';
import { AdvancedImage } from '@cloudinary/react';
import { cld } from '../lib/cloudinary';
import { scale } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { auto } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as formatAuto } from "@cloudinary/url-gen/qualifiers/format";

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const getCloudinaryImage = (publicId) => {
        return cld.image(publicId)
            .resize(scale().width(1200))
            .roundCorners(byRadius(16))
            .format(formatAuto())
            .quality(auto());
    };

    return (
        <section className="relative h-95 sm:h-95 md:h-115 sm:rounded-2xl overflow-hidden shadow-xl">
            {heroSlides.map((slide, index) => {
                const cloudinaryImg = getCloudinaryImage(slide.publicId);

                return (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <AdvancedImage
                            cldImg={cloudinaryImg}
                            className="w-full h-full object-cover"
                        />
                    </div>
                );
            })}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full ${currentSlide === index
                            ? 'w-8 h-2 bg-white'
                            : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}