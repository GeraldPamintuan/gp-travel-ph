export interface Place {
  id: number;
  name: string;
  town: string;
  category: string;
  description: string;
  tip: string;
  wiki: string;
  image?: string;
  credit?: string;
  source?: string;
  activities?: string[];
}
export const places: Place[] = [
  {
    id: 1,
    name: 'Mount Arayat',
    town: 'Arayat',
    category: 'Nature',
    description:
      'A striking mountain rising above the Central Luzon plain, with forest trails and wide views of Pampanga.',
    tip: 'Plan hikes with a local guide and check trail access and weather.',
    wiki: 'Mount Arayat',
  },
  {
    id: 2,
    name: 'San Guillermo Parish Church',
    town: 'Bacolor',
    category: 'Heritage',
    description:
      'A historic church partly buried by lahar after the eruption of Mount Pinatubo. Its surviving interiors tell a remarkable story of resilience.',
    tip: 'Dress respectfully; services may limit visitor access.',
    wiki: 'San Guillermo Parish Church',
  },
  {
    id: 3,
    name: 'Puning Hot Spring',
    town: 'Porac',
    category: 'Nature',
    description:
      'A volcanic landscape of rugged canyons and hot springs near the foothills of Mount Pinatubo.',
    tip: 'Contact the operator for access, transport and current conditions.',
    wiki: 'Puning Hot Spring',
  },
  {
    id: 4,
    name: 'Holy Rosary Parish Church',
    town: 'Angeles',
    category: 'Heritage',
    description:
      'An enduring landmark in the old heart of Angeles, surrounded by streets rich in Kapampangan history.',
    tip: 'Pair your visit with a walk around the heritage district.',
    wiki: 'Holy Rosary Parish Church (Angeles City)',
  },
  {
    id: 5,
    name: 'Museo ning Angeles',
    town: 'Angeles',
    category: 'Museums',
    description:
      'Discover the city’s story through a local museum housed in its former municipal building.',
    tip: 'Confirm museum opening times before your visit.',
    wiki: 'Museo ning Angeles',
  },
  {
    id: 6,
    name: 'Nayong Pilipino Clark',
    town: 'Mabalacat',
    category: 'Culture',
    description:
      'A cultural park inspired by Philippine heritage, architecture and traditions inside the Clark area.',
    tip: 'Check current public access before planning a trip.',
    wiki: 'Nayong Pilipino Clark',
  },
  {
    id: 7,
    name: 'Candaba Swamp',
    town: 'Candaba',
    category: 'Nature',
    description:
      'A seasonal wetland landscape known for migratory birds and a quieter side of the Pampanga countryside.',
    tip: 'Birdwatching is seasonal; coordinate access with local guides.',
    wiki: 'Candaba Swamp',
  },
  {
    id: 8,
    name: 'Betis Church',
    town: 'Guagua',
    category: 'Heritage',
    description:
      'A Kapampangan heritage church celebrated for its richly painted ceilings and intricate interior craftsmanship.',
    tip: 'Visit quietly and respect worshippers and photography rules.',
    wiki: 'Betis Church',
  },
  {
    id: 9,
    name: 'Pamintuan Mansion',
    town: 'Angeles',
    category: 'Museums',
    description:
      'A grand heritage home associated with the Philippine independence movement and local social history.',
    tip: 'Check museum access with the National Historical Commission.',
    wiki: 'Pamintuan Mansion',
  },
  {
    id: 10,
    name: 'San Fernando railway station',
    town: 'San Fernando',
    category: 'Heritage',
    description:
      'A preserved railway landmark connected to Pampanga’s transport history and the memory of the Bataan Death March.',
    tip: 'Take time to read the historical markers on site.',
    wiki: 'San Fernando station (Pampanga)',
  },
  {
    id: 11,
    name: 'Dinosaurs Island',
    town: 'Mabalacat',
    category: 'Family',
    description: 'A dinosaur-themed attraction in the Clark area for a playful family outing.',
    tip: 'Check the operator’s current hours, tickets and age guidance.',
    wiki: 'Clark Freeport and Special Economic Zone',
  },
  {
    id: 12,
    name: 'Santa Monica Parish Church',
    town: 'Minalin',
    category: 'Heritage',
    description:
      'A centuries-old church overlooking the town, with distinctive architecture and deep community roots.',
    tip: 'Combine a respectful church visit with a walk around town.',
    wiki: 'Santa Monica Parish Church (Minalin)',
  },
  {
    id: 13,
    name: 'San Agustin Parish Church',
    town: 'Lubao',
    category: 'Heritage',
    description:
      'A historic brick church reflecting Lubao’s long religious and architectural heritage.',
    tip: 'Check service times and visitor access locally.',
    wiki: 'San Agustin Parish Church (Lubao)',
  },
  {
    id: 14,
    name: 'Sky Ranch Pampanga',
    town: 'San Fernando',
    category: 'Family',
    description: 'A family amusement park with rides and views across the surrounding city.',
    tip: 'Verify ride availability and ticket prices with the operator.',
    wiki: 'Sky Ranch',
  },
  {
    id: 15,
    name: 'Clark Museum',
    town: 'Mabalacat',
    category: 'Museums',
    description:
      'A museum exploring the history of Clark and the communities shaped by this former air base.',
    tip: 'Confirm visiting hours directly before travelling.',
    wiki: 'Clark Freeport and Special Economic Zone',
  },
  {
    id: 16,
    name: 'Dara Falls',
    town: 'Porac',
    category: 'Nature',
    description:
      'A waterfall destination in Porac’s uplands, suited to travellers interested in a guided outdoor excursion.',
    tip: 'Arrange a local guide; routes and access can change with rainfall.',
    wiki: 'Porac',
  },
  {
    id: 17,
    name: 'Our Lady of Atonement Parish Church',
    town: 'Floridablanca',
    category: 'Heritage',
    description:
      'A town-centre parish that offers a starting point for exploring Floridablanca’s local history.',
    tip: 'Respect parish activities and confirm access locally.',
    wiki: 'Floridablanca, Pampanga',
  },
  {
    id: 18,
    name: 'San Luis Gonzaga Parish Church',
    town: 'San Luis',
    category: 'Heritage',
    description:
      'A historic parish at the heart of San Luis, part of Pampanga’s rich church heritage.',
    tip: 'Visit during daylight and check local service schedules.',
    wiki: 'San Luis Gonzaga Parish Church',
  },
  {
    id: 19,
    name: 'Metropolitan Cathedral of San Fernando',
    town: 'San Fernando',
    category: 'Heritage',
    description:
      'The city’s cathedral and a central landmark for exploring the historic district of the provincial capital.',
    tip: 'Explore nearby heritage streets on foot when conditions allow.',
    wiki: 'Metropolitan Cathedral of San Fernando',
  },
  {
    id: 20,
    name: 'MarQuee Mall',
    town: 'Angeles',
    category: 'Family',
    description:
      'An indoor shopping and dining stop that can provide a relaxed break during a city itinerary.',
    tip: 'A practical rainy-day stop; check venue hours directly.',
    wiki: 'Marquee Mall',
  },
];

// Locally curated venues. References checked 11 November 2026; hours and fees are not live.
places.push(
  {
    id: 21,
    name: 'Clark Parade Grounds',
    town: 'Mabalacat',
    category: 'Running',
    activities: ['Picnic', 'Sports'],
    description:
      'A green open space in Clark with a dedicated jogging path. Come for a run, a gentle walk, or a relaxed picnic near the historic parade field.',
    tip: 'Use the designated paths. Check event closures and rules for field sports with the grounds management.',
    wiki: 'Clark Parade Grounds',
    source:
      'https://www.questhotelsandresorts.com/clark/blog/clarks-local-fun-and-adventures-at-quest-plus-conference-center-clark',
  },
  {
    id: 22,
    name: 'Clark Picnic Grounds',
    town: 'Mabalacat',
    category: 'Picnic',
    activities: ['Running', 'Family'],
    description:
      'An acacia-shaded park along Gil Puyat Avenue with a picnic grove, walking and jogging paths, and a playground.',
    tip: 'Bring water, keep the grove clean, and confirm current park rules for outside food and group activities.',
    wiki: '',
    source:
      'https://ciac.gov.ph/press-releases/ciac-opens-clark-picnic-grounds-advancing-urban-renewal-at-clark-aviation-capital-complex/',
  },
  {
    id: 23,
    name: 'Aling Lucing’s Sisig',
    town: 'Angeles',
    category: 'Where to eat',
    description:
      'A well-known Angeles food stop associated with Kapampangan sisig. An option for a local-food break during a heritage walk.',
    tip: 'Confirm the branch, menu and opening hours directly. Ask the staff about ingredients and dietary needs.',
    wiki: '',
    source: 'https://pampanganewsnow.com/symphony-homes-cites-local-restaurants-and-cafes/',
  },
  {
    id: 24,
    name: 'Everybody’s Cafe',
    town: 'San Fernando',
    category: 'Where to eat',
    description:
      'A long-established name in Pampanga’s food scene. Add it to a day exploring San Fernando for a Kapampangan meal.',
    tip: 'Check the exact branch and current menu before going; availability of dishes varies.',
    wiki: '',
    source: 'https://pampanganewsnow.com/symphony-homes-cites-local-restaurants-and-cafes/',
  },
  {
    id: 25,
    name: 'Bale Dutung',
    town: 'Angeles',
    category: 'Where to eat',
    description:
      'A dining destination by chef Claude Tayag, known for exploring Kapampangan cuisine through a curated meal.',
    tip: 'Contact the venue in advance about reservations, menus, group requirements and dietary needs.',
    wiki: '',
    source:
      'https://www.tpb.gov.ph/wp-content/uploads/2025/07/TPB-ITB-NO.-2025-040_Itinerary-for-Lot-1-Clark.pdf',
  },
  {
    id: 26,
    name: 'Cafe Dia Clark',
    town: 'Mabalacat',
    category: 'Cafés',
    description:
      'A Clark coffee stop to consider for a catch-up or a pause between outdoor activities. Listed in the Clark airport corporation’s local cafe guide.',
    tip: 'Confirm the Clark branch, opening times and current menu directly before visiting.',
    wiki: '',
    source: 'https://ciac.gov.ph/wp-content/uploads/2024/10/CIAC-2023-Annual-Report.pdf',
  },
  {
    id: 27,
    name: '717 Coffee & Co.',
    town: 'Mabalacat',
    category: 'Cafés',
    description:
      'A coffee stop at One West Aeropark in Clark Global City. A handy option for a coffee break while exploring the Clark area.',
    tip: 'Verify the current location, operating hours and parking arrangements with the cafe.',
    wiki: '',
    source: 'https://ciac.gov.ph/wp-content/uploads/2024/10/CIAC-2023-Annual-Report.pdf',
  },
  {
    id: 28,
    name: 'Mimosa Plus Golf Course',
    town: 'Mabalacat',
    category: 'Sports',
    description:
      'A golf destination in the Mimosa area of Clark for travellers planning time on the course.',
    tip: 'Arrange a tee time directly. Confirm guest access, equipment rental, dress code and green fees.',
    wiki: '',
    source:
      'https://haspcms-chroma-hospitality.s3.ap-southeast-1.amazonaws.com/01JW83F677135NVS35YEBPRWRW.pdf',
  },
);
