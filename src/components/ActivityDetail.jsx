import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { activities, getActivitySlug } from '../data/activities';
import { tours } from './Tours';
import './ActivityDetail.css';

export default function ActivityDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();

    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const activity = activities[slug];

    // If activity not found, render a gorgeous error fallback
    if (!activity) {
        return (
            <div className="activity-not-found container section">
                <div className="error-card reveal active">
                    <div className="error-icon"><i className="fas fa-compass fa-spin"></i></div>
                    <h2>Adventure Awaits, but Page Not Found</h2>
                    <p>We couldn't find the specific activity you are looking for. Let's get you back on track to exploring Africa!</p>
                    <Link to="/" className="btn btn-primary">
                        <i className="fas fa-home"></i> Back to Wilderness Home
                    </Link>
                </div>
            </div>
        );
    }

    // Filter tours to find packages relevant to this activity
    const relatedTours = tours.filter(tour =>
        tour.tags.some(tag => getActivitySlug(tag) === slug)
    );

    // Dynamic HSL colors based on the activity theme
    const themeStyle = {
        '--theme-color': `hsl(${activity.themeColor})`,
        '--theme-glow': `0 15px 40px hsla(${activity.themeColor}, 0.25)`,
        '--theme-bg-gradient': `linear-gradient(135deg, hsla(${activity.themeColor}, 0.08) 0%, transparent 100%)`,
        '--theme-border': `1px solid hsla(${activity.themeColor}, 0.25)`,
        '--theme-border-hover': `1px solid hsla(${activity.themeColor}, 0.50)`,
        '--theme-pill-bg': `hsla(${activity.themeColor}, 0.12)`,
    };

    // Pre-fill state for contact form navigation
    const handleInquireClick = () => {
        navigate('/contact', {
            state: {
                safari: 'Customized Safari (Tailor-made)',
                message: `Hello! I'm planning an African safari and I'm highly interested in the "${activity.title}" experience. Please share more details, pricing, and advice on how to integrate this into my itinerary.`
            }
        });
    };

    // Custom WhatsApp message
    const waNumber = '256755623922';
    const waMessage = encodeURIComponent(`Hello! I'm interested in booking a safari package that includes: ${activity.title}. Could you provide more details?`);

    return (
        <article className="activity-detail-page" style={themeStyle}>
            {/* Top Breadcrumb Header */}
            <div className="activity-breadcrumb-bar">
                <div className="container">
                    <div className="breadcrumbs">
                        <Link to="/"><i className="fas fa-home"></i> Home</Link>
                        <span className="bc-separator"><i className="fas fa-chevron-right"></i></span>
                        <Link to="/experiences">Experiences</Link>
                        <span className="bc-separator"><i className="fas fa-chevron-right"></i></span>
                        <span className="bc-current">{activity.title}</span>
                    </div>
                </div>
            </div>

            {/* Immersive Hero Header */}
            <header className="activity-hero">
                <div className="activity-hero-bg-glow"></div>
                <div className="container">
                    <div className="activity-hero-content reveal active">
                        <span className="activity-badge-pill">
                            <i className={activity.icon}></i> Custom Safari Experience
                        </span>
                        <h1 className="activity-hero-title">{activity.title}</h1>
                        <p className="activity-hero-subtitle">{activity.subtitle}</p>
                        
                        <div className="activity-hero-actions">
                            <button onClick={handleInquireClick} className="btn btn-primary">
                                Inquire About This <i className="fas fa-arrow-right"></i>
                            </button>
                            <a 
                                href={`https://wa.me/${waNumber}?text=${waMessage}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-ghost"
                            >
                                <i className="fab fa-whatsapp"></i> Chat Live
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Layout */}
            <section className="activity-body-section container section">
                <div className="activity-grid">
                    
                    {/* Left Column: Deep Dive Overview & Highlights */}
                    <div className="activity-main-content">
                        <div className="content-card reveal active">
                            <h2 className="activity-section-title">
                                <i className="fas fa-binoculars"></i> Experience Overview
                            </h2>
                            <div className="divider"></div>
                            
                            {activity.overview.map((para, idx) => (
                                <p key={idx} className="activity-paragraph">{para}</p>
                            ))}
                        </div>

                        {/* Visual Themed Showcase / Placeholder */}
                        <div className="visual-showcase-container reveal active">
                            <div className="glass-showcase-card">
                                <div className="showcase-icon">
                                    <i className={activity.icon}></i>
                                </div>
                                <div className="showcase-overlay-text">
                                    <h3>Visual Gallery Preview</h3>
                                    <p>Our safari photography team is compiling breathtaking high-resolution images for the {activity.title} experience. Photos will be uploaded shortly!</p>
                                </div>
                                <div className="showcase-glow-effect"></div>
                            </div>
                        </div>

                        <div className="highlights-card reveal active">
                            <h2 className="activity-section-title">
                                <i className="fas fa-star"></i> Activity Highlights
                            </h2>
                            <div className="divider"></div>
                            <ul className="highlight-list">
                                {activity.highlights.map((highlight, idx) => (
                                    <li key={idx}>
                                        <span className="check-icon"><i className="fas fa-check-circle"></i></span>
                                        <span className="highlight-text">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Premium Safari Guide Card */}
                    <aside className="activity-sidebar">
                        <div className="safari-guide-card reveal active">
                            <div className="guide-header">
                                <i className="fas fa-compass"></i>
                                <h3>Safari Guide</h3>
                            </div>
                            
                            <div className="guide-items">
                                <div className="guide-item">
                                    <div className="gi-icon"><i className="fas fa-calendar-alt"></i></div>
                                    <div className="gi-content">
                                        <div className="gi-label">Best Season</div>
                                        <div className="gi-value">{activity.practicalInfo.bestTime}</div>
                                    </div>
                                </div>

                                <div className="guide-item">
                                    <div className="gi-icon"><i className="fas fa-tachometer-alt"></i></div>
                                    <div className="gi-content">
                                        <div className="gi-label">Difficulty Scale</div>
                                        <div className="gi-value">{activity.practicalInfo.difficulty}</div>
                                    </div>
                                </div>

                                <div className="guide-item">
                                    <div className="gi-icon"><i className="fas fa-ticket-alt"></i></div>
                                    <div className="gi-content">
                                        <div className="gi-label">Permit Requirements</div>
                                        <div className="gi-value">{activity.practicalInfo.permits}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="packing-checklist">
                                <h4><i className="fas fa-suitcase-rolling"></i> Expert Packing List:</h4>
                                <ul>
                                    {activity.practicalInfo.packing.map((item, idx) => (
                                        <li key={idx}><i className="fas fa-chevron-right"></i> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                </div>
            </section>

            {/* Related Tours Section */}
            {relatedTours.length > 0 && (
                <section className="related-tours-section section">
                    <div className="container">
                        <div className="section-header-center text-center reveal active">
                            <span className="section-label">Recommended Safaris</span>
                            <h2 className="section-title">Packages Featuring <span>{activity.title}</span></h2>
                            <p className="section-subtitle">
                                Explore these handcrafted safari packages designed to bring you directly to the heart of this experience.
                            </p>
                        </div>

                        <div className="tours-grid reveal active">
                            {relatedTours.map((t, i) => (
                                <div className="tour-card" key={i}>
                                    <div className="tour-img-wrap">
                                        <img src={t.image} alt={t.name} className="tour-img" />
                                        <span className="tour-badge">{t.badge}</span>
                                        <span className="tour-duration">
                                            <i className="fas fa-clock"></i>
                                            {t.duration}
                                        </span>
                                    </div>
                                    <div className="tour-body">
                                        <div className="tour-location">
                                            <i className="fas fa-map-marker-alt"></i>
                                            {t.location}
                                        </div>
                                        <h3 className="tour-name">{t.name}</h3>
                                        <p className="tour-desc">{t.desc}</p>
                                        <div className="tour-highlights">
                                            {t.tags.map(tag => {
                                                const tagSlug = getActivitySlug(tag);
                                                return (
                                                    <Link 
                                                        to={`/activity/${tagSlug}`} 
                                                        className={`tour-tag ${tagSlug === slug ? 'active-tag' : ''}`} 
                                                        key={tag}
                                                    >
                                                        {tag}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                        <div className="tour-footer">
                                            <Link 
                                                to="/contact" 
                                                state={{ safari: t.name }}
                                                className="btn-tour" 
                                                style={{ width: '100%', justifyContent: 'center' }}
                                            >
                                                Get a Quote <i className="fas fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom Call to Action Section */}
            <section className="activity-cta-section section">
                <div className="container">
                    <div className="activity-cta-card reveal active">
                        <div className="cta-content">
                            <span className="cta-label">Tailor-Made Safaris</span>
                            <h2>Let's Craft Your Dream Safari</h2>
                            <p>All of our experiences can be combined, customized, and tailored to fit your specific schedule, travel preferences, and budget. Speak with a local travel specialist today.</p>
                        </div>
                        <div className="cta-actions">
                            <button onClick={handleInquireClick} className="btn btn-primary">
                                <i className="fas fa-paper-plane"></i> Plan Custom Safari
                            </button>
                            <a 
                                href={`https://wa.me/${waNumber}?text=${waMessage}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-ghost"
                            >
                                <i className="fab fa-whatsapp"></i> WhatsApp Advisor
                            </a>
                        </div>
                        <div className="cta-glow-bg"></div>
                    </div>
                </div>
            </section>
        </article>
    );
}
