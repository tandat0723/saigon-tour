import ContactSection from './ContactSection';

export default function Footer() {
    return (
        <>
            <ContactSection />
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">SaigonTour</h3>
                            <p className="text-gray-300">Khám phá Việt Nam cùng chúng tôi</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
                            <p className="text-gray-300">📞 Hotline: 1900 1234</p>
                            <p className="text-gray-300">📧 Email: info@saigontour.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Địa chỉ</h3>
                            <p className="text-gray-300">123 Đường Lê Lợi, Quận 1</p>
                            <p className="text-gray-300">TP. Hồ Chí Minh</p>
                        </div>
                    </div>
                    <div className="text-center mt-8 pt-4 border-t border-gray-700">
                        <p>&copy; 2024 SaigonTour. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}