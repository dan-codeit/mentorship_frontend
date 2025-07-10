import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 m-auto text-white pt-10 pb-6 xl:w-1/2 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Danitors Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Danitors</h2>
          <p className="text-sm text-gray-400">
            Cultivating impactful mentorships that drive personal and
            professional growth.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get Involved</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <Link to="/signup" className="hover:underline">
                Become a mentor
              </Link>
            </li>
            <li>
              <Link to="/signup" className="hover:underline">
                Request a mentorship
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons) */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mt-2">
            <SocialLinks/>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Danitors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
