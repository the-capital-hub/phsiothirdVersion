
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  HeartPulse,
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const footerLinks = {
  explore: [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Our Services", to: "/services" },
    { label: "Our Team", to: "/team" },
    { label: "Health Journal", to: "/blog" },
  ],
  patients: [
    { label: "Book Appointment", to: "/appointment" },
    { label: "Patient Resources", to: "/patient-resources" },
    { label: "Frequently Asked Questions", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
  ],
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
];

function FooterLinkGroup({ title, links }) {
  return (
    <div className="rv3FooterColumn">
      <h3 className="rv3FooterHeading">{title}</h3>

      <ul className="rv3FooterLinks">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to}>
              <span>{link.label}</span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const reduceMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="rv3Footer">
      <div className="rv3FooterMain">
        <div className="rv3FooterContainer">
          <motion.div
            className="rv3FooterBrand"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <Link
              to="/"
              className="rv3FooterLogo"
              aria-label="Rehabics home"
            >
              <span className="rv3FooterLogoIcon">
                <HeartPulse size={27} strokeWidth={1.7} />
              </span>

              <span className="rv3FooterLogoName">
                rehabics
              </span>
            </Link>

            <p className="rv3FooterTagline">
              PHYSIOTHERAPY AND WELLNESS
            </p>

            <p className="rv3FooterDescription">
              Helping you move with confidence, recover with
              care and rediscover the freedom of an active life.
              Every recovery journey deserves a personal approach.
            </p>

            <div className="rv3FooterSignature">
              <span />
              <p>Move better. Live stronger.</p>
            </div>

            <div
              className="rv3FooterSocials"
              aria-label="Social media"
            >
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rv3FooterSocial"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              delay: reduceMotion ? 0 : 0.06,
            }}
          >
            <FooterLinkGroup
              title="Explore"
              links={footerLinks.explore}
            />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              delay: reduceMotion ? 0 : 0.12,
            }}
          >
            <FooterLinkGroup
              title="Patient Care"
              links={footerLinks.patients}
            />
          </motion.div>

          <motion.div
            className="rv3FooterContact"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              delay: reduceMotion ? 0 : 0.18,
            }}
          >
            <h3 className="rv3FooterHeading">
              Get In Touch
            </h3>

            <p className="rv3FooterContactIntro">
              Have a question? We are happy to help.
            </p>

            <div className="rv3FooterContactList">
              <a
                href="mailto:hello@rehabics.com"
                className="rv3FooterContactItem"
              >
                <span className="rv3FooterContactIcon">
                  <Mail size={17} />
                </span>

                <span className="rv3FooterContactCopy">
                  <small>Email Us</small>
                  <span>hello@rehabics.com</span>
                </span>

                <ArrowRight
                  className="rv3FooterContactArrow"
                  size={15}
                />
              </a>

              <a
                href="tel:+910000000000"
                className="rv3FooterContactItem"
              >
                <span className="rv3FooterContactIcon">
                  <Phone size={17} />
                </span>

                <span className="rv3FooterContactCopy">
                  <small>Call Us</small>
                  <span>+91 00000 00000</span>
                </span>

                <ArrowRight
                  className="rv3FooterContactArrow"
                  size={15}
                />
              </a>

              <Link
                to="/contact"
                className="rv3FooterContactItem"
              >
                <span className="rv3FooterContactIcon">
                  <MapPin size={17} />
                </span>

                <span className="rv3FooterContactCopy">
                  <small>Find Us</small>
                  <span>View clinic information</span>
                </span>

                <ArrowRight
                  className="rv3FooterContactArrow"
                  size={15}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="rv3FooterBottom">
        <div className="rv3FooterBottomInner">
          <p className="rv3FooterCopyright">
            © {currentYear} Rehabics. All rights reserved.
          </p>

          <div className="rv3FooterValues">
            <span>Care</span>
            <i />
            <span>Movement</span>
            <i />
            <span>Wellness</span>
          </div>

          <div className="rv3FooterLegal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
