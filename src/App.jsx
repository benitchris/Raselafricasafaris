import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const WA_NUMBER = '256755623922';
const WA_MESSAGE = encodeURIComponent('Hello! I would like to enquire about a safari package.');

export default function App() {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top instantly on page navigation
        window.scrollTo(0, 0);

        // Re-run the reveal animations intersection observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => {
            el.classList.remove('active');
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    const isHome = location.pathname === '/';

    return (
        <>
            <Navbar />
            <main className={isHome ? '' : 'subpage-main'}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <div className="reveal"><Destinations /></div>
                            <div className="reveal"><Tours /></div>
                            <div className="reveal"><Testimonials /></div>
                        </>
                    } />
                    <Route path="/about" element={
                        <div className="reveal"><About /></div>
                    } />
                    <Route path="/core-values" element={
                        <div className="reveal"><CoreValues /></div>
                    } />
                    <Route path="/destinations" element={
                        <div className="reveal"><Destinations /></div>
                    } />
                    <Route path="/tours" element={
                        <div className="reveal"><Tours /></div>
                    } />
                    <Route path="/experiences" element={
                        <div className="reveal"><Experiences /></div>
                    } />
                    <Route path="/contact" element={
                        <div className="reveal"><BookingForm /></div>
                    } />
                </Routes>
            </main>
            <Footer />

            {/* Floating WhatsApp Button */}
            <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-float-btn"
                aria-label="Chat with us on WhatsApp"
            >
                <i className="fab fa-whatsapp"></i>
                <span className="whatsapp-float-tooltip">Chat with us!</span>
            </a>
        </>
    );
}
