
export default function Footer() {
    const currentYear = new Date().getFullYear();

    const menuLinks = [
        { name: 'Our Story', href: '/story' },
        { name: 'Saigon Tours', href: '/#tours' },
        { name: 'FAQs', href: '/faqs' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Travel Guides', href: '/guides' },
        { name: 'Contact Us', href: '/#contact' }
    ];

    const socialLinks = [
        { name: 'Facebook', icon: '📘', href: 'https://facebook.com' },
        { name: 'Instagram', icon: '📷', href: 'https://instagram.com' },
        { name: 'YouTube', icon: '▶️', href: 'https://youtube.com' },
        { name: 'TikTok', icon: '🎵', href: 'https://tiktok.com' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Column 1: Logo & Slogan */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl">🏍️</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                                    Bụi Motobike Tour
                                </h3>
                                <p className="text-xs text-teal-400">'Saigon by night'</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the real Saigon with local Aodai Riders.
                            Motorbike tours through hidden alleys, local coffee shops,
                            and authentic Vietnamese cuisine.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 bg-gray-800 hover:bg-teal-500 rounded-full flex items-center justify-center transition duration-300"
                                    aria-label={social.name}
                                >
                                    <span className="text-sm">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative inline-block">
                            Quick Links
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 mt-1"></span>
                        </h4>
                        <ul className="space-y-2 mt-4">
                            {menuLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-teal-400 transition duration-300 text-sm flex items-center gap-2"
                                    >
                                        <span className="text-teal-500">›</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative inline-block">
                            Contact Info
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 mt-1"></span>
                        </h4>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <span className="text-teal-400 text-lg">📍</span>
                                <span>123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="text-teal-400 text-lg">📞</span>
                                <a href="tel:+84901006844" className="hover:text-teal-400 transition">
                                    (+84) 90 1006 844
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="text-teal-400 text-lg">✉️</span>
                                <a href="mailto:info@buitour.com" className="hover:text-teal-400 transition">
                                    info@buitour.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <span className="text-teal-400 text-lg">⏰</span>
                                <span>Mon - Sun: 8:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
                        <p className="text-gray-500 text-sm">
                            &copy; {currentYear} Bụi Motobike Tour. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="/privacy" className="text-gray-500 hover:text-teal-400 transition">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-500 hover:text-teal-400 transition">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}