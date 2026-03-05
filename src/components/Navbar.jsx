import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Tours', href: '#tours' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLink = () => setMenuOpen(false);

    return (
        <header>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <div className="container navbar-inner">
                    {/* Logo */}
                    <a href="#home" className="nav-logo">
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Rasel Africa Safaris"
                            className="nav-logo-img"
                        />
                        <div className="nav-brand-text">
                            <span className="brand-main">Rasel Africa</span>
                            <span className="brand-sub">Safaris</span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <ul className="nav-links">
                        {navLinks.map(l => (
                            <li key={l.href}>
                                <a href={l.href}>{l.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="nav-cta">
                        <span className="nav-phone">
                            <i className="fab fa-whatsapp"></i>
                            +256 755 623 922
                        </span>
                        <a href="#contact" className="btn btn-primary" id="nav-book-btn">
                            Book a Safari
                        </a>
                    </div>

                    {/* Hamburger */}
                    <button
                        id="nav-hamburger"
                        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
                        aria-label="Toggle navigation"
                        onClick={() => setMenuOpen(v => !v)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
                    {navLinks.map(l => (
                        <a key={l.href} href={l.href} onClick={handleLink}>{l.label}</a>
                    ))}
                    <a
                        href="https://wa.me/256755623922?text=Hello!%20I%20would%20like%20to%20enquire%20about%20a%20safari%20package."
                        className="btn mobile-wa-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLink}
                    >
                        <i className="fab fa-whatsapp"></i>
                        WhatsApp Us
                    </a>
                    <a href="#contact" className="btn btn-primary" onClick={handleLink}>
                        Book a Safari
                    </a>
                </div>
            </nav>
        </header>
    );
}
