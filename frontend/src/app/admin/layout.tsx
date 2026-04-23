"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiLogOut,
  FiHome,
  FiBook,
  FiMapPin,
  FiImage,
  FiSettings,
} from "react-icons/fi";

const adminNavItems = [
  { label: "Dashboard", href: "/admin", icon: FiHome },
  { label: "Diaries", href: "/admin/diaries", icon: FiBook },
  { label: "Destinations", href: "/admin/destinations", icon: FiMapPin },
  { label: "Gallery", href: "/admin/gallery", icon: FiImage },
  { label: "Settings", href: "/admin/settings", icon: FiSettings },
];

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark text-white transform transition-transform duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Admin</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden text-2xl hover:text-gray-300"
          >
            <FiX />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          {adminNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary hover:bg-red-700 rounded-lg transition-colors text-white font-medium">
            <FiLogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-sm flex items-center justify-between px-6 py-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-2xl text-gray-700 hover:text-gray-900"
          >
            <FiMenu />
          </button>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">Welcome, Admin</span>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
