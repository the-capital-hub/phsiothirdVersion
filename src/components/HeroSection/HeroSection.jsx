
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChartNoAxesColumnIncreasing,
  Heart,
  UsersRound,
  Play,
  PersonStanding,
  Flower2,
  Dumbbell,
  Star,
} from "lucide-react";
import heroImage from "../../assets/heroimage.png";
import "./HeroSection.css";

const defaultBenefits = [
  {
    title: "Pain Relief",
    description: "Move freely with confidence",
    icon: PersonStanding,
  },
  {
    title: "Better Mobility",
    description: "Build strength and flexibility",
    icon: Flower2,
  },
  {
    title: "Active Lifestyle",
    description: "Return to the things you love",
    icon: Dumbbell,
  },
  {
    title: "Long Term Wellness",
    description: "Care for a healthier future",
    icon: Heart,
  },
];

const defaultFloatingCards = [
  { type: "mobility", value: "95%", label: "Improved Mobility" },
  { type: "patients", value: "500+", label: "Happy Patients" },
  { type: "care", value: "Personal", label: "Treatment Plans" },
];

function HeroSection({
  eyebrow = "PERSONALISED CARE  •  LASTING RESULTS",
  title = "Move",
  highlight = "Better.",
  secondLine = "Live",
  secondHighlight = "Stronger.",
  description = "Expert physiotherapy care to help you recover from pain, improve mobility and get back to the life you love.",
  image = heroImage,
  imageAlt = "Physiotherapist helping a patient during rehabilitation",
  primaryText = "Book Appointment",
  primaryLink = "/appointment",
  secondaryText = "Watch Our Story",
  secondaryLink = "/about",
  showSecondary = true,
  showStats = true,
  showFloatingCards = true,
  showBenefits = true,
  imageSide = "right",
  stats = [
    { value: "500+", label: "Happy Patients" },
    { value: "4.8", label: "Patient Satisfaction" },
  ],
  floatingCards = defaultFloatingCards,
  benefits = defaultBenefits,
}) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const getFloatingIcon = (type) => {
    if (type === "mobility") {
      return <ChartNoAxesColumnIncreasing size={25} />;
    }
    if (type === "patients") {
      return <Heart size={25} />;
    }
    return <UsersRound size={25} />;
  };

  return (
    <section
      className={`rv3Hero ${
        imageSide === "left" ? "rv3HeroImageLeft" : ""
      }`}
    >
      <div className="backgroundimage">

      
      {/* <div className="rv3HeroBackground" aria-hidden="true" /> */}

      <div className="rv3HeroContainer">
        <div className="rv3HeroContent">
          <motion.div
            className="rv3HeroEyebrow"
            variants={reveal}
            initial="hidden"
            animate="visible"
          >
            <span className="rv3HeroEyebrowDot" />
            {eyebrow}
          </motion.div>

          <motion.h1
            className="rv3HeroHeading"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
          >
            {title} <span>{highlight}</span>
            <br />
            {secondLine} <span>{secondHighlight}</span>
          </motion.h1>

          <motion.p
            className="rv3HeroDescription"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.14 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="rv3HeroActions"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            {primaryText && (
              <Link
                to={primaryLink}
                className="rv3HeroPrimaryButton"
              >
                <CalendarDays size={19} />
                <span>{primaryText}</span>
                <ArrowRight size={18} />
              </Link>
            )}

            {showSecondary && secondaryText && (
              <Link
                to={secondaryLink}
                className="rv3HeroSecondaryButton"
              >
                <span className="rv3HeroPlayOutline">
                  <Play size={12} fill="currentColor" />
                </span>
                {secondaryText}
              </Link>
            )}
          </motion.div>

          {showStats && (
            <motion.div
              className="rv3HeroStats"
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.27 }}
            >
              {stats.map((stat, index) => (
                <div
                  className={`rv3HeroStat ${
                    index === 0 ? "rv3HeroStatFirst" : ""
                  }`}
                  key={`${stat.value}-${stat.label}`}
                >
                  <span className="rv3HeroStatIcon">
                    {index === 0 ? (
                      <UsersRound size={22} />
                    ) : (
                      <Star size={22} />
                    )}
                  </span>

                  <span className="rv3HeroStatCopy">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          className="rv3HeroVisual"
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 18,
          }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div className="rv3HeroPhotoFrame">
            <img
              className="rv3HeroImage"
              src={image}
              alt={imageAlt}
              fetchPriority="high"
            />

            <div className="rv3HeroImageOverlay" />

            <div className="rv3HeroStoryNote">
              <span>Your Recovery</span>
              <span>Our Priority</span>
              <i />
            </div>
          </div>

          {showFloatingCards && (
            <div className="rv3HeroFloatingCards">
              {floatingCards.map((card, index) => (
                <motion.div
                  className="rv3HeroFloatingCard"
                  key={`${card.type}-${card.value}`}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 12,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.25 + index * 0.1,
                  }}
                >
                  <span className="rv3HeroFloatingIcon">
                    {getFloatingIcon(card.type)}
                  </span>
                  <span className="rv3HeroFloatingCopy">
                    <strong>{card.value}</strong>
                    <span>{card.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          )}

          <Link to={secondaryLink} className="rv3HeroSeeHow">
            <span className="rv3HeroSeeHowIcon">
              <Play size={17} fill="currentColor" />
            </span>
            <span>See How<br />It Works</span>
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>

      {showBenefits && (
        <div className="rv3HeroBenefits">
          <div className="rv3HeroBenefitsInner">
            {benefits.map((benefit) => {
              const BenefitIcon = benefit.icon;

              return (
                <div
                  className="rv3HeroBenefit"
                  key={benefit.title}
                >
                  <span className="rv3HeroBenefitIcon">
                    <BenefitIcon size={27} strokeWidth={1.8} />
                  </span>
                  <span className="rv3HeroBenefitCopy">
                    <strong>{benefit.title}</strong>
                    <span>{benefit.description}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      </div>
    </section>
  );
}

export default HeroSection;
