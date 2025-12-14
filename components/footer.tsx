"use client";

import { Heart, Mail, Phone, MapPin, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

// Custom social media icons not available in lucide-react
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socialLinks = [
  { id: "x", icon: XIcon, label: "X (Twitter)" },
  { id: "facebook", icon: FacebookIcon, label: "Facebook" },
  { id: "instagram", icon: InstagramIcon, label: "Instagram" },
  { id: "youtube", icon: Youtube, label: "YouTube" },
  { id: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { id: "tiktok", icon: TiktokIcon, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-0">
      <div className="container mx-auto px-4 py-12">
        {/* Condensed columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1: newsletter + social (condensed) */}
          <div className="w-full">
            <h3 className="text-xl font-bold text-primary mb-3">
              Stay Connected
            </h3>
            <form
              className="space-y-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter sign up"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="w-full sm:flex-1 min-w-0 rounded border border-gray-300 px-3 py-2 text-sm bg-white"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    className="w-full sm:flex-1 min-w-0 rounded border border-gray-300 px-3 py-2 text-sm bg-white"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="w-full min-w-0 rounded border border-gray-300 px-3 py-2 text-sm bg-white"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded bg-red-500 text-white px-3 py-2 text-sm font-semibold hover:bg-red-600"
                >
                  Sign up
                </button>
              </div>
              <p className="text-xs text-gray-600">
                We will protect your privacy. By signing up you agree to receive
                emails from us.
              </p>
            </form>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              {socialLinks.map(({ id, icon: Icon, label }) => (
                <a
                  key={id}
                  href="#"
                  aria-label={label}
                  className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: quick links (split into two sub-columns) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-primary">
                    Financials & Annual Report
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary">
                    Media Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: contact, address, badges, copyright */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href="mailto:info@specialolympics-ny.org"
                  className="hover:text-primary"
                >
                  info@specialolympics-ny.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>94 New Karner Road, Suite 208, Albany, NY 12203</span>
              </li>
            </ul>

            <div className="flex items-center gap-3 mt-4">
              <div
                role="img"
                aria-label="Platinum Transparency 2025"
                className="w-24 h-12 rounded border border-gray-300 flex items-center justify-center bg-white text-xs text-gray-700"
              >
                Platinum Transparency 2025
              </div>
              <div
                role="img"
                aria-label="Charity Navigator"
                className="w-24 h-12 rounded border border-gray-300 flex items-center justify-center bg-white text-xs text-gray-700"
              >
                Charity Navigator
              </div>
            </div>

            <p className="text-xs text-gray-600 mt-4">
              &copy; {new Date().getFullYear()} Special Olympics New York. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
