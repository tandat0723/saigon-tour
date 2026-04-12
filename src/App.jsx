import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import TourDetail from './pages/TourDetails.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import TopBar from './components/TopBar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const disableRightClick = (e) => {
            e.preventDefault()
            return false
        }

        const disableCopy = (e) => {
            e.preventDefault()
            return false
        }

        const disableCut = (e) => {
            e.preventDefault()
            return false
        }

        document.addEventListener('contextmenu', disableRightClick);
        document.addEventListener('copy', disableCopy);
        document.addEventListener('cut', disableCut);
        return () => {
            document.removeEventListener('contextmenu', disableRightClick);
            document.removeEventListener('copy', disableCopy);
            document.removeEventListener('cut', disableCut);
        }
    }, [])

    return (
        <Router>
            <ScrollToTop />
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tour/:slug" element={<TourDetail />} />
            </Routes>
            <WhatsAppButton />
        </Router>
    );
}

export default App;