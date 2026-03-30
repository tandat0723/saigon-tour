'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { tours } from '@/data/tours';
import { Tour } from '@/types';

export default function TourDetail() {
    const params = useParams();
    const tour: Tour | undefined = tours.find(t => t.id === params.id);

    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    const renderStars = (rating: number): string => {
        return '⭐'.repeat(Math.floor(rating));
    };

    if (!tour) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Không tìm thấy tour</h1>
                    <Link href="/" className="text-blue-600 hover:underline">
                        Quay lại trang chủ
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Header />
            <main className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <Link href="/#tours" className="text-blue-600 hover:underline mb-4 inline-block">
                        ← Quay lại danh sách tour
                    </Link>

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={tour.image} alt={tour.name} className="w-full h-96 object-cover" />
                        
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">{tour.name}</h1>
                                    <p className="text-gray-600">{tour.location}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-yellow-500 mb-1">{renderStars(tour.rating)}</div>
                                    <span className="text-gray-500">({tour.rating})</span>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-6">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">⏱️ {tour.duration}</span>
                                <span className="bg-green-100 text-green-600 px-3 py-1 rounded">💰 {formatPrice(tour.price)}</span>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Mô tả tour</h2>
                                <p className="text-gray-700 leading-relaxed">{tour.description}</p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Lịch trình</h2>
                                <ul className="space-y-2">
                                    {tour.itinerary.map((item: string, index: number) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-blue-600 mr-2">•</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-4">Bao gồm</h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {tour.includes.map((item: string, index: number) => (
                                        <li key={index} className="flex items-center">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="border-t pt-6 flex justify-between items-center">
                                <div>
                                    <p className="text-gray-500">Giá chỉ từ</p>
                                    <p className="text-3xl font-bold text-blue-600">{formatPrice(tour.price)}</p>
                                </div>
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                                    Đặt tour ngay
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