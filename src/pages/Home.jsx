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
                <section className="pt-24 md:pt-32 xl:container mx-auto sm:px-4 2xl:px-25 items-start">
                    <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
                        <div className="w-full xl:w-4/10">
                            <Introduction />
                        </div>

                        <div className="w-full xl:w-6/10">
                            <HeroSlider />
                        </div>
                    </div>
                </section>

                {/* Tours Section */}
                <section id="tours" className="pt-16">
                    <div className="xl:container mx-auto px-4">
                        <h2 className="text-3xl text-[#0461CA] font-bold text-center mb-8">
                            Bụi Tour in Sai Gon
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:px-15">
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