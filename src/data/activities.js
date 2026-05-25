/**
 * Centralized Activity and Experience Data Store
 * Provides rich metadata, descriptions, highlights, practical advice, and custom styling for each activity.
 */

// ── Gallery image imports ──────────────────────────────────────────────────
import gorilla  from '../assets/gorilla.webp';
import gorilla1 from '../assets/gorilla1.webp';
import gorilla2 from '../assets/gorilla2.webp';
import gorilla3 from '../assets/gorilla3.webp';
import gorilla4 from '../assets/gorilla4.webp';
import chimp    from '../assets/chimp.webp';
import chimp1   from '../assets/chimpanzee1.webp';
import forestImg from '../assets/forest.webp';
import rwenzo3  from '../assets/rwenzo3.webp';
import rwenzoriEntrance from '../assets/rwenzori-entrance.webp';
import lakeBunyonyi from '../assets/lake-bunyonyi.webp';
import lakeBunyonyi2 from '../assets/lake-bunyonyi2.webp';
import masai    from '../assets/masai.webp';
import kigali   from '../assets/kigali.webp';
import lions    from '../assets/lions.webp';
import lion2    from '../assets/lion2.webp';
import elephant from '../assets/elephant.webp';
import giraffe  from '../assets/giraffe.webp';
import buffalo1 from '../assets/buffalo1.webp';
import buffalo2 from '../assets/buffalo2.webp';
import gazelle  from '../assets/gazelle.webp';
import gazelle2 from '../assets/gazelle2.webp';
import sunset   from '../assets/sunset-in-savanna.webp';
import zanzibar from '../assets/zanzibar.webp';
import zanzibarBeach from '../assets/zanzibar-beach.webp';
import hippo    from '../assets/hippo-in-a-river.webp';
import splashing from '../assets/splashing-river.webp';
import jinja    from '../assets/jinja.webp';
import jinjaB   from '../assets/jinja-bridge.webp';
import cows     from '../assets/cows-alongside-river.webp';
import murchisonFalls from '../assets/murchison-falls.webp';
// ──────────────────────────────────────────────────────────────────────────

export const activities = {
    'gorillas': {
        title: 'Gorilla Trekking',
        subtitle: 'An intimate, face-to-face encounter with the gentle giants of the misty jungles.',
        icon: 'fas fa-paw',
        themeColor: '142, 45%, 45%', // Forest Green
        intro: 'Trek deep into the primeval rainforests of Bwindi Impenetrable National Park or Volcanoes National Park to stand just meters away from a family of mountain gorillas in their natural habitat.',
        overview: [
            'Gorilla trekking is widely regarded as one of the most profound wildlife encounters on earth. The journey begins early in the morning as you follow your expert rangers, trackers, and guides through dense tangles of vines, giant ferns, and steep bamboo-covered ridges. Your guides use their deep knowledge of gorilla behavior and tracks left behind to navigate towards the family.',
            'Once you locate the gorilla family, all weariness is forgotten. For one magical hour, you are permitted to quietly observe their daily lives. Watch playful infants tumble down tree branches, mothers tenderly groom their young, and the massive, awe-inspiring Silverback watch over the group with quiet authority. It is an emotional, humbling, and utterly unforgettable experience.'
        ],
        highlights: [
            'Spend one full hour observing mountain gorillas in their natural environment at close range.',
            'Navigate primeval, high-biodiversity rainforests dating back over 25,000 years.',
            'Guided by highly trained rangers, trackers, and researchers dedicated to gorilla conservation.',
            'Directly contribute to the protection of these endangered species through permit fees.'
        ],
        practicalInfo: {
            bestTime: 'Dry seasons (June to September, and December to February) for easier trekking paths.',
            difficulty: 'Moderate to Demanding. Treks can take between 2 to 7 hours depending on gorilla movement and terrain.',
            permits: 'Strictly required. Uganda permits are USD 800; Rwanda permits are USD 1,500. Booking 4-6 months in advance is highly recommended.',
            packing: [
                'Sturdy, waterproof hiking boots with excellent grip.',
                'Long-sleeved shirt and trousers to protect against nettles and insects.',
                'Garden gloves (to grab branches and vines safely).',
                'Lightweight rain jacket or poncho.',
                'Waterproof daypack, insect repellent, and plenty of drinking water.'
            ]
        },
        fallbackImage: 'gorillas',
        gallery: [gorilla, gorilla1, gorilla2, gorilla3, gorilla4],
    },
    'forest-walk': {
        title: 'Forest Walks & Trekking',
        subtitle: 'Immerse your senses in the pristine, ancient biomes and towering alpine peaks.',
        icon: 'fas fa-mountain',
        themeColor: '160, 40%, 30%', // Deep Emerald
        intro: 'Explore lush jungle floors, scale mist-shrouded slopes, and conquer the legendary glaciers of the Mountains of the Moon.',
        overview: [
            'Step away from the safari vehicle and connect directly with the African soil. Forest walking and mountain trekking open up a whole new world of sensory experiences — the damp earthy scent of ancient soils, the chorus of tropical tree frogs and colorful birds, and the breathtaking views from high-altitude ridges.',
            'Whether you are taking a gentle guided nature walk through Bwindi to discover hidden waterfalls and rare orchids, or embarking on a multi-day mountaineering expedition up the glacier peaks of the Rwenzori Mountains, our expert guides ensure a safe, educational, and deeply rewarding adventure through Africa\'s most dramatic vertical landscapes.'
        ],
        highlights: [
            'Trek through diverse vegetation zones, from tropical rain forests to bizarre giant lobelia alpine zones.',
            'Spot rare forest-dwelling species, endemic birds, butterflies, and unique flora.',
            'Scale the dramatic glacier peaks of the Rwenzori Mountains of the Moon.',
            'Learn traditional forest survival and tracking skills from indigenous local guides.'
        ],
        practicalInfo: {
            bestTime: 'Dry seasons (June to August, and December to February) for dry paths and clear mountain vistas.',
            difficulty: 'Varies from Easy (forest nature walks) to Extreme (high-altitude Rwenzori peak climbing).',
            permits: 'National Park entry fees apply. Multi-day mountain trekking requires specialized bookings and local guide support.',
            packing: [
                'Layered clothing suitable for hot forests as well as freezing alpine nights.',
                'Waterproof trekking boots and gaiters.',
                'Trekking poles to navigate slippery or steep slopes.',
                'High SPF sunscreen, polarized sunglasses, and a wide-brimmed hat.',
                'Thermal underwear and a high-quality sleeping bag for mountain treks.'
            ]
        },
        fallbackImage: 'forest',
        gallery: [forestImg, rwenzo3, rwenzoriEntrance, lakeBunyonyi, lakeBunyonyi2],
    },
    'cultural-visit': {
        title: 'Cultural & Community Visits',
        subtitle: 'Connect deeply with the warmth, rhythm, and timeless traditions of African heritage.',
        icon: 'fas fa-users',
        themeColor: '28, 70%, 45%', // Warm Terracotta / Ocher
        intro: 'Go beyond the wildlife to share stories, dance to ancestral rhythms, and learn about the diverse, vibrant communities who safeguard these landscapes.',
        overview: [
            'Africa\'s true magic lies in the warmth and resilience of its people. Our cultural and community visits are designed to be respectful, mutually beneficial, and highly immersive encounters. Meet local families, visit bustling village markets, and experience the living history of the region first-hand.',
            'From visiting the Batwa forest communities in Uganda to learn how they traditionally lived in harmony with the forest, to joining a traditional Maasai community in Kenya to understand their nomadic lifestyles and wildlife coexistence, to walking through Kigali\'s vibrant creative art galleries — these interactions build bridges of understanding and leave a lasting impression on your heart.'
        ],
        highlights: [
            'Engage in genuine, respectful exchanges with local communities and tribal elders.',
            'Participate in traditional cooking, weaving, pottery-making, and ancestral dances.',
            'Support sustainable, community-run tourism initiatives that fund local clinics and schools.',
            'Discover the modern urban culture, history, and culinary scenes of cities like Kigali and Kampala.'
        ],
        practicalInfo: {
            bestTime: 'Excellent year-round. Cultural visits are fully operational regardless of the season.',
            difficulty: 'Easy. Primarily involves walking through community villages and gentle interactions.',
            permits: 'Included in our safari packages. Local community guide fees are paid directly to support the community.',
            packing: [
                'Respectful clothing covering shoulders and knees.',
                'Comfortable walking shoes or trainers.',
                'A camera (always ask for permission before taking photographs of individuals).',
                'Small cash bills in local currency for purchasing handmade crafts.',
                'Hand sanitizer and biodegradable wet wipes.'
            ]
        },
        fallbackImage: 'culture',
        gallery: [masai, kigali, lakeBunyonyi, chimp1],
    },
    'big-5': {
        title: 'Big 5 Safaris & Wildebeest Migration',
        subtitle: 'Witness the ultimate drama of life and death on the endless savannah plains.',
        icon: 'fas fa-binoculars',
        themeColor: '33, 76%, 51%', // Safari Gold / Amber
        intro: 'Cross the iconic golden plains of the Masai Mara and Serengeti to track lions, leopards, rhinos, elephants, and cape buffalo, and witness millions of migrating wildebeests.',
        overview: [
            'The African savannah is a theater of raw nature, where the circle of life unfolds before your eyes every day. A Big 5 safari takes you deep into these legendary wildlife reserves in comfortable, open-roof 4x4 vehicles designed for optimal photography and viewing. Under the guidance of our expert trackers, you will learn to read the bush — a sudden alarm call from a baboon or a fresh footprint in the sand could lead to a leopard resting in an acacia tree or a pride of lions on a hunt.',
            'If you travel during the right months, you can witness the Great Wildebeest Migration — the largest overland wildlife migration on earth. See millions of wildebeest, zebras, and gazelles brave crocodile-infested rivers and relentless predators in a epic, cyclical journey for survival. It is a spectacle of sheer scale and drama that defies description.'
        ],
        highlights: [
            'Track all members of the African Big 5: Lion, Leopard, Elephant, Buffalo, and the endangered Rhino.',
            'Witness the dramatic Wildebeest Migration river crossings in the Masai Mara or Serengeti.',
            'Travel in customized 4x4 safari cruisers with pop-up roofs and guaranteed window seats.',
            'Learn about savannah ecosystems, animal behaviors, and complex bird species from naturalist guides.'
        ],
        practicalInfo: {
            bestTime: 'Dry seasons (July to October) for peak wildlife concentrations and Migration river crossings; January to March for calving season.',
            difficulty: 'Easy. Primarily consists of 4x4 game drives, requiring minimal physical exertion.',
            permits: 'National Park entry fees and conservation fees are strictly required (all fully managed and included in your booking).',
            packing: [
                'Neutral-colored clothing (khaki, beige, olive green). Avoid bright colors and dark blue/black (which attracts tsetse flies).',
                'High-quality binoculars (absolutely essential for spotting wildlife at a distance).',
                'A telephoto camera lens (200mm–400mm is ideal for wildlife photography).',
                'Warm layers (fleece, windbreaker) for chilly early-morning game drives.',
                'Wide-brimmed safari hat, sunglasses, and high SPF sunscreen.'
            ]
        },
        fallbackImage: 'savannah',
        gallery: [lions, lion2, elephant, giraffe, buffalo1, gazelle],
    },
    'game-drives': {
        title: 'Classic Savannah Game Drives',
        subtitle: 'Navigate the rugged trails in search of hidden wildlife secrets.',
        icon: 'fas fa-truck-monster',
        themeColor: '22, 65%, 45%', // Warm Bronze
        intro: 'Set out at dawn and dusk when the predators are active, navigating the winding dirt tracks of Queen Elizabeth, Murchison Falls, or Masai Mara.',
        overview: [
            'There is a unique thrill in waking up before dawn, grabbing a hot cup of coffee, and driving out into the cool, misty savannah as the first rays of gold break over the horizon. The bush is alive with activity at this hour — nocturnal animals are completing their hunts, and herbivores are grazing while alert to any hidden dangers.',
            'Our classic game drives are led by passionate professional guides who act as educators and tracking experts. They share details about animal family structures, mating rituals, and the critical conservation issues facing these precious ecosystems. Whether watching a herd of elephants bathe in a waterhole or spotting a cheetah scan the plains from a termite mound, every drive brings a new surprise.'
        ],
        highlights: [
            'Twice-daily game drives (dawn and dusk) to maximize sightings when predators are most active.',
            'Expertly driven 4x4 vehicles equipped with charging ports, refrigerators, and binoculars.',
            'Off-the-beaten-path tracks and secret locations known only to our seasoned local guides.',
            'Flexible, unhurried itineraries that allow you to sit and observe fascinating animal behaviors.'
        ],
        practicalInfo: {
            bestTime: 'Dry seasons (June to September, and December to February) when wildlife gathers around water sources.',
            difficulty: 'Easy. Perfect for travelers of all ages and physical fitness levels.',
            permits: 'Park entry fees apply, completely covered under our standard tour packages.',
            packing: [
                'Comfortable, breathable cotton clothing.',
                'A light scarf to protect against dust on open tracks.',
                'A good camera with extra memory cards and spare batteries.',
                'High-quality sunblock and soothing lip balm.',
                'Personal reusable water bottle to stay hydrated.'
            ]
        },
        fallbackImage: 'gamedrive',
        gallery: [lion2, elephant, giraffe, buffalo2, gazelle2],
    },
    'sundowners': {
        title: 'Sundowners & Wilderness Luxury',
        subtitle: 'Celebrate the sunset with premium drinks in the middle of nowhere.',
        icon: 'fas fa-glass-cheers',
        themeColor: '15, 60%, 48%', // Sunset Copper / Orange-Red
        intro: 'End your safari day with an iconic African tradition — enjoying cold drinks, gourmet snacks, and great company as the sun melts into the endless savannah.',
        overview: [
            'The African "Sundowner" is more than just a happy hour — it is a sacred safari ritual dating back to the early days of wildlife exploration. As the afternoon game drive comes to a close, your guide will select a scenic, elevated viewpoint. A table is set up with premium spirits, wines, local beers, and hand-crafted savory bites.',
            'With a glass in hand, you watch the sky erupt into brilliant shades of orange, violet, and deep crimson. The quiet beauty of the wild, the gentle breeze, and the sounds of the night beginning to stir create an atmosphere of pure peace and luxury. This is followed by returning to high-end eco-lodges or luxury tented camps where candlelit dinners under the stars await.'
        ],
        highlights: [
            'Scenic, private sundowner setups at spectacular viewpoints in the heart of the wilderness.',
            'Premium bar selection, signature cocktails, and gourmet, chef-prepared appetizers.',
            'Stunning luxury accommodations blending organic architecture with high-end modern comforts.',
            'Romantic candlelit dinners under the canopy of the Milky Way, accompanied by campfire stories.'
        ],
        practicalInfo: {
            bestTime: 'Beautiful all year round. Clear skies during dry months offer the most breathtaking sunsets.',
            difficulty: 'Easy / Pampering. Pure relaxation and luxury.',
            permits: 'Fully arranged by our operations team as part of our premium and exclusive packages.',
            packing: [
                'A light jacket or sweater (temperatures drop rapidly as soon as the sun sets).',
                'Smart-casual safari wear (comfortable but elegant for evening drinks).',
                'A camera or smartphone to capture the spectacular silhouette shots.',
                'Insect repellent for the evening transition.'
            ]
        },
        fallbackImage: 'sundowner',
        gallery: [sunset, zanzibar, zanzibarBeach, chimp],
    },
    'river-nile': {
        title: 'Nile River & Water Adventures',
        subtitle: 'Conquer the roaring rapids and discover the source of the world\'s longest river.',
        icon: 'fas fa-water',
        themeColor: '202, 60%, 42%', // Nile Blue
        intro: 'Experience the ultimate adrenaline rush in Jinja, the adventure capital of East Africa, or enjoy tranquil boat safaris to the bottom of the thunderous Murchison Falls.',
        overview: [
            'The River Nile holds a legendary place in human history, and its waters offer an incredible array of adventures. In Jinja, the historic source of the Nile, the river crashes through dramatic gorges, creating some of the most exciting Grade 5 white-water rafting rapids in the world. Guided by international safety professionals, you can surf giant waves, plunge down roaring drops, and swim in the warm, gentle pools between rapids.',
            'For a more tranquil but equally spectacular experience, a launch cruise on the Nile in Murchison Falls National Park takes you up-river. Glide past sleeping crocodiles, thousands of hippos, and elephants bathing on the banks, arriving at the base of the most powerful waterfall in the world, where the entire Nile squeezes through a narrow 7-meter canyon with an explosive roar.'
        ],
        highlights: [
            'Conquer world-class Grade 3 to Grade 5 white-water rafting rapids on the River Nile.',
            'Embark on scenic boat safaris to view elephants, hippos, and rare shoebill storks.',
            'Stand at the actual, historic source of the River Nile discovered by John Hanning Speke.',
            'Experience adrenaline-pumping bungee jumps, jet-boating, and quad-biking along the river banks.'
        ],
        practicalInfo: {
            bestTime: 'Excellent year-round. Water temperatures are always a warm 27°C (80°F).',
            difficulty: 'Varies from Easy (Nile cruises, family rafting) to Challenging (Grade 5 rafting, bungee jumping).',
            permits: 'Activity bookings and river safety fees are managed and included in your specialized adventure packages.',
            packing: [
                'Quick-drying clothes (board shorts, rash guard, or lightweight t-shirt).',
                'Water shoes or secure sandals with straps (no flip-flops on the rapids).',
                'Waterproof sunscreen and secure sunglasses with a strap.',
                'Dry change of clothes and a towel for after the rafting.',
                'Waterproof pouch for phones or action cameras.'
            ]
        },
        fallbackImage: 'rafting',
        gallery: [hippo, splashing, jinja, jinjaB, cows],
    },
    'murchison-falls': {
        title: 'Murchison Falls National Park',
        subtitle: 'The world\'s most powerful waterfall and legendary savannah safaris.',
        icon: 'fas fa-water',
        themeColor: '202, 60%, 42%', // Nile Blue
        intro: 'Witness the spectacular point where the entire River Nile forces its way through a tiny 7-meter gap, plunging 43 meters below with an explosive roar, surrounded by abundant savannah wildlife and premium luxury eco-lodges.',
        overview: [
            'Murchison Falls National Park is Uganda\'s largest and oldest protected area, offering a breathtaking blend of roaring water, sweeping savannahs, and dense tropical forests. The park\'s crown jewel is Murchison Falls, where the river Nile is squeezed into a tight canyon, producing a spectacular display of raw natural force.',
            'Your safari adventure here is complemented by stays in world-class luxury riverfront lodges. Relax in hand-crafted suites overlooking the Nile, where elephants come to bathe at sunset, hippos call in the distance, and the high-end hospitality makes your African wilderness experience truly unforgettable.'
        ],
        highlights: [
            'Take a boat safari up-river to the bottom of the explosive Murchison Falls.',
            'Spot the Big 5 on classic game drives across the golden savannah plains.',
            'Trek chimpanzees in the nearby lush Budongo Forest Reserve.',
            'Stay in our hand-selected luxury lodge featuring stunning Nile vistas, a pool, and private decks.'
        ],
        practicalInfo: {
            bestTime: 'Dry seasons (June to September, and December to February) for peak game viewing.',
            difficulty: 'Easy. Ideal for game drives, boat cruises, and relaxing lodge stays.',
            permits: 'National Park entry fees apply (fully included in our packages).',
            packing: [
                'Neutral-colored savannah wear.',
                'Good binoculars and camera for wildlife spotting.',
                'Lightweight, breathable clothing and a sunhat.',
                'Swimwear for the gorgeous lodge pool.'
            ]
        },
        fallbackImage: 'rafting',
        gallery: [murchisonFalls, hippo, elephant, splashing],
    }
};

/**
 * Maps a raw tag string from a tour or destination card to one of the 7 core activity slugs.
 * @param {string} tag - The raw tag text (e.g. 'Lowland Gorillas', 'Big 5')
 * @returns {string} The matching activity slug key
 */
export function getActivitySlug(tag) {
    if (!tag) return 'big-5';
    const t = tag.toLowerCase().trim();
    
    if (t.includes('murchison') || t.includes('falls')) return 'murchison-falls';
    if (t.includes('gorilla')) return 'gorillas';
    
    if (t.includes('forest') || 
        t.includes('rainforest') || 
        t.includes('mountain') || 
        t.includes('hiking') || 
        t.includes('nature') || 
        t.includes('tree') ||
        t.includes('walk')) return 'forest-walk';
        
    if (t.includes('cultural') || 
        t.includes('culture') || 
        t.includes('history') || 
        t.includes('city') || 
        t.includes('kigali') || 
        t.includes('community') ||
        t.includes('virungas')) return 'cultural-visit';
        
    if (t.includes('big 5') || 
        t.includes('migration') || 
        t.includes('serengeti') || 
        t.includes('masai mara') || 
        t.includes('ngorongoro') || 
        t.includes('volcanoes') || 
        t.includes('chimps') || // chimpanzees/primates
        t.includes('golden monkeys')) return 'big-5';
        
    if (t.includes('game drive') || 
        t.includes('safari') && !t.includes('romantic') && !t.includes('honeymoon')) return 'game-drives';
        
    if (t.includes('sundowner') || 
        t.includes('luxury') || 
        t.includes('romantic') || 
        t.includes('honeymoon') ||
        t.includes('camp') || 
        t.includes('beach') || 
        t.includes('zanzibar')) return 'sundowners';
        
    if (t.includes('rafting') || 
        t.includes('nile') || 
        t.includes('bungee') || 
        t.includes('water') ||
        t.includes('river')) return 'river-nile';
        
    return 'big-5'; // default safari fallback
}
