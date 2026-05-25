import { Link } from 'react-router-dom';
import { getActivitySlug } from '../data/activities';
import './Destinations.css';

// Card hero images
import ugandaImg  from '../assets/Bwindi-Impenetrable-National-Park.webp';
import kenyaImg   from '../assets/lion2.webp';
import rwandaImg  from '../assets/forest.webp';
import tanzaniaImg from '../assets/buffalo1.webp';
import congoImg   from '../assets/monkey.webp';
import murchisonImg from '../assets/murchison-falls.webp';

// Gallery preview images — mapped by content
import gorilla1   from '../assets/gorilla1.webp';
import gorilla2   from '../assets/gorilla2.webp';
import gorilla3   from '../assets/gorilla3.webp';
import chimp      from '../assets/chimp.webp';
import hippo      from '../assets/hippo-in-a-river.webp';
import elephant   from '../assets/elephant.webp';
import lions      from '../assets/lions.webp';
import giraffe    from '../assets/giraffe.webp';
import buffalo2   from '../assets/buffalo2.webp';
import gazelle    from '../assets/gazelle.webp';
import masai      from '../assets/masai.webp';
import kigali     from '../assets/kigali.webp';
import zanzibar   from '../assets/zanzibar.webp';
import zanzibarB  from '../assets/zanzibar-beach.webp';
import rwenzo3    from '../assets/rwenzo3.webp';
import splashing  from '../assets/splashing-river.webp';
import jinja      from '../assets/jinja.webp';
import sunset     from '../assets/sunset-in-savanna.webp';

export const destinations = [
    {
        name: 'Uganda — Pearl of Africa',
        country: 'East Africa',
        desc: 'Home to 50% of the world\'s remaining mountain gorillas, chimpanzees, source of the Nile, and some of Africa\'s most diverse wildlife. A bucket-list destination for all.',
        tags: ['Gorilla Trekking', 'Chimps', 'River Nile'],
        image: ugandaImg,
        span: false,
        // Gorillas + chimps + Nile preview
        gallery: [gorilla1, chimp, hippo],
    },
    {
        name: 'Murchison Falls National Park',
        country: 'Uganda',
        desc: 'Witness the mighty River Nile explode through a narrow 7-meter gorge. An iconic wildlife haven with roaring falls and luxury riverfront lodges.',
        tags: ['Murchison Falls', 'River Nile', 'Game Drives'],
        image: murchisonImg,
        span: false,
        linkTo: '/activity/murchison-falls',
        linkLabel: 'Explore Lodge & Tours',
        // Hippos + elephants + river
        gallery: [hippo, elephant, splashing],
    },
    {
        name: 'Kenya',
        country: 'East Africa',
        desc: 'Witness the epic Great Migration across the Masai Mara, the stunning Rift Valley, and pristine beaches of Mombasa.',
        tags: ['Big 5', 'Migration', 'Masai Mara'],
        image: kenyaImg,
        span: false,
        // Lions + masai + gazelle
        gallery: [lions, masai, gazelle],
    },
    {
        name: 'Rwanda',
        country: 'Heart of Africa',
        desc: 'Trek gorillas in Volcanoes National Park, discover golden monkeys, and experience the warmest hospitality in Africa.',
        tags: ['Gorillas', 'Virungas', 'Kigali'],
        image: rwandaImg,
        span: false,
        // Gorillas + Kigali city
        gallery: [gorilla2, gorilla3, kigali],
    },
    {
        name: 'Tanzania',
        country: 'East Africa',
        desc: 'Serengeti\'s endless plains, Ngorongoro Crater\'s wildlife wonderland, and the pristine beaches of Zanzibar await.',
        tags: ['Serengeti', 'Big 5', 'Zanzibar'],
        image: tanzaniaImg,
        span: false,
        // Giraffe + Zanzibar beach + sunset
        gallery: [giraffe, zanzibar, zanzibarB],
    },
    {
        name: 'DR Congo',
        country: 'Central Africa',
        desc: 'Rare eastern lowland gorilla trekking and raw, untouched rainforest adventures from Kigali with our expert guides.',
        tags: ['Lowland Gorillas', 'Rainforest'],
        image: congoImg,
        span: false,
        // Gorillas + Rwenzori forest
        gallery: [gorilla1, rwenzo3, buffalo2],
    },
];

export default function Destinations() {
    return (
        <section className="destinations section" id="destinations">
            <div className="container">
                <div className="destinations-header">
                    <span className="section-label">Where We Go</span>
                    <h2 className="section-title">Top African <span>Destinations</span></h2>
                    <p className="section-subtitle">
                        From the misty gorilla forests of Uganda to the sun-drenched plains of the Serengeti —
                        we take you to the heart of Africa's greatest wildernesses.
                    </p>
                </div>

                <div className="destinations-grid">
                    {destinations.map((d, i) => (
                        <div className="dest-card reveal" key={i}>
                            <img
                                src={d.image}
                                alt={d.name}
                                className="dest-img"
                                style={d.style}
                            />
                            <div className="dest-overlay" />
                            <div className="dest-content">
                                <div className="dest-country">{d.country}</div>
                                <h3 className="dest-name">{d.name}</h3>

                                {/* Per-destination gallery preview strip */}
                                {d.gallery && (
                                    <div className="dest-gallery-preview">
                                        {d.gallery.map((img, gi) => (
                                            <img
                                                key={gi}
                                                src={img}
                                                alt={`${d.name} preview ${gi + 1}`}
                                                className="dest-gallery-thumb"
                                            />
                                        ))}
                                    </div>
                                )}

                                {d.tags && (
                                    <div className="dest-tags">
                                        {d.tags.map(t => (
                                            <Link to={`/activity/${getActivitySlug(t)}`} className="dest-tag" key={t}>
                                                {t}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                                <p className="dest-desc">{d.desc}</p>
                                <Link to={d.linkTo || '/tours'} className="dest-link">
                                    {d.linkLabel || 'Explore Tours'} <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
