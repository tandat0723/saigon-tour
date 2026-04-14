import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { tours } from '../data/tours';

export default function TourDetail() {
    const { slug } = useParams();
    const tour = tours.find(t => t.slug === slug);

    const formatVND = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + ' VND';
    };

    const phoneNumber = '84564957525';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    if (!tour) {
        return (
            <>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-lg sm:text-2xl font-bold mb-4">Không tìm thấy tour</h1>
                        <Link to="/" className="text-[#0461CA] hover:underline text-xs sm:text-base">
                            Quay lại trang chủ
                        </Link>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen pt-30 md:pt-35">
                <div className="md:container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6 text-[11px] sm:text-sm text-gray-500">
                        <Link to="/" className="hover:text-[#0461CA]">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700">{tour.name}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
                                <img
                                    src={tour.image}
                                    alt={tour.name}
                                    className="w-full h-56 sm:h-64 md:h-96 object-cover"
                                />
                            </div>

                            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg mb-6">
                                <div className="flex items-center gap-2 mb-3">

                                    <span className="text-xs sm:text-sm font-semibold text-orange-500 pr-3 py-1 rounded-full">
                                        {tour.category}
                                    </span>

                                    <span className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
                                        <i className="far fa-clock text-xssm:text-sm"></i>
                                        {tour.duration} hours tour
                                    </span>
                                </div>
                                <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#0461CA] mb-1">
                                    {tour.name}
                                </h1>

                                <h5 className="text-[11px] sm:text-sm md:text-md text-orange-500 mb-4">
                                    {tour.otherName}
                                </h5>

                                <p className="text-gray-700 text-[13px] sm:text-base leading-relaxed">
                                    {tour.description}
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="rounded-2xl shadow-lg p-4 sm:p-6 sticky top-24">
                                <h3 className="text-sm sm:text-lg font-bold text-gray-800 mb-4">
                                    Detailed tour information
                                </h3>

                                <div className="mb-6 pb-4 border-b border-gray-200">
                                    <span className="text-lg sm:text-2xl font-bold text-[#0461CA]">
                                        US ${tour.priceUSD}
                                    </span>
                                    <span className="text-gray-500 ml-1 text-xs font-bold sm:text-sm">/ person</span>
                                    <p className="text-xs sm:text-sm font-bold text-gray-500 mt-1">
                                        ~ {formatVND(tour.priceVND)}
                                    </p>
                                </div>

                                <div className="space-y-3 mb-6 text-black">
                                    <div className="flex items-center gap-3">
                                        <i className="fas fa-calendar-alt text-xs sm:text-base w-5"></i>
                                        <span className="text-xs sm:text-sm">Start at {tour.startTime} daily</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="far fa-clock text-xs sm:text-base w-5"></i>
                                        <span className="text-xs sm:text-sm">{tour.duration} hours tour</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-location-dot text-xs sm:text-base w-5"></i>
                                        <span className="text-xs sm:text-sm">Ho Chi Minh City</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="fa-solid fa-user-group text-xs sm:text-base w-5"></i>
                                        <span className="text-xs sm:text-sm">Private or small group</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open(whatsappLink, '_blank')}
                                    className="w-full cursor-pointer text-white py-2.5 sm:py-3 
                                    rounded-3xl font-semibold bg-orange-500 hover:bg-orange-600 
                                    transition flex items-center justify-center gap-2 text-xs sm:text-base"
                                >
                                    <i className="fab fa-whatsapp text-xs sm:text-base"></i>
                                    Booking via WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}