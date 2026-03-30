import Header from '../components/Header';
import Footer from '../components/Footer';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import HeroSlider from '../components/HeroSlider';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <HeroSlider />

                {/* Introduction Section */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed text-lg md:text-xl">
                            Hopping on the motorbike with local Aodai Rider, exploring the night life in Saigon by visiting local coffee shops, trying Vietnamese cuisines, sightseeing, and more.
                        </p>
                    </div>
                </section>

                {/* Tours Section */}
                <section id="tours" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Tour Nổi Bật
                        </h2>
                        <p className="text-gray-600 text-center mb-12">
                            Những điểm đến hấp dẫn nhất
                        </p>
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