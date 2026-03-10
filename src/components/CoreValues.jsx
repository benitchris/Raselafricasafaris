import './CoreValues.css';

const values = [
    {
        icon: 'fas fa-leaf',
        number: '01',
        title: 'Sustainability',
        desc: 'We are committed to protecting the environment and promoting eco-friendly tourism practices that preserve nature, wildlife, and natural resources for future generations.',
        color: 'green',
    },
    {
        icon: 'fas fa-hands-helping',
        number: '02',
        title: 'Community Empowerment',
        desc: 'We believe tourism should benefit local communities. We support local employment, community projects, and small businesses to help improve livelihoods.',
        color: 'amber',
    },
    {
        icon: 'fas fa-balance-scale',
        number: '03',
        title: 'Integrity & Transparency',
        desc: 'We operate with honesty, fairness, and professionalism in all our services, partnerships, and interactions with clients and communities.',
        color: 'gold',
    },
    {
        icon: 'fas fa-globe-africa',
        number: '04',
        title: 'Cultural Respect',
        desc: 'We respect and celebrate the rich cultures, traditions, and heritage of Uganda and Africa, ensuring that tourism promotes cultural appreciation and preservation.',
        color: 'teal',
    },
    {
        icon: 'fas fa-heart',
        number: '05',
        title: 'Social Responsibility',
        desc: 'We are committed to giving back through charitable initiatives that support vulnerable people, education, and community development.',
        color: 'rose',
    },
    {
        icon: 'fas fa-star',
        number: '06',
        title: 'Customer Satisfaction',
        desc: 'We strive to provide exceptional service and unforgettable travel experiences that exceed the expectations of our guests.',
        color: 'amber',
    },
    {
        icon: 'fas fa-shield-alt',
        number: '07',
        title: 'Safety & Reliability',
        desc: 'The safety and comfort of our clients are our top priority. We ensure reliable services, professional guides, and well-organized travel experiences.',
        color: 'green',
    },
];

export default function CoreValues() {
    return (
        <section className="core-values section" id="core-values">
            <div className="container">
                {/* Header */}
                <div className="cv-header reveal">
                    <span className="section-label">Who We Are</span>
                    <h2 className="section-title">
                        Our <span>Core Values</span>
                    </h2>
                    <div className="divider" style={{ margin: '16px auto 0' }}></div>
                    <p className="section-subtitle cv-subtitle">
                        Every journey we craft is guided by deeply held principles — a compass that
                        shapes how we serve our guests, our communities, and our planet.
                    </p>
                </div>

                {/* Values grid */}
                <div className="cv-grid">
                    {values.map((v, i) => (
                        <div
                            className={`cv-card cv-card--${v.color} reveal`}
                            key={i}
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="cv-card-inner">
                                {/* Number */}
                                <span className="cv-number">{v.number}</span>

                                {/* Icon bubble */}
                                <div className="cv-icon-wrap">
                                    <i className={v.icon}></i>
                                </div>

                                {/* Content */}
                                <h3 className="cv-title">{v.title}</h3>
                                <p className="cv-desc">{v.desc}</p>

                                {/* Bottom accent line */}
                                <div className="cv-accent-line"></div>
                            </div>
                        </div>
                    ))}

                    {/* Pledge card spanning full row */}
                    <div className="cv-pledge reveal" style={{ transitionDelay: `${values.length * 0.08}s` }}>
                        <div className="cv-pledge-inner">
                            <i className="fas fa-handshake cv-pledge-icon"></i>
                            <div>
                                <h3 className="cv-pledge-title">Our Pledge to You</h3>
                                <p className="cv-pledge-text">
                                    These values are not just words on a page — they are the living heartbeat of
                                    Rasel Africa Safaris. Every guide we hire, every community we partner with,
                                    and every itinerary we design reflects our unwavering commitment to responsible,
                                    meaningful, and transformative travel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
