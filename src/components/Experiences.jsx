import gorillaImg from '../assets/gorilla.webp';
import migrationImg from '../assets/sunset-in-savanna.webp';
import raftingImg from '../assets/splashing-river.webp';
import cultureImg from '../assets/lake-bunyonyi.webp';
import './Experiences.css';

const experiences = [
    {
        title: 'Gorilla Trekking',
        location: 'Bwindi & Mgahinga, Uganda',
        image: gorillaImg,
    },
    {
        title: 'Great Migration',
        location: 'Masai Mara, Kenya',
        image: migrationImg,
    },
    {
        title: 'White Water Rafting',
        location: 'River Nile, Jinja Uganda',
        image: raftingImg,
        imgStyle: { filter: 'saturate(1.3) brightness(0.85)' },
    },
    {
        title: 'Cultural Encounters',
        location: 'Kigali, Rwanda',
        image: cultureImg,
        imgStyle: { filter: 'hue-rotate(25deg) saturate(0.85)' },
    },
];

export default function Experiences() {
    return (
        <section className="experiences section" id="experiences">
            <div className="container">
                <div className="experiences-header">
                    <span className="section-label">Unforgettable Moments</span>
                    <h2 className="section-title">African Safari <span>Experiences</span></h2>
                    <p className="section-subtitle">
                        From heartbeat-raising encounters with mountain gorillas to drifting across the
                        Serengeti in a hot air balloon — we craft stories you'll tell forever.
                    </p>
                </div>

                <div className="exp-grid">
                    {experiences.map((e, i) => (
                        <div className="exp-card" key={i}>
                            <img src={e.image} alt={e.title} className="exp-img" style={e.imgStyle} />
                            <div className="exp-overlay" />
                            <div className="exp-content">
                                <div className="exp-location">{e.location}</div>
                                <h3 className="exp-title">{e.title}</h3>
                                <a href="#contact" className="exp-arrow" id={`exp-link-${i}`}>
                                    <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
