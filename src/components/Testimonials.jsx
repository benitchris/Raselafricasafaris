import './Testimonials.css';

const testimonials = [
    {
        text: 'Rasel Africa Safaris gave us a once-in-a-lifetime experience! Our gorilla trek in Bwindi was simply magical — seeing those incredible animals just meters away brought tears to our eyes.',
        name: 'Sarah Mitchell',
        origin: 'United Kingdom',
        initial: 'S',
        stars: 5,
    },
    {
        text: 'Everything was perfectly organized from start to finish. The Masai Mara game drives were breathtaking, and our driver-guide Joseph knew exactly where to find the Big 5. Could not recommend more!',
        name: 'Marc Dupont',
        origin: 'France',
        initial: 'M',
        stars: 5,
    },
    {
        text: 'We did the 7-day Uganda & Rwanda combined safari and it exceeded every expectation. The attention to detail, the lodges, the guides — genuine 5-star service from a team that truly loves Africa.',
        name: 'Linda & James Okafor',
        origin: 'United States',
        initial: 'L',
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials section" id="testimonials">
            <div className="container">
                <div className="testimonials-header">
                    <span className="section-label">Traveler Stories</span>
                    <h2 className="section-title">What Our Guests <span>Say</span></h2>
                    <p className="section-subtitle">
                        Don't just take our word for it — hear from the adventurers who've
                        experienced Africa's magic with us.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div className="testi-card" key={i}>
                            <div className="testi-stars">
                                {[...Array(t.stars)].map((_, j) => (
                                    <i className="fas fa-star" key={j}></i>
                                ))}
                            </div>
                            <p className="testi-text">"{t.text}"</p>
                            <div className="testi-author">
                                <div className="testi-avatar">{t.initial}</div>
                                <div>
                                    <div className="testi-name">{t.name}</div>
                                    <div className="testi-origin">
                                        <i className="fas fa-map-marker-alt"></i>
                                        {t.origin}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
