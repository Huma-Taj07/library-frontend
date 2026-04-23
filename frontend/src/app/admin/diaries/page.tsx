"use client";

import { useState } from "react";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiSearch } from "react-icons/fi";
import Button from "@/components/common/Button";

const diaries = [
  {
    id: 1,
    title: "Paris Morning Walk",
    excerpt: "A beautiful morning exploring Paris streets",
    date: "2024-03-15",
    status: "published",
    views: 324,
  },
  {
    id: 2,
    title: "Tokyo Street Food",
    excerpt: "Best food experiences in Tokyo",
    date: "2024-03-14",
    status: "draft",
    views: 0,
  },
  {
    id: 3,
    title: "Bali Adventures",
    excerpt: "Unforgettable moments in Bali island",
    date: "2024-03-13",
    status: "published",
    views: 512,
  },
];

export default function AdminDiariesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDiaries = diaries.filter(
    (diary) =>
      diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      diary.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-dark mb-2">Travel Diaries</h1>
          <p className="text-gray-600">Manage your travel diary posts</p>
        </div>
        <Link href="/admin/diaries/new">
          <Button>
            <FiPlus size={20} />
            New Diary
          </Button>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="relative">
          <FiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search diaries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          />
        </div>
      </div>

      {/* Diaries Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-gray-700 font-semibold">
                Title
              </th>
              <th className="text-left py-4 px-6 text-gray-700 font-semibold">
                Date
              </th>
              <th className="text-left py-4 px-6 text-gray-700 font-semibold">
                Status
              </th>
              <th className="text-left py-4 px-6 text-gray-700 font-semibold">
                Views
              </th>
              <th className="text-left py-4 px-6 text-gray-700 font-semibold">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDiaries.map((diary) => (
              <tr
                key={diary.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-gray-900 font-medium">
                  {diary.title}
                </td>
                <td className="py-4 px-6 text-gray-600 text-sm">
                  {diary.date}
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      diary.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {diary.status.charAt(0).toUpperCase() +
                      diary.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600 text-sm flex items-center gap-1">
                  <FiEye size={16} />
                  {diary.views}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <button className="text-primary hover:text-red-700 transition-colors">
                      <FiEdit2 size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition-colors">
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredDiaries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No diaries found</p>
          <Link href="/admin/diaries/new">
            <Button variant="outline">Create Your First Diary</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
