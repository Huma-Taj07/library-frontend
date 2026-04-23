"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/utils/constants";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* About Section */}
          <div>
            <h3>✈️ Travel Diary</h3>
            <p style={{ marginBottom: "16px", lineHeight: "1.6" }}>
              Sharing the world's most beautiful moments, one journey at a time.
            </p>
            <div className="footer__socials">
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                className="footer__social-link"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.twitter}
                className="footer__social-link"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                className="footer__social-link"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.pinterest}
                className="footer__social-link"
                aria-label="Pinterest"
              >
                <FaPinterest size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <Link href="/diaries">Travel Diaries</Link>
              </li>
              <li>
                <Link href="/destinations">Destinations</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/about">About Me</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#travel-guide">Travel Guide</a>
              </li>
              <li>
                <a href="#photography">Photography Tips</a>
              </li>
              <li>
                <a href="#packing">Packing List</a>
              </li>
              <li>
                <a href="#gear">Gear Recommendations</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3>Contact</h3>
            <ul style={{ gap: "16px" }}>
              <li
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <FiMail size={16} style={{ color: "#ff6b6b" }} />
                <a href="mailto:hello@traveldiary.com">hello@traveldiary.com</a>
              </li>
              <li
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <FiPhone size={16} style={{ color: "#ff6b6b" }} />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <FiMapPin
                  size={16}
                  style={{ marginTop: "2px", color: "#ff6b6b", flexShrink: 0 }}
                />
                <span>Exploring the World</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer__bottom">
          <p>© {currentYear} Travel Diary. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
