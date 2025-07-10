import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { isAuthenticated, getUser, logout } from "../../auth/auth";
import mentorslogo from "../../assets/mentorslogo.svg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/pricing", label: "Pricing" },
  { to: "/help", label: "Help" },
  { to: "/login", label: "Login" },
  { to: "/signup", label: "Signup" },
];

const centerMenuLabels = ["About","Home", "Contact", "Features", "Pricing", "Help"];
const rightMenuLabels = ["Login", "Signup"];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const user = getUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const dashboardPath =
    user?.role === "mentor"
      ? "/mentor-dashboard"
      : user?.role === "mentee"
      ? "/mentee-dashboard"
      : "/";

  return (
    <nav className="bg-cyan-800 fixed w-full text-white py-2 px-4 md:px-10 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={mentorslogo} alt="Company Logo" className="h-8" />
          </Link>
        </div>

        {/* Hamburger Menu*/}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Center Menu (Desktop Only) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
          {navItems
            .filter((item) => centerMenuLabels.includes(item.label))
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-200"
                }
              >
                {item.label}
              </NavLink>
            ))}
        </div>

        {/* Right Menu (Desktop Only) */}
        <div className="hidden md:flex space-x-4">
          {isAuthenticated() ? (
            <>
              <NavLink
                to={dashboardPath}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-bold"
                    : "text-white hover:text-yellow-200"
                }
              >
                Dashboard
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-white hover:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            navItems
              .filter((item) => rightMenuLabels.includes(item.label))
              .map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400 font-bold"
                      : "text-white hover:text-yellow-200"
                  }
                >
                  {item.label}
                </NavLink>
              ))
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {/* Center Links */}
          {navItems
            .filter((item) => centerMenuLabels.includes(item.label))
            .map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-yellow-400 font-bold"
                    : "block text-white hover:text-yellow-200"
                }
              >
                {item.label}
              </NavLink>
            ))}

          {/* Right/Auth Links */}
          {isAuthenticated() ? (
            <>
              <NavLink
                to={dashboardPath}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-yellow-400 font-bold"
                    : "block text-white hover:text-yellow-200"
                }
              >
                Dashboard
              </NavLink>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="block text-white hover:text-red-400"
              >
                Logout
              </button>
            </>
          ) : (
            navItems
              .filter((item) => rightMenuLabels.includes(item.label))
              .map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block text-yellow-400 font-bold"
                      : "block text-white hover:text-yellow-200"
                  }
                >
                  {item.label}
                </NavLink>
              ))
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
