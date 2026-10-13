import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Activity,
  HeartPulse,
} from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Our Team", path: "/team" },
  { label: "Resources", path: "/resources" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0 }
        : { duration: 0.25, staggerChildren: 0.06 },
    },
    exit: { opacity: 0, y: -8, transition: { duration: 0.18 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      className="rv3Navbar"
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
    >
      <div className="rv3NavInner">
        <Link
          to="/"
          className="rv3Brand"
          aria-label="Rehabics home"
          onClick={closeMenu}
        >
          <span className="rv3BrandIcon">
            <Activity size={25} strokeWidth={2.2} />
            <span className="rv3BrandPulse">
              <HeartPulse size={12} strokeWidth={2.5} />
            </span>
          </span>

          <span className="rv3BrandText">
            <span className="rv3BrandName">rehabics</span>
            <span className="rv3BrandTagline">MOVE BETTER. LIVE BETTER.</span>
          </span>
        </Link>

        <nav className="rv3DesktopNav" aria-label="Main navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `rv3NavLink${isActive ? " rv3NavLinkActive" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="rv3NavActions">
          <Link
            to="/appointment"
            className="rv3NavAppointment"
          >
            <span>Book Appointment</span>
            <ArrowUpRight size={17} />
          </Link>

          <button
            type="button"
            className="rv3MenuToggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="rv3MobileNav"
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="rv3MobileNav"
            className="rv3MobileNav"
            aria-label="Mobile navigation"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navLinks.map((item) => (
              <motion.div key={item.path} variants={linkVariants}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rv3MobileNavLink${isActive ? " rv3MobileNavLinkActive" : ""}`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={17} />
                </NavLink>
              </motion.div>
            ))}

            <motion.div variants={linkVariants} className="rv3MobileCtaWrap">
              <Link
                to="/appointment"
                className="rv3NavAppointment rv3MobileAppointment"
                onClick={closeMenu}
              >
                <span>Book Appointment</span>
                <ArrowUpRight size={17} />
              </Link>
              <p className="rv3MobileNote">
                Your journey to better movement starts here.
              </p>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;