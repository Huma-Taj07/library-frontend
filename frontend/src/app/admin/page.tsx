import { FiPlus, FiBook, FiImage, FiMapPin, FiEye } from "react-icons/fi";
import Link from "next/link";

const stats = [
  { label: "Total Diaries", value: "24", icon: FiBook, color: "bg-blue-500" },
  { label: "Destinations", value: "18", icon: FiMapPin, color: "bg-green-500" },
  { label: "Photos", value: "342", icon: FiImage, color: "bg-purple-500" },
  { label: "Page Views", value: "12.5K", icon: FiEye, color: "bg-orange-500" },
];

const recentPosts = [
  { id: 1, title: "Paris Memory", date: "2024-03-15", status: "Published" },
  { id: 2, title: "Tokyo Adventure", date: "2024-03-14", status: "Draft" },
  { id: 3, title: "Bali Sunset", date: "2024-03-13", status: "Published" },
];

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-dark mb-2">Dashboard</h1>
        <p className="text-gray-600">
          Welcome back! Here's your site overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-dark">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg text-white`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-dark mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/diaries/new"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <FiPlus size={20} />
              New Diary
            </Link>
            <Link
              href="/admin/destinations/new"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-secondary text-white rounded-lg hover:bg-teal-600 transition-colors"
            >
              <FiPlus size={20} />
              New Destination
            </Link>
            <Link
              href="/admin/gallery/upload"
              className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
              <FiPlus size={20} />
              Upload Photo
            </Link>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-dark mb-4">Recent Posts</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-gray-700 text-sm font-semibold">
                    Title
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700 text-sm font-semibold">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700 text-sm font-semibold">
                    Status
                  </th>
                  <th className="text-left py-3 px-4 text-gray-700 text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-gray-900">{post.title}</td>
                    <td className="py-3 px-4 text-gray-600 text-sm">
                      {post.date}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          post.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:text-red-700 text-sm font-medium">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/admin/diaries"
            className="text-primary hover:text-red-700 text-sm font-medium mt-4 inline-block"
          >
            View all posts →
          </Link>
        </div>
      </div>
    </div>
  );
}
