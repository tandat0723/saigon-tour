import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-[#023166] text-white">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="space-y-1">
                        <img
                            src={logo}
                            alt="Bụi Motobike Tour"
                            className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto mx-auto object-contain"
                        />
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 relative inline-block">
                            About Us
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 mt-1"></span>
                        </h4>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3 ">
                                <a href="#our-story">Our Story</a>
                            </li>
                            <li className="flex items-center gap-3 ">
                                <a href="#gallery">
                                    Gallery
                                </a>
                            </li>
                            <li className="flex items-center gap-3 ">
                                <a href="#faqs">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="hidden sm:inline-block">
                        <h4 className="text-lg font-semibold mb-4 relative">
                            Policies
                            <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-teal-500 mt-1"></span>
                        </h4>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3 ">
                                <a href="#privacy-policy">Privacy Policy</a>
                            </li>
                            <li className="flex items-center gap-3 ">
                                <a href="#terms-conditions">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/20">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
                        <p className="text-sm">
                            &copy; 2026 Bụi Motobike Tour. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}