import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Destinations', to: '/destinations' },
    { label: 'Tours', to: '/tours' },
    { label: 'Experiences', to: '/experiences' },
    { label: 'About Us', to: '/about' },
    { label: 'Book Now', to: '/book' },
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
                    <Link to="/" className="nav-logo" onClick={handleLink}>
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Rasel Africa Safaris"
                            className="nav-logo-img"
                        />
                        <div className="nav-brand-text">
                            <span className="brand-main">Rasel Africa</span>
                            <span className="brand-sub">Safaris</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <ul className="nav-links">
                        {navLinks.map(l => (
                            <li key={l.to}>
                                <NavLink to={l.to} end={l.to === '/'}>
                                    {l.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop CTA */}
                    <div className="nav-cta">
                        <span className="nav-phone">
                            <i className="fab fa-whatsapp"></i>
                            +256 755 623 922
                        </span>
                        <Link to="/book" className="btn btn-primary" id="nav-book-btn">
                            Book a Safari
                        </Link>
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
                        <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={handleLink}>
                            {l.label}
                        </NavLink>
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
                    <Link to="/book" className="btn btn-primary" onClick={handleLink}>
                        Book a Safari
                    </Link>
                </div>
            </nav>
        </header>
    );
}
