export const SITE_CONFIG = {
  name: "Pauleen's Catering & Events",
  shortName: "Pauleen's",
  tagline: 'Elevated Caribbean Catering Experience',
  description:
    'Authentic Caribbean flavors for weddings, corporate events, and private celebrations in Leesburg, VA and beyond.',
  phone: '(917) 539-9256',
  phoneHref: 'tel:+19175399256',
  email: 'Pauleenscuisine@gmail.com',
  emailHref: 'mailto:Pauleenscuisine@gmail.com',
  address: '1602 Village Market Blvd, Ste 120',
  city: 'Leesburg, VA 20175',
  founded: '2009',
  chef: 'Chef Jimmie Salonie',
  chefAlias: 'Chef Ji',
  social: {
    facebook: 'https://www.facebook.com/PauleensCateringEvents/',
    instagram: 'https://www.instagram.com/pauleens_catering_events/',
  },
} as const;

const WIX_BASE = 'https://static.wixstatic.com/media';

export const IMAGES = {
  hero: `${WIX_BASE}/495a45_c3e93024e71e4d639b3a0b83a05e5f43~mv2.jpeg`,
  heroAlt: `${WIX_BASE}/495a45_ef5e4220f1574d8fa510c9df335bb1da~mv2.jpeg`,
  logo: `${WIX_BASE}/5d05e4_e5c0630d84f349ba86d5a70063507831~mv2.png`,
  about: `${WIX_BASE}/5d05e4_bc05d318fd1644f1a76bb0bc0de1236a~mv2.png`,
  services: `${WIX_BASE}/5d05e4_5d5cf9abae7543c99d24cefea1cde6d6~mv2.webp`,
  menu1: `${WIX_BASE}/5d05e4_4a334d98a1e04e688f9ec09b5b9960a2~mv2.jpg`,
  menu2: `${WIX_BASE}/5d05e4_f9604eb4265944b38105491121c9c366~mv2.jpg`,
  gallery: [
    `${WIX_BASE}/495a45_1791fd9d85da47dc916cf5b7a4b3757b~mv2.jpg`,
    `${WIX_BASE}/495a45_1c12b0f86edf4487987974187bfad909~mv2.jpeg`,
    `${WIX_BASE}/495a45_53bf83f74f4e46c788fec7397ba0cfda~mv2.jpeg`,
    `${WIX_BASE}/495a45_5cd3c22e368b4e3ea0066925597421dd~mv2.jpeg`,
    `${WIX_BASE}/495a45_61328fea760f44029911893de1bf8071~mv2.jpeg`,
    `${WIX_BASE}/495a45_70f70fad671647bba44f469f83e81663~mv2.jpeg`,
    `${WIX_BASE}/495a45_795911899dc84213b9009e69e717a79e~mv2.jpeg`,
    `${WIX_BASE}/495a45_98f8de8c407b4245a120ba5391435a6d~mv2.jpeg`,
    `${WIX_BASE}/495a45_9932b83aae1347098381f9d84b4fcea3~mv2.png`,
    `${WIX_BASE}/495a45_b8074b64cd0d44e1bc2cac6148649a94~mv2.jpeg`,
    `${WIX_BASE}/495a45_e5ee6ea6b568463d8c99ca02fdc0667a~mv2.jpeg`,
  ],
} as const;

export const SERVICES = [
  {
    id: 'wedding',
    title: 'Wedding Catering',
    description:
      'Make your most important day unforgettable. We craft bespoke Caribbean menus that reflect your love story, from elegant cocktail hours to lavish reception feasts.',
    icon: '💍',
    image: IMAGES.gallery[0],
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description:
      'Elevate your next meeting, conference, or company celebration. Fresh, flavorful Caribbean cuisine that impresses clients and energizes your team.',
    icon: '🏢',
    image: IMAGES.gallery[1],
  },
  {
    id: 'private',
    title: 'Private Events',
    description:
      'From intimate birthday dinners to grand milestone celebrations, we bring authentic Caribbean flavors and full-service hospitality to events of any scale.',
    icon: '🎉',
    image: IMAGES.gallery[2],
  },
  {
    id: 'custom',
    title: 'Custom Menus',
    description:
      'No two events are alike. We work with you to design a personalized menu that honors dietary needs, cultural traditions, and your unique culinary vision.',
    icon: '📋',
    image: IMAGES.gallery[3],
  },
  {
    id: 'chef',
    title: 'Private Chef',
    description:
      'Experience restaurant-quality dining in the comfort of your home. Chef Ji handles grocery shopping, meal prep, and even offers hands-on culinary classes.',
    icon: '👨‍🍳',
    image: IMAGES.gallery[4],
  },
] as const;

export const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '500+', label: 'Events Catered' },
  { value: '100%', label: 'Caribbean-Inspired' },
  { value: '5★', label: 'Client Satisfaction' },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

export const EVENT_TYPES = [
  'Wedding',
  'Corporate Event',
  'Private Party',
  'Birthday Celebration',
  'Anniversary',
  'Holiday Gathering',
  'Other',
] as const;
