import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { tours } from '../data/tours';

export default function TourDetail() {
    const { id } = useParams();
    const tour = tours.find(t => t.id === id);
    const [activeTab, setActiveTab] = useState('itinerary');

    const formatVND = (price) => {
        return new Intl.NumberFormat('vi-VN').format(price) + ' VND';
    };

    if (!tour) {
        return (
            <>
                <Header />
                <div className=" min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Không tìm thấy tour</h1>
                        <Link to="/" className="text-primary hover:underline">
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
            <main className="bg-gray-50 min-h-screen pt-24 md:pt-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="mb-6 text-sm text-gray-500">
                        <Link to="/" className="hover:text-primary">Trang chủ</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-700">{tour.name}</span>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Images & Info */}
                        <div className="lg:col-span-2">
                            {/* Main Image */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
                                <img
                                    src={tour.image}
                                    alt={tour.name}
                                    className="w-full h-64 md:h-96 object-cover"
                                />
                            </div>

                            {/* Title & Basic Info */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-yellow-600 text-xs font-semibold px-3 py-1 rounded-full">
                                        {tour.category}
                                    </span>
                                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                                        <i className="far fa-clock"></i>
                                        {tour.duration} hours tour
                                    </span>
                                </div>
                                <h1 className="text-2xl md:text-3xl font-bold text-[#0461CA] mb-4">
                                    {tour.name}
                                </h1>
                                <p className="text-gray-600 leading-relaxed">
                                    {tour.description}
                                </p>
                            </div>

                            {/* Tabs */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                <div className="flex border-b">
                                    <button
                                        onClick={() => setActiveTab('itinerary')}
                                        className={`flex-1 py-4 text-center font-semibold transition ${activeTab === 'itinerary'
                                            ? 'text-primary border-b-2 border-primary'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        <i className="fas fa-list-ul mr-2"></i>
                                        Lịch trình
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('includes')}
                                        className={`flex-1 py-4 text-center font-semibold transition ${activeTab === 'includes'
                                            ? 'text-primary border-b-2 border-primary'
                                            : 'text-gray-500 hover:text-gray-700'
                                            }`}
                                    >
                                        <i className="fas fa-check-circle mr-2"></i>
                                        Bao gồm
                                    </button>
                                </div>

                                <div className="p-6">
                                    {activeTab === 'itinerary' && (
                                        <div className="space-y-4">
                                            {tour.itinerary?.map((item, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center 
                                                        justify-center font-semibold"
                                                    >
                                                        {index + 1}
                                                    </div>
                                                    <p className="text-gray-700 flex-1">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {activeTab === 'includes' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {tour.includes?.map((item, index) => (
                                                <div key={index} className="flex items-center gap-2">
                                                    <i className="fas fa-check-circle text-green-500"></i>
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">
                                    Detailed tour information
                                </h3>

                                {/* Price */}
                                <div className="mb-6 pb-4 border-b">
                                    <span className="text-3xl font-bold text-[#0461CA]">
                                        US ${tour.priceUSD}
                                        <span className="text-sm text-gray-500 mt-1">
                                            ~ {formatVND(tour.priceVND)}
                                        </span>

                                    </span>
                                    <span className="text-gray-500 ml-1">/ person</span>

                                </div>

                                {/* Tour Details */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3">
                                        <i className="fas fa-calendar-alt"></i>
                                        <span className="text-gray-600">Start at {tour.startTime} daily</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span className="text-gray-600">Ho Chi Minh City</span>
                                    </div>
                                </div>

                                {/* Booking Button */}
                                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition mb-3">
                                    Đặt tour ngay
                                </button>

                                {/* WhatsApp Contact */}
                                <button className="w-full border border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary/5 transition flex items-center justify-center gap-2">
                                    <i className="fab fa-whatsapp"></i>
                                    Tư vấn qua WhatsApp
                                </button>

                                <p className="text-xs text-gray-400 text-center mt-4">
                                    * Hủy tour miễn phí 24h trước khi khởi hành
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}