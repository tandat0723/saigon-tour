import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
    const primaryColor = "#0461CA";

    return (
        <div className="bg-white h-140 sm:h-180 md:h-125 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Badge thời gian */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-full font-medium shadow-md">
                    <i className="far fa-clock" /> {tour.duration} hours
                </div>
            </div>

            {/* Nội dung */}
            <div className="p-6">
                {/* Badge loại tour */}
                <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: primaryColor }}
                >
                    {tour.category || "City tour"}
                </span>

                {/* Tên tour */}
                <h3 className="text-xl font-bold text-gray-800 mt-1 mb-2">
                    {tour.name}
                </h3>

                {/* Giá */}
                <div className="mb-3">
                    <span
                        className="text-2xl font-bold"
                        style={{ color: primaryColor }}
                    >
                        ${tour.priceUSD}
                    </span>
                    <span className="text-gray-500 ml-1">per person</span>
                </div>

                {/* Mô tả */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {tour.description}
                </p>

                {/* More info link */}
                <Link
                    to={`/tour/${tour.id}`}
                    className="inline-flex border border-[#0461CA] px-4 py-2 rounded-full items-center gap-2 text-sm transition-all 
                    group/link text-[#0461CA]"
                >
                    More info
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
        </div>
    );
}