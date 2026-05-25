import { Link } from 'react-router-dom';
import { getActivitySlug } from '../data/activities';
import gorillaImg from '../assets/gorilla2.webp';
import kenyaImg from '../assets/lions.webp';
import eastAfricaImg from '../assets/chimpanzee1.webp';
import serengetiImg from '../assets/gazelle.webp';
import rwandaImg from '../assets/gorilla4.webp';
import tanzaniaImg from '../assets/sunset-in-savanna.webp';
import zanzibarImg from '../assets/zanzibar.webp';
import rwenzoriImg from '../assets/rwenzori.webp';
import masaiImg from '../assets/masai.webp';
import kigaliImg from '../assets/kigali.webp';
import jinjaImg from '../assets/jinja.webp';
import './Tours.css';

export const tours = [
    {
        name: '3-Day Gorilla Trekking Safari',
        location: 'Bwindi, Uganda',
        desc: 'Come face-to-face with majestic mountain gorillas in Bwindi Impenetrable Forest. Includes park fees, expert guide, and comfortable lodge accommodation.',
        duration: '3 Days',
        badge: 'Best Seller',
        tags: ['Gorillas', 'Forest Walk', 'Cultural Visit'],
        image: gorillaImg,
    },
    {
        name: '4-Day Kenya Masai Mara Big 5',
        location: 'Masai Mara, Kenya',
        desc: 'Spot the Big 5 in the legendary Masai Mara. Game drives at dawn and dusk reveal lions, elephants, leopards, buffalo, and rhino in their natural habitat.',
        duration: '4 Days',
        badge: 'Top Rated',
        tags: ['Big 5', 'Game Drives', 'Sundowners'],
        image: kenyaImg,
    },
    {
        name: '7-Day Best of East Africa Safari',
        location: 'Uganda & Rwanda',
        desc: 'The ultimate East Africa experience — gorilla trekking in Uganda, Volcanoes National Park in Rwanda, plus golden monkey tracking and cultural encounters.',
        duration: '7 Days',
        badge: 'Premium',
        tags: ['Gorillas', 'Volcanoes', 'Golden Monkeys'],
        image: eastAfricaImg,
    },
    {
        name: '9-Day Serengeti Migration Safari',
        location: 'Serengeti, Tanzania',
        desc: 'Witness the greatest wildlife spectacle on earth — the Great Wildebeest Migration across the Serengeti and Ngorongoro Crater in a luxury mobile tented camp.',
        duration: '9 Days',
        badge: 'Exclusive',
        tags: ['Migration', 'Ngorongoro', 'Luxury Camp'],
        image: masaiImg,
    },
    {
        name: '5-Day Rwanda & Congo Gorilla Trek',
        location: 'Rwanda / DR Congo',
        desc: 'A once-in-a-lifetime adventure trekking both mountain and eastern lowland gorillas across two extraordinary countries, guided by our expert naturalists.',
        duration: '5 Days',
        badge: 'Adventure',
        tags: ['2 Countries', 'Lowland Gorillas', 'Rainforest'],
        image: rwandaImg,
    },
    {
        name: '10-Day Tanzania Honeymoon Safari',
        location: 'Tanzania & Zanzibar',
        desc: 'The perfect romantic escape — wildlife game drives in the Serengeti followed by blissful days on Zanzibar\'s white sandy beaches with crystal clear waters.',
        duration: '10 Days',
        badge: 'Honeymoon',
        tags: ['Romantic', 'Zanzibar', 'Beach & Bush'],
        image: zanzibarImg,
    },
    {
        name: '7-Day Rwenzori Mountains Trek',
        location: 'Rwenzori, Uganda',
        desc: 'Conquer the legendary Mountains of the Moon. A challenging but rewarding trek through diverse vegetation zones to the stunning glacier peaks.',
        duration: '7 Days',
        badge: 'Adventure',
        tags: ['Mountains', 'Hiking', 'Nature'],
        image: rwenzoriImg,
    },
    {
        name: '2-Day Kigali City Tour',
        location: 'Kigali, Rwanda',
        desc: 'Experience the vibrant culture and history of Kigali. Visit local markets, art galleries, and important historical sites in one of Africa\'s cleanest cities.',
        duration: '2 Days',
        badge: 'City Tour',
        tags: ['Culture', 'History', 'City'],
        image: kigaliImg,
    },
    {
        name: '2-Day Jinja Adventure',
        location: 'Jinja, Uganda',
        desc: 'Visit the adventure capital of East Africa. Experience the thrill of white-water rafting on the Nile, bungee jumping, and a boat cruise to the source of the river.',
        duration: '2 Days',
        badge: 'Adventure',
        tags: ['Rafting', 'Nile', 'Bungee'],
        image: jinjaImg,
    },
];

export default function Tours() {
    return (
        <section className="tours section" id="tours">
            <div className="container">
                <div className="tours-header">
                    <div>
                        <span className="section-label">Safari Packages</span>
                        <h2 className="section-title">Featured <span>Tours</span></h2>
                    </div>
                    <p className="section-subtitle" style={{ maxWidth: 380, textAlign: 'right' }}>
                        Handcrafted safaris built around your interests, timeline, and budget.
                    </p>
                </div>

                <div className="tours-grid">
                    {tours.map((t, i) => (
                        <div className="tour-card reveal" key={i}>
                            <div className="tour-img-wrap">
                                <img src={t.image} alt={t.name} className="tour-img" style={t.imgStyle} />
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
                                    {t.tags.map(tag => (
                                        <Link to={`/activity/${getActivitySlug(tag)}`} className="tour-tag" key={tag}>
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                                <div className="tour-footer">
                                     <Link to="/contact" className="btn-tour" id={`tour-btn-${i}`} style={{ width: '100%', justifyContent: 'center' }}>
                                         Get a Quote <i className="fas fa-arrow-right"></i>
                                     </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
