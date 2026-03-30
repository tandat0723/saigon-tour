export default function ContactSection() {
    const phoneNumber = '84912345678';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Chào%20SaigonTour,%20tôi%20muốn%20tư%20vấn%20về%20tour%20du%20lịch!`;

    return (
        <section id="contact" className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Bạn cần tư vấn?
                        </h2>
                        <p className="text-lg mb-6 text-blue-100">
                            Hãy liên hệ với chúng tôi để được hỗ trợ nhanh nhất!
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="text-sm text-blue-100">Hotline 24/7</p>
                                    <p className="text-xl font-semibold">1900 1234</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <p className="text-sm text-blue-100">Email</p>
                                    <p className="text-lg">info@saigontour.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Chat với chúng tôi
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Nhắn tin ngay qua WhatsApp để được tư vấn miễn phí!
                        </p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition flex items-center justify-center gap-3 text-lg"
                        >
                            💬 Chat qua WhatsApp
                        </a>
                        <p className="text-xs text-gray-500 text-center mt-4">
                            Phản hồi trong vòng 5 phút
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}