
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  HeartPulse,
} from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Team", path: "/team" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header
      className={`rehabNavbar ${scrolled ? "isScrolled" : ""} ${
        menuOpen ? "menuIsOpen" : ""
      }`}
    >
      <div className="rehabNavInner">
        <Link
          to="/"
          className="rehabNavBrand"
          aria-label="Rehabics home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="rehabNavLogo">
            <Activity size={25} strokeWidth={2.4} />
            <span className="rehabLogoDot" />
          </span>

          <span className="rehabBrandText">
            <strong>rehabics</strong>
            <small>MOVE BETTER. LIVE BETTER.</small>
          </span>
        </Link>

        <nav className="rehabDesktopNav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `rehabNavLink ${isActive ? "active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="rehabNavActions">
          <Link to="/login" className="rehabLoginLink">
            Sign In
          </Link>

          <Link to="/appointment" className="rehabBookButton">
            <span>Book Appointment</span>
            <ArrowUpRight size={17} />
          </Link>
        </div>

        <button
          type="button"
          className="rehabMobileToggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="rehabMobileNavigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              className="rehabMobileBackdrop"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.nav
              id="rehabMobileNavigation"
              className="rehabMobileNav"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
            >
              <div className="rehabMobileNavHeading">
                <div>
                  <span className="rehabMobileEyebrow">EXPLORE REHABICS</span>
                  <h2>How can we help?</h2>
                </div>
                <span className="rehabMobileHeart">
                  <HeartPulse size={23} />
                </span>
              </div>

              <div className="rehabMobileLinks">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        `rehabMobileLink ${isActive ? "active" : ""}`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight size={17} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              <div className="rehabMobileActions">
                <Link
                  to="/login"
                  className="rehabMobileLogin"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>

                <Link
                  to="/appointment"
                  className="rehabBookButton rehabMobileBook"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Book Appointment</span>
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <p className="rehabMobileNote">
                Your journey to better movement starts here.
              </p>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
