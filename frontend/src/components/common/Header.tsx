"use client";

import { useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/utils/constants";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          {/* Logo */}
          <Link href="/" className="header__logo">
            ✈️ Travel Diary
          </Link>

          {/* Desktop Navigation */}
          <ul className="header__links">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="header__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "/admin")}
            className="header__cta"
          >
            Start Admin
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="header__toggle"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="header__mobile-menu active">
            <ul className="header__mobile-links">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="header__mobile-link"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                window.location.href = "/admin";
                setIsOpen(false);
              }}
              className="header__cta"
            >
              Start Admin
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
