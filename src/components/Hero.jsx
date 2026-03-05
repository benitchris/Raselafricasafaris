import heroImg from '../assets/hero.png';
import './Hero.css';

const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '2,500+', label: 'Happy Travelers' },
    { number: '6', label: 'Countries Covered' },
    { number: '98%', label: 'Satisfaction Rate' },
];

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" style={{ backgroundImage: `url(${heroImg})` }} />
            <div className="hero-overlay" />

            <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className="fas fa-heart"></i>
                        We Create Memories
                    </div>

                    <h1 className="hero-title">
                        Experience Africa's
                        <span className="accent">Wild Soul</span>
                    </h1>

                    <p className="hero-desc">
                        Premium gorilla trekking, Big 5 wildlife safaris, and unforgettable adventures
                        across Uganda, Rwanda, Kenya, Tanzania and beyond — crafted by local experts who
                        call Africa home.
                    </p>

                    <div className="hero-buttons">
                        <a href="#destinations" className="btn btn-primary" id="hero-explore-btn">
                            <i className="fas fa-compass"></i>
                            Explore Destinations
                        </a>
                        <a href="#tours" className="btn btn-ghost" id="hero-tours-btn">
                            <i className="fas fa-binoculars"></i>
                            View Packages
                        </a>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="hero-stats">
                    <div className="hero-stats-inner">
                        {stats.map((s, i) => (
                            <div className="stat-item" key={i}>
                                <div className="stat-number">{s.number}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll">
                <div className="scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    );
}
