
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
  CheckCircle2,
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
    title: "Lasting Wellness",
    description: "Care for a healthier future",
    icon: Heart,
  },
];

const defaultFloatingCards = [
  { type: "mobility", value: "95%", label: "Improved Mobility" },
  { type: "patients", value: "500+", label: "Happy Patients" },
  { type: "care", value: "Personal", label: "Treatment Plans" },
];

const defaultStats = [
  { value: "500+", label: "Happy Patients" },
  { value: "4.8", label: "Patient Satisfaction" },
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
  stats = defaultStats,
  floatingCards = defaultFloatingCards,
  benefits = defaultBenefits,
}) {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  const getFloatingIcon = (type) => {
    if (type === "mobility") {
      return <ChartNoAxesColumnIncreasing size={23} />;
    }

    if (type === "patients") {
      return <Heart size={23} />;
    }

    return <UsersRound size={23} />;
  };

  return (
    <section
      className={`rv3Hero ${
        imageSide === "left" ? "rv3HeroImageLeft" : ""
      }`}
    >
      <div className="rv3HeroBackground" aria-hidden="true" />

      <div className="rv3HeroContainer">
        <div className="rv3HeroContent">
          <motion.div
            className="rv3HeroEyebrow"
            variants={reveal}
            initial="hidden"
            animate="visible"
          >
            <span className="rv3HeroEyebrowDot" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h1
            className="rv3HeroHeading"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduceMotion ? 0 : 0.08 }}
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
            transition={{ delay: reduceMotion ? 0 : 0.14 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="rv3HeroActions"
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ delay: reduceMotion ? 0 : 0.2 }}
          >
            {primaryText && (
              <Link
                to={primaryLink}
                className="rv3HeroPrimaryButton"
              >
                <CalendarDays size={18} />
                <span>{primaryText}</span>
                <ArrowRight size={17} />
              </Link>
            )}

            {showSecondary && secondaryText && (
              <Link
                to={secondaryLink}
                className="rv3HeroSecondaryButton"
              >
                <span className="rv3HeroPlayOutline">
                  <Play size={11} fill="currentColor" />
                </span>
                <span>{secondaryText}</span>
              </Link>
            )}
          </motion.div>

          {showStats && (
            <motion.div
              className="rv3HeroStats"
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{ delay: reduceMotion ? 0 : 0.27 }}
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
                      <UsersRound size={20} />
                    ) : (
                      <Star size={20} />
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
            x: reduceMotion ? 0 : 22,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.1,
          }}
        >
          <div className="rv3HeroPhotoFrame">
            <img
              className="rv3HeroImage"
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              decoding="async"
            />

            <div className="rv3HeroImageOverlay" />

            <div className="rv3HeroPhotoLabel">
              <span className="rv3HeroPhotoLabelIcon">
                <CheckCircle2 size={17} />
              </span>
              <span>
                <strong>Care that moves you</strong>
                <small>Personalised physiotherapy</small>
              </span>
            </div>
          </div>

          {showFloatingCards && (
            <div className="rv3HeroFloatingCards">
              {floatingCards.map((card, index) => (
                <motion.div
                  className={`rv3HeroFloatingCard rv3HeroFloatingCard${index + 1}`}
                  key={`${card.type}-${card.value}`}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.45,
                    delay: reduceMotion ? 0 : 0.25 + index * 0.1,
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

          {secondaryLink && (
            <Link
              to={secondaryLink}
              className="rv3HeroSeeHow"
              aria-label="See how our physiotherapy works"
            >
              <span className="rv3HeroSeeHowIcon">
                <Play size={15} fill="currentColor" />
              </span>
              <span className="rv3HeroSeeHowText">
                <strong>Discover our approach</strong>
                <small>See how it works</small>
              </span>
              <ArrowRight size={17} />
            </Link>
          )}
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
                    <BenefitIcon size={25} strokeWidth={1.7} />
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
    </section>
  );
}

export default HeroSection;
