import Image from "next/image";
import { FiAward, FiCamera, FiMapPin, FiHeart } from "react-icons/fi";

const highlights = [
  {
    icon: FiCamera,
    title: "Travel Photography",
    description: "Capturing moments that tell stories",
  },
  {
    icon: FiMapPin,
    title: "Adventure Seeker",
    description: "Exploring 45+ countries and counting",
  },
  {
    icon: FiHeart,
    title: "Culture Enthusiast",
    description: "Learning from diverse cultures and traditions",
  },
  {
    icon: FiAward,
    title: "Award Winning",
    description: "Recognized for travel storytelling",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="animate-slide-in-left">
            <span className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h1 className="text-5xl font-bold mb-6">
              Hello, I'm a Travel Storyteller
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Welcome to my travel diary! I'm passionate about exploring the
              world, capturing its beauty through photography, and sharing
              authentic experiences that inspire others to travel.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              For over a decade, I've been documenting my journey across
              continents, immersing myself in diverse cultures, and discovering
              hidden gems that most travelers miss.
            </p>
            <p className="text-lg text-gray-300">
              Through this platform, I share not just photos and stories, but
              practical travel tips, destination guides, and the transformative
              power of travel.
            </p>
          </div>

          {/* Image */}
          <div className="animate-fade-in order-first md:order-last">
            <div className="w-full h-96 bg-gradient-to-br from-red-600/20 to-cyan-600/20 rounded-xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <span className="text-6xl">✈️</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 glass rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 text-center"
                >
                  <IconComponent
                    size={40}
                    className="mx-auto mb-4 text-cyan-400"
                  />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Section */}
        <div className="glass rounded-2xl p-12 text-center mb-20 border border-cyan-500/20">
          <h2 className="text-4xl font-bold mb-6">My Mission</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            To inspire people to explore the world, embrace different cultures,
            and create meaningful memories. Travel is not just about seeing new
            places; it's about transformation and connection.
          </p>
        </div>

        {/* Connect Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Follow me on social media for daily travel photos, behind-the-scenes
            content, and real-time updates from my adventures.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#"
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Instagram
            </a>
            <a
              href="#"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Twitter
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-gray-200 text-dark rounded-lg hover:bg-gray-300 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
