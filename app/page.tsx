import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TourCard from "@/components/TourCard";
import { tours } from '@/data/tours';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[500px] bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative container mx-auto px-4 h-full flex items-center">
                        <div className="text-white">
                            <h1 className="text-5xl font-bold mb-4">
                                Khám Phá Việt Nam
                            </h1>
                            <p className="text-xl mb-8">
                                Những hành trình đáng nhớ cùng SaigonTour
                            </p>
                            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
                                Khám phá ngay
                            </button>
                        </div>
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

                {/* Features Section */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">✈️</div>
                                <h3 className="text-xl font-bold mb-2">Chất lượng cao</h3>
                                <p className="text-gray-600">Dịch vụ chuyên nghiệp, đảm bảo an toàn</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🏨</div>
                                <h3 className="text-xl font-bold mb-2">Khách sạn 5 sao</h3>
                                <p className="text-gray-600">Nghỉ dưỡng thoải mái, tiện nghi</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold mb-2">Giá tốt nhất</h3>
                                <p className="text-gray-600">Cam kết giá tốt, nhiều ưu đãi</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}