"use client";

import { useState, useMemo } from "react";
import DiaryCard from "@/components/cards/DiaryCard";
import { FEATURED_DIARIES } from "@/utils/constants";
import { FiSearch } from "react-icons/fi";

const categories = [
  "all",
  "travel-tips",
  "food",
  "adventure",
  "photography",
  "culture",
];

export default function DiariesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiaries = useMemo(() => {
    return FEATURED_DIARIES.filter((diary) => {
      const matchesCategory =
        selectedCategory === "all" || diary.category === selectedCategory;
      const matchesSearch =
        diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        diary.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Travel Diaries
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Immersive stories from my adventures across the globe. Read about
            destinations, cultures, food, and unforgettable experiences.
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
              placeholder="Search diaries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/50"
                  : "bg-white/10 text-gray-300 border border-white/20 hover:border-cyan-400"
              }`}
            >
              {category === "all" ? "All Diaries" : category.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Diaries Grid */}
        {filteredDiaries.length > 0 ? (
          <div className="diaries-grid">
            {filteredDiaries.map((diary) => (
              <DiaryCard key={diary.id} {...diary} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-300">
              No diaries found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
