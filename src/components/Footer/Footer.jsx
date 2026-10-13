import { Link } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import "./Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Our Services", path: "/services" },
  { label: "Our Team", path: "/team" },
  { label: "Resources", path: "/resources" },
  { label: "Latest Articles", path: "/blog" },
];

const supportLinks = [
  { label: "Book Appointment", path: "/appointment" },
  { label: "Contact Us", path: "/contact" },
  { label: "Recovery Programs", path: "/services" },
  { label: "Meet Our Experts", path: "/team" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rv3Footer">
      <div className="rv3FooterMain rv3Container">
        <div className="rv3FooterBrand">
          <Link to="/" className="rv3FooterLogo" aria-label="Rehabics home">
            <span className="rv3FooterLogoIcon">
              <Activity size={25} strokeWidth={2.2} />
            </span>
            <span>rehabics</span>
          </Link>

          <p className="rv3FooterDescription">
            Helping you move with confidence through personalised
            physiotherapy, expert guidance, and compassionate care.
          </p>

          <div className="rv3FooterSocials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="rv3FooterColumn">
          <h3>Explore</h3>
          {quickLinks.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="rv3FooterColumn">
          <h3>Patient Support</h3>
          {supportLinks.map((item) => (
            <Link key={item.label} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="rv3FooterColumn rv3FooterContact">
          <h3>Get In Touch</h3>

          <a href="mailto:hello@rehabics.com">
            <Mail size={17} />
            <span>hello@rehabics.com</span>
          </a>

          <a href="tel:+910000000000">
            <Phone size={17} />
            <span>Contact our care team</span>
          </a>

          <div className="rv3FooterContactItem">
            <MapPin size={17} />
            <span>Personalised care, wherever you are</span>
          </div>
        </div>
      </div>

      <div className="rv3FooterCTA rv3Container">
        <div className="rv3FooterCTAContent">
          <span className="rv3FooterEyebrow">
            YOUR RECOVERY STARTS HERE
          </span>

          <h2>Ready to move better?</h2>

          <p>
            Take the first step towards a stronger, healthier you.
          </p>
        </div>

        <Link to="/appointment" className="rv3FooterCTAButton">
          <span>Book Your Visit</span>
          <ArrowUpRight size={18} />
        </Link>
      </div>

      <div className="rv3FooterBottom">
        <div className="rv3Container rv3FooterBottomInner">
          <p>© {currentYear} Rehabics. All rights reserved.</p>

          <div className="rv3FooterLegal">
            <Link to="/contact">Privacy and Support</Link>
            <Link to="/contact">Terms and Conditions</Link>
          </div>

          <p className="rv3FooterMade">
            Care that keeps you moving.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;