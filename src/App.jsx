import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import TourDetail from './pages/TourDetails.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import TopBar from './components/TopBar.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tour/:id" element={<TourDetail />} />
            </Routes>
        </Router>
    );
}

export default App;