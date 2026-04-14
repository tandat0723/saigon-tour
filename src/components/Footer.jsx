export default function Footer() {
    const phoneNumber = '84564957525';
    const whatsappLink = `https://wa.me/${phoneNumber}`;

    return (
        <footer className="py-4 md:py-8 border-t border-gray-200 mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-3 max-w-xs mx-auto mb-3">
                    <button
                        onClick={() => window.open(whatsappLink, '_blank')}
                        className="text-center group cursor-pointer block flex-1"
                    >
                        <div className="flex items-center justify-center mx-auto mb-2">
                            <i className="fa-brands fa-whatsapp text-[#0461CA] text-xl md:text-2xl"></i>
                        </div>
                        <h3 className="font-semibold text-[#0461CA] text-xs md:text-sm">WhatsApp</h3>
                    </button>

                    <div className="w-px h-6 bg-gray-200"></div>

                    <div className="text-center group cursor-pointer flex-1">
                        <div className="flex items-center justify-center mx-auto mb-2">
                            <i className="fas fa-credit-card text-orange-500 text-xl md:text-2xl"></i>
                        </div>
                        <h3 className="font-semibold text-orange-500 text-xs md:text-sm">Pay later</h3>
                    </div>
                </div>
            </div>
        </footer>
    );
}