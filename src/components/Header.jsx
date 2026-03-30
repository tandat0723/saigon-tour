import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                    SaigonTour
                </Link>
                <nav className="space-x-6">
                    <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                        Trang chủ
                    </Link>
                    <a href="#tours" className="text-gray-600 hover:text-blue-600 transition">
                        Tour
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">
                        Liên hệ
                    </a>
                </nav>
            </div>
        </header>
    );
}