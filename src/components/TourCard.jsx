import { Link } from 'react-router-dom';

export default function TourCard({ tour }) {
    const primaryColor = "#0461CA";

    return (
        <div className="sm:h-130 md:h-140 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
            <div className="relative h-56 overflow-hidden">
                <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover group-hover:scale-115 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/50 backdrop-blur-sm text-gray-800 text-xs px-2 py-1 rounded-full font-medium 
                    shadow-md">
                    <i className="far fa-clock" /> {tour.duration} hours
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: primaryColor }}>
                    {tour.category}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 mt-1 mb-2">
                    {tour.name}
                </h3>

                <div className="mb-3">
                    <span
                        className="text-2xl font-bold"
                        style={{ color: primaryColor }}
                    >
                        US ${tour.priceUSD}
                    </span>
                    <span className="text-gray-500 font-bold ml-1">per person</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {tour.description}
                </p>

                <div className="mt-auto pb-5">
                    <Link
                        to={`/tour/${tour.slug}`}
                        className="inline-flex border border-[#0461CA] px-4 py-2 rounded-full items-center font-semibold gap-2 text-sm transition-all 
                        group/link text-[#0461CA] hover:bg-[#0461CA] hover:text-white"
                    >
                        More info
                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}