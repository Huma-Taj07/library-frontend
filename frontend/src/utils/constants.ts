export const SITE_CONFIG = {
  name: "Travel Diary",
  description:
    "A modern platform for sharing travel experiences and destination insights",
  url: "https://traveldiary.com",
  logo: "/logo.svg",
  socialLinks: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    pinterest: "https://pinterest.com",
  },
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Diaries", href: "/diaries" },
  { label: "Destinations", href: "/destinations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FEATURED_DESTINATIONS = [
  {
    id: 1,
    name: "Paris, France",
    image: "/destinations/paris.jpg",
    description: "The City of Light awaits",
    color: "#FFB6C1",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "/destinations/tokyo.jpg",
    description: "Modern meets tradition",
    color: "#FFD700",
  },
  {
    id: 3,
    name: "Barcelona, Spain",
    image: "/destinations/barcelona.jpg",
    description: "Where art comes alive",
    color: "#FF6B6B",
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    image: "/destinations/bali.jpg",
    description: "Tropical paradise",
    color: "#4ECDC4",
  },
];

export const FEATURED_DIARIES = [
  {
    id: 1,
    title: "Sunrise Over the Eiffel Tower",
    excerpt: "A magical morning in Paris",
    date: "2024-03-15",
    image: "/diaries/paris-sunrise.jpg",
    category: "travel-tips",
    readTime: 5,
  },
  {
    id: 2,
    title: "Street Food Adventure in Bangkok",
    excerpt: "Exploring the culinary wonders",
    date: "2024-03-10",
    image: "/diaries/bangkok-food.jpg",
    category: "food",
    readTime: 7,
  },
  {
    id: 3,
    title: "Trekking in the Himalayas",
    excerpt: "A journey to the roof of the world",
    date: "2024-03-05",
    image: "/diaries/himalayas.jpg",
    category: "adventure",
    readTime: 8,
  },
];
