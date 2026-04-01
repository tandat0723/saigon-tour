export default function TopBar() {
    const phoneNumber = '84564957525';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%20BụiMotobikeTour.%20I%20want%20to%20book%20a%20tour!`;

    return (
        <div className="w-full bg-orange-500 text-white py-1 fixed top-0 left-0 z-50">
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-3 text-center">
                    <span className="text-xs sm:text-sm">
                        Last-minute booking or questions, please WhatsApp us
                    </span>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-orange-500 text-white py-1 rounded-full text-xs sm:text-sm whitespace-nowrap"
                    >
                        <i className="fa-brands fa-whatsapp"></i>
                        (+84) 56 4957 525
                    </a>
                </div>
            </div>
        </div>
    );
}