import { Link } from 'react-router-dom';
import aboutMainImg from '../assets/giraffe.webp';
import aboutAccentImg from '../assets/gorilla1.webp';
import './About.css';

const features = [
    {
        icon: 'fas fa-camera-retro',
        title: 'Unforgettable Memories',
        desc: 'Our mission is simple: we create life-changing memories. Every itinerary is crafted to immerse you in the raw beauty and wonder of Africa.',
    },
    {
        icon: 'fas fa-map-marked-alt',
        title: 'Expert Local Guides',
        desc: 'Our team of seasoned, passionate local guides brings the landscapes to life with deep knowledge, ensuring an authentic and memorable journey.',
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Safe &amp; Seamless Travel',
        desc: 'From permit bookings to luxury lodge arrangements and airport transfers — we handle every detail so you can focus on the wonder.',
    },
];

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Images */}
                    <div className="about-images">
                        <img src={aboutMainImg} alt="Kenya wildlife safari" className="about-img-main" />
                        <img src={aboutAccentImg} alt="Gorilla trekking Uganda" className="about-img-accent" />
                        <div className="about-badge-overlay">
                            <div className="big-number">10+</div>
                            <div className="big-label">Years of<br />Excellence</div>
                        </div>
                    </div>

                    {/* Text */}
                    <div className="about-text">
                        <span className="section-label">Who We Are</span>
                        <h2 className="section-title">
                            Africa's Most <span>Trusted</span><br />Safari Partner
                        </h2>
                        <div className="divider"></div>
                        <p className="section-subtitle">
                            Rasel Africa Safaris is a premier, locally owned tour operator with over a decade
                            of experience curating extraordinary wildlife experiences across East and Southern Africa.
                            Our passion is simple: we create memories that last a lifetime.
                        </p>

                        <div className="about-features">
                            {features.map((f, i) => (
                                <div className="about-feature" key={i}>
                                    <div className="feature-icon">
                                        <i className={f.icon}></i>
                                    </div>
                                    <div>
                                        <div className="feature-title" dangerouslySetInnerHTML={{ __html: f.title }} />
                                        <p className="feature-desc">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/contact" className="btn btn-primary" id="about-enquire-btn">
                            <i className="fas fa-paper-plane"></i>
                            Send an Enquiry
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
