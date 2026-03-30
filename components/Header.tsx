import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    SaigonTour
                </Link>
                <nav className="space-x-6">
                    <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
                        Trang chủ
                    </Link>
                    <Link href="/#tours" className="text-gray-600 hover:text-blue-600 transition">
                        Tour
                    </Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition">
                        Liên hệ
                    </Link>
                </nav>
            </div>
        </header>
    );
}