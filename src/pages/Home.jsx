import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import HeroSlider from '../components/HeroSlider';
import Introduction from '../components/IntroductionSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                {/* Hero + Introduction Section*/}
                <section className="pt-24 md:pt-32">
                    <div className="xl:container mx-auto sm:px-4 2xl:px-24">
                        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">

                            {/* Left - Introduction (30%) */}
                            <div className="w-full xl:w-3/10">
                                <Introduction />
                            </div>

                            {/* Right - Hero Slider (70%) */}
                            <div className="w-full xl:w-7/10">
                                <HeroSlider />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tours Section */}
                <section id="tours" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl text-blue-600 font-bold text-center mb-8">
                            Tour in Sai Gon
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tours.map((tour) => (
                                <TourCard key={tour.id} tour={tour} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}