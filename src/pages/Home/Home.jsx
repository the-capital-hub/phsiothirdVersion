
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  ClipboardCheck,
  CalendarCheck,
  Dumbbell,
  HandHeart,
  Plus,
  Minus,
  Stethoscope,
  Footprints,
  Sparkles,
  MoveUpRight,
  Clock3,
  CircleCheck,
} from "lucide-react";

import HeroSection from "../../components/HeroSection/HeroSection";
import CTASection from "../../components/CTASection/CTASection";
import "./Home.css";

const services = [
  {
    number: "01",
    title: "Pain Management",
    description:
      "Personalised care to help you manage discomfort and move with greater confidence.",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    link: "/services",
  },
  {
    number: "02",
    title: "Sports Rehabilitation",
    description:
      "Build strength, improve movement and work towards returning to the activities you love.",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    link: "/services",
  },
  {
    number: "03",
    title: "Mobility & Movement",
    description:
      "Improve flexibility, balance and everyday movement with guided physiotherapy.",
    icon: Footprints,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85",
    link: "/services",
  },
  {
    number: "04",
    title: "Personalised Physiotherapy",
    description:
      "A care plan shaped around your goals, your routine and your individual needs.",
    icon: HandHeart,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
    link: "/services",
  },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Care built around you",
    description:
      "Your goals, movement needs and routine guide your care plan.",
  },
  {
    icon: ShieldCheck,
    title: "A thoughtful approach",
    description:
      "Understand your movement and progress with guided professional support.",
  },
  {
    icon: Activity,
    title: "Progress with purpose",
    description:
      "Work towards meaningful improvements through consistent care.",
  },
];

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Start a conversation",
    description:
      "Tell us what you are experiencing and what you want to achieve.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Understand your movement",
    description:
      "Discuss your needs and explore an approach that suits your goals.",
  },
  {
    number: "03",
    icon: PersonStanding,
    title: "Build your routine",
    description:
      "Follow guided exercises and care recommendations at your pace.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Keep moving forward",
    description:
      "Review your progress and keep working towards everyday confidence.",
  },
];

const faqs = [
  {
    question: "What does a physiotherapist help with?",
    answer:
      "Physiotherapy can support movement, flexibility, strength and recovery. The right approach depends on your symptoms, goals and professional assessment.",
  },
  {
    question: "Is physiotherapy suitable for beginners?",
    answer:
      "Yes. Your starting point matters. A suitable care plan can be adapted to your comfort, current ability and movement goals.",
  },
  {
    question: "How do I get started with Rehabics?",
    answer:
      "Use the appointment link to contact the team and discuss your needs. You can ask questions before deciding on the next step.",
  },
  {
    question: "Will my care plan be personalised?",
    answer:
      "Physiotherapy plans can be adapted to your individual needs, goals and progress following an appropriate assessment.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function SectionHeading({ eyebrow, title, highlight, description, centered = false }) {
  return (
    <motion.div
      className={`rv3Heading ${centered ? "rv3HeadingCentered" : ""}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="rv3Eyebrow">
        <span className="rv3EyebrowDot" />
        {eyebrow}
      </span>
      <h2>
        {title} <span>{highlight}</span>
      </h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}

function Home() {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState(0);

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.12 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  return (
    <main className="rv3Home">
      <HeroSection
        eyebrow="PHYSIOTHERAPY WITH PURPOSE"
        title="Feel better."
        highlight="Move better."
        secondLine="Live more."
        secondHighlight=""
        description="Your movement matters. Discover personalised physiotherapy care designed to help you build confidence, improve mobility and get back to the moments that matter."
        primaryText="Book an Appointment"
        primaryLink="/appointment"
        secondaryText="Explore Services"
        secondaryLink="/services"
        showSecondary={true}
        showStats={false}
        showFloatingCards={true}
        showBenefits={true}
        imageSide="right"
      />

      
<section className="rv3TrustStrip">
  <div className="rv3TrustInner">
    <div className="rv3TrustIntro">
      <span className="rv3TrustMark">
        <HeartPulse size={23} strokeWidth={1.8} />
      </span>

      <div className="rv3TrustIntroText">
        <span className="rv3TrustEyebrow">THE REHABICS DIFFERENCE</span>
        <strong>Movement matters.</strong>
        <span>Care that starts with you</span>
      </div>
    </div>

    <div className="rv3TrustDivider" />

    <div className="rv3TrustItem">
      <span className="rv3TrustItemIcon">
        <ShieldCheck size={21} strokeWidth={1.8} />
      </span>
      <div>
        <strong>Personalised care</strong>
        <span>Built around your needs</span>
      </div>
    </div>

    <div className="rv3TrustItem">
      <span className="rv3TrustItemIcon">
        <Activity size={21} strokeWidth={1.8} />
      </span>
      <div>
        <strong>Movement focused</strong>
        <span>Progress at your pace</span>
      </div>
    </div>

    <div className="rv3TrustItem">
      <span className="rv3TrustItemIcon">
        <HandHeart size={21} strokeWidth={1.8} />
      </span>
      <div>
        <strong>Supportive approach</strong>
        <span>Your goals come first</span>
      </div>
    </div>
  </div>
</section>


      <section className="rv3Services rv3Section">
        <div className="rv3Container">
          <SectionHeading
            eyebrow="HOW WE CAN HELP"
            title="Care for the way"
            highlight="you move."
            description="Explore physiotherapy support designed around movement, strength and the activities that matter to you."
          />

          <div className="rv3ServicesGrid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  className="rv3ServiceCard"
                  {...reveal}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  whileHover={reduceMotion ? undefined : { y: -7 }}
                  style={{ "--service-image": `url("${service.image}")` }}
                >
                  <div className="rv3ServiceImage" />
                  <div className="rv3ServiceOverlay" />
                  <span className="rv3ServiceNumber">{service.number}</span>
                  <span className="rv3ServiceIcon">
                    <Icon size={25} strokeWidth={1.7} />
                  </span>

                  <div className="rv3ServiceContent">
                    <span className="rv3ServiceLabel">PHYSIOTHERAPY</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to={service.link} className="rv3ServiceLink">
                      Explore service <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div className="rv3ServicesFooter" {...reveal}>
            <span>Not sure where to begin?</span>
            <Link to="/appointment">
              Talk to our team <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="rv3Why rv3Section">
        <div className="rv3Container rv3WhyGrid">
          <motion.div className="rv3WhyVisual" {...reveal}>
            <div className="rv3WhyPhoto">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85"
                alt="Physiotherapy professional supporting a patient"
                loading="lazy"
              />
            </div>
            <div className="rv3WhyPhotoTint" />
            <div className="rv3WhyOrb rv3WhyOrbOne" />
            <div className="rv3WhyOrb rv3WhyOrbTwo" />

            <div className="rv3WhyImageNote">
              <span className="rv3WhyNoteIcon">
                <HeartPulse size={23} />
              </span>
              <div>
                <strong>Your goals come first</strong>
                <span>Care shaped around your needs</span>
              </div>
            </div>

            <div className="rv3WhyVerticalText">MOVE WITH CONFIDENCE</div>
          </motion.div>

          <div className="rv3WhyContent">
            <SectionHeading
              eyebrow="THE REHABICS APPROACH"
              title="More than movement."
              highlight="A better way forward."
              description="Every person has a different story. Your physiotherapy journey should reflect your needs, your priorities and the life you want to get back to."
            />

            <div className="rv3BenefitList">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    className="rv3BenefitItem"
                    key={benefit.title}
                    {...reveal}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <span className="rv3BenefitIcon">
                      <Icon size={22} strokeWidth={1.8} />
                    </span>
                    <div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                    <CircleCheck className="rv3BenefitCheck" size={19} />
                  </motion.div>
                );
              })}
            </div>

            <Link to="/about" className="rv3TextLink">
              Get to know Rehabics <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="rv3Journey rv3Section">
        <div className="rv3JourneyBackdrop" />
        <div className="rv3Container">
          <SectionHeading
            eyebrow="YOUR JOURNEY"
            title="Small steps."
            highlight="Meaningful progress."
            description="A clear, supportive process helps you understand your options and take the next step with confidence."
            centered
          />

          <div className="rv3JourneyTrack">
            <div className="rv3JourneyLine" />
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="rv3JourneyStep"
                  key={step.number}
                  {...reveal}
                  transition={{ delay: index * 0.1, duration: 0.55 }}
                >
                  <div className="rv3JourneyIcon">
                    <Icon size={25} strokeWidth={1.65} />
                    <span>{step.number}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div className="rv3JourneyNote" {...reveal}>
            <span className="rv3JourneyNoteIcon">
              <Clock3 size={19} />
            </span>
            <p>
              Your pace matters. Your care should be guided by your individual
              needs and progress.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="rv3Story rv3Section">
        <div className="rv3Container rv3StoryGrid">
          <motion.div className="rv3StoryContent" {...reveal}>
            <span className="rv3Eyebrow">
              <span className="rv3EyebrowDot" />
              YOUR LIFE, YOUR MOVEMENT
            </span>

            <h2>
              Get back to the
              <br />
              <span>moments that matter.</span>
            </h2>

            <p>
              Walking with ease. Returning to your favourite activity. Feeling
              more confident in everyday life. Your goals do not have to look
              like anyone else’s.
            </p>

            <div className="rv3StoryQuote">
              <span className="rv3QuoteMark">“</span>
              <div>
                <strong>Progress is personal.</strong>
                <p>
                  Focus on meaningful steps, supportive guidance and a plan
                  that works for your life.
                </p>
              </div>
            </div>

            <Link to="/appointment" className="rv3PrimaryButton">
              Discuss your goals <ArrowRight size={18} />
            </Link>
          </motion.div>

          <motion.div className="rv3StoryVisual" {...reveal}>
            <div className="rv3StoryMainImage">
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=85"
                alt="Person practising a gentle mobility exercise"
                loading="lazy"
              />
            </div>
            <div className="rv3StoryImageWash" />
            <div className="rv3StoryDecorIcon">
              <PersonStanding size={76} strokeWidth={1.1} />
            </div>
            <div className="rv3StorySmallImage">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=500&q=85"
                alt="A calm movement and stretching practice"
                loading="lazy"
              />
            </div>
            <div className="rv3StoryBadge">
              <Sparkles size={18} />
              <span>One step at a time</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="rv3Faq rv3Section">
        <div className="rv3FaqPattern" />
        <div className="rv3Container rv3FaqGrid">
          <motion.div className="rv3FaqIntro" {...reveal}>
            <span className="rv3Eyebrow">
              <span className="rv3EyebrowDot" />
              GOOD TO KNOW
            </span>
            <h2>
              Questions are a
              <br />
              <span>good place to start.</span>
            </h2>
            <p>
              Explore a few common questions about physiotherapy and taking
              your first step with Rehabics.
            </p>
            <div className="rv3FaqGraphic">
              <div className="rv3FaqGraphicCircle">
                <CircleHelpIcon />
              </div>
              <span className="rv3FaqGraphicDot rv3FaqDotOne" />
              <span className="rv3FaqGraphicDot rv3FaqDotTwo" />
              <span className="rv3FaqGraphicDot rv3FaqDotThree" />
              <div className="rv3FaqGraphicText">We are here to help</div>
            </div>
          </motion.div>

          <motion.div className="rv3FaqList" {...reveal}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  className={`rv3FaqItem ${isOpen ? "isOpen" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="rv3FaqQuestion"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="rv3FaqNumber">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                    <span className="rv3FaqToggle">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div className="rv3FaqAnswerWrap">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="rv3FinalCTA">
        <div className="rv3Container">
          <CTASection
            eyebrow="YOUR NEXT CHAPTER STARTS HERE"
            title="Every step forward"
            highlight="is a step towards you."
            description="You deserve to move with confidence. Talk to our team about your movement goals and explore the care that may be right for you."
            primaryText="Start Your Recovery"
            primaryLink="/appointment"
            secondaryText="Explore Our Services"
            secondaryLink="/services"
            showSecondary={true}
            showVisual={true}
            showFloatingCards={true}
            showNote={true}
            note="Personalised care. A stronger you."
            floatingTop={{
              title: "Move with ease",
              subtitle: "One step at a time",
            }}
            floatingBottom={{
              title: "Your recovery",
              subtitle: "Built around you",
            }}
          />
        </div>
      </section>
    </main>
  );
}

function CircleHelpIcon() {
  return (
    <span className="rv3QuestionMark" aria-hidden="true">
      ?
    </span>
  );
}

export default Home;
