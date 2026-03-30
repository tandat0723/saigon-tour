import Link from 'next/link';
import { Tour } from '@/types';

interface TourCardProps {
    tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('vi-VN').format(price) + 'đ';
    };

    const renderStars = (rating: number): string => {
        return '⭐'.repeat(Math.floor(rating));
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={tour.image} alt={tour.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{tour.location}</p>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 mr-1">{renderStars(tour.rating)}</span>
                    <span className="text-gray-500 text-sm">({tour.rating})</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{tour.duration}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(tour.price)}
                    </span>
                    <Link
                        href={`/tours/${tour.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Xem chi tiết
                    </Link>
                </div>
            </div>
        </div>
    );
}