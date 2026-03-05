import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Destinations from './components/Destinations';
import Tours from './components/Tours';
import Experiences from './components/Experiences';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const WA_NUMBER = '256755623922';
const WA_MESSAGE = encodeURIComponent('Hello! I would like to enquire about a safari package.');

export default function App() {
    useEffect(() => {
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
        revealElements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <div className="reveal"><About /></div>
                <div className="reveal"><Destinations /></div>
                <div className="reveal"><Tours /></div>
                <div className="reveal"><Experiences /></div>
                <div className="reveal"><Testimonials /></div>
                <div className="reveal"><BookingForm /></div>
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
