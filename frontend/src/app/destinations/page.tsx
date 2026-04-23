"use client";

import DestinationCard from "@/components/cards/DestinationCard";
import { FEATURED_DESTINATIONS } from "@/utils/constants";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function DestinationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = FEATURED_DESTINATIONS.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Explore Destinations
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover the world's most breathtaking locations and plan your next
            adventure.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <FiSearch
              className="absolute left-4 top-4 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="destinations-grid">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-300">
              No destinations found. Try a different search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
