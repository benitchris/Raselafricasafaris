import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Destinations', to: '/destinations' },
    { label: 'Tours', to: '/tours' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'About Us', to: '/about' },
];

const safariLinks = [
    { label: 'Gorilla Trekking', to: '/tours' },
    { label: 'Big 5 Safaris', to: '/tours' },
    { label: 'Great Migration', to: '/tours' },
    { label: 'Honeymoon Safaris', to: '/tours' },
    { label: 'Cultural Tours', to: '/experiences' },
];

export default function Footer() {
    const handleNewsletter = (e) => {
        e.preventDefault();
        e.target.reset();
        alert('Thank you for subscribing! We\'ll be in touch soon.');
    };

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <div className="footer-logo">Rasel Africa Safaris</div>
                            <div className="footer-logo-sub">We Create Memories</div>
                            <p>
                                Your trusted local partner for premium, sustainable wildlife safaris
                                across East and Southern Africa. Crafting unforgettable journeys since 2014.
                            </p>
                            <div className="footer-socials">
                                {[
                                    { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/share/1LUWhcbeSz/' },
                                    { icon: 'fab fa-instagram', href: 'https://www.instagram.com/raselafricasafaris?igsh=dWl3cXJ0a3I3ZzVh' },
                                    { icon: 'fab fa-tiktok', href: 'https://www.tiktok.com/@senaeadventuresz?_r=1&_t=ZS-94a3SbcFFje' },
                                    { icon: 'fab fa-youtube', href: '#' },
                                    { icon: 'fab fa-tripadvisor', href: '#' },
                                ].map((s, i) => (
                                    <a href={s.href} className="social-link" key={i} aria-label="Social media link" target="_blank" rel="noopener noreferrer">
                                        <i className={s.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map(l => (
                                    <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Safari Types */}
                        <div className="footer-col">
                            <h4>Safari Types</h4>
                            <ul className="footer-links">
                                {safariLinks.map(l => (
                                    <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact + Newsletter */}
                        <div className="footer-col">
                            <h4>Get In Touch</h4>
                            <div className="footer-contact">
                                <div className="contact-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Plot 42, Kampala Road,<br />Kampala, Uganda</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <a href="tel:+256755623922" style={{ color: 'inherit', textDecoration: 'none' }}>+256 755 623 922</a>
                                </div>
                                <div className="contact-item">
                                    <i className="fas fa-envelope"></i>
                                    <span>info@raselafricasafaris.com</span>
                                </div>
                                <div className="contact-item">
                                    <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
                                    <a href="https://wa.me/256755623922" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>WhatsApp: +256 755 623 922</a>
                                </div>
                            </div>

                            <br />
                            <h4 style={{ marginTop: 8 }}>Newsletter</h4>
                            <form className="newsletter-form" onSubmit={handleNewsletter} id="newsletter-form">
                                <input type="email" placeholder="Your email address" required />
                                <button type="submit">Subscribe</button>
                            </form>
                            <p className="newsletter-note">No spam, we promise. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="container">
                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Rasel Africa Safaris. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms &amp; Conditions</Link>
                        <Link to="/">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
