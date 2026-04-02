export const SITE_CONFIG = {
  name: "Pauleen's Catering & Events",
  shortName: "Pauleen's",
  brandName: "Pauleen's by Chef Ji",
  tagline: "Life is a banquet and tastes so much better when it's prepared for you.",
  taglineAttribution: '— Chef Jimmie Salonie',
  subTagline: 'Servicing Northern Virginia & the DMV',
  phone: '917-539-9256',
  phoneHref: 'tel:+19175399256',
  email: 'Pauleenscuisine@gmail.com',
  emailHref: 'mailto:Pauleenscuisine@gmail.com',
  address: '1602 Village Market Blvd, Ste 120',
  city: 'Leesburg, VA 20175',
  founded: '2009',
  chef: 'Chef Jimmie Salonie',
  chefAlias: 'Chef Ji',
  partner: "Michael O'Neill",
  partnerTitle: 'Hospitality Director',
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

// Real services from pauleenscatering.com — exact names and real copy
export const SERVICES = [
  {
    id: 'event-catering',
    title: 'Event Catering',
    headline: 'Exceptional Service',
    description:
      'We understand that no two events are the same, and we strive to customize our services to fit whatever needs you may have, including specific dietary guidelines. We take great pride in offering fresh, delicious food, and are detail-oriented to ensure that your special event is perfect! Our level of hospitality is second to none and will leave a lasting impression on you and your guests.',
    cta: 'Get a Quote!',
    icon: '🍽️',
    image: IMAGES.gallery[0],
  },
  {
    id: 'private-chef',
    title: 'Private Chef',
    headline: 'Satisfaction Guaranteed',
    description:
      "Life always seems hectic and busy — this service is the perfect solution. When you book this popular service, you're in for a one-of-a-kind culinary experience that will leave you all wanting more. Contact us today and we'll work with you to curate your next gathering, from intimate dinner parties to life's most significant occasions, or simply to take the guesswork out of \"what's for dinner?\" Let us do the work for you! In-home and drop-off service available.",
    cta: "Let's Chat!",
    icon: '👨‍🍳',
    image: IMAGES.services,
  },
  {
    id: 'recipe-development',
    title: 'Recipe Development',
    headline: 'Recipe for Success',
    description:
      "This service specializes in simplifying recipes based on your specific requests. Chef Jimmie can help you create delicious, nutritious meals that will tantalize your guests' taste buds. We can customize recipes to fit specific dietary needs, while still providing a delicious and memorable experience for your guests.",
    cta: 'Email',
    icon: '📖',
    image: IMAGES.gallery[4],
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
] as const;

// Only verified menu items from the real site
export const VERIFIED_MENU_ITEMS = [
  'Fresh Local Oysters on the Half Shell (Cherrystones, Littlenecks)',
  'Shrimp Cocktail',
  'King Crab Legs',
  'Lobster Tails',
  'Shrimp Scampi — Six Jumbo Shrimp Sautéed in Garlic and Lemon Butter, Served on Angel Hair Pasta',
  'Coconut Shrimp with Mango Dipping Sauce',
  'Shrimp Spring Rolls — Fresh Vegetables Wrapped in a Crispy Roll, Served with Sweet and Sour Duck Sauce',
] as const;

export const EVENT_TYPES = [
  'Corporate Event',
  'Private Dinner',
  'Culinary Class',
  'Holiday Gathering',
  'Birthday Celebration',
  'Anniversary',
  'Other',
] as const;
