import React, { useState, useEffect } from "react";

const skills = [
  "React",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "TypeScript",
  "Python",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Microsoft Access",
  "Power BI",
  "Git",
  "Linux (Ubuntu)",
  "Jest (Basic)"
];

const highlights = [
  "React-driven interfaces",
  "Responsive web delivery",
  "Client-facing communication",
  "Accessible UX thinking"
];

const experience = [
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jan 2025 - Present",
    summary:
      "Design and develop custom responsive websites for different clients, managing projects from requirements and wireframes through deployment, performance tuning, and ongoing maintenance."
  },
  {
    role: "Jr. Computer Programmer",
    company: "Sun InfoTech, India",
    period: "2022 - 2023",
    summary:
      "Supported software development, debugging, testing, and technical documentation while collaborating with senior developers on production work."
  }
];

const education = [
  {
    title: "Professional Year",
    org: "Performance Education",
    period: "2025 - Present"
  },
  {
    title: "Master of Information Technology",
    org: "Griffith University",
    period: "2023 - 2025"
  },
  {
    title: "Bachelor of Computer Application",
    org: "CHARUSAT University, India",
    period: "2018 - 2021"
  }
];

function LogoMark() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tirth Patel logo"
    >
      <path
        d="M58 74H135C153 74 167 88 167 106C167 124 153 138 135 138H110"
        stroke="#0E4677"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M110 74H182C197 74 210 87 210 102C210 117 197 130 182 130H150C135 130 122 143 122 158V198"
        stroke="#0E4677"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M122 106V198"
        stroke="#0E4677"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M144 104V170"
        stroke="#AFC4D8"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4.8 7.4 12 12.6l7.2-5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.5 10.5V17M7.5 7.4a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM11.2 17v-3.6c0-1.1.9-2 2-2 1 0 1.8.8 1.8 2V17M11.2 13.2v-2.7M11.2 10.5H15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 3.8h6l4.2 4.2v11a1.9 1.9 0 0 1-1.9 1.9H8A1.9 1.9 0 0 1 6.1 19V5.7A1.9 1.9 0 0 1 8 3.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.8v4.5h4.2M9.2 12h5.8M9.2 15h5.8M9.2 9h2.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9.2 18.2c-3.3 1-3.3-1.5-4.6-1.8M13.8 20v-2.6c0-.9.1-1.5-.4-2 2.8-.3 5.7-1.4 5.7-6.1a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.4 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.5 4.5 0 0 0-.1 3.2 4.8 4.8 0 0 0-1.3 3.3c0 4.7 2.9 5.8 5.7 6.1-.4.5-.4 1-.4 2V20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactFormIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.4h16M7.2 3.9h9.6A1.8 1.8 0 0 1 18.6 5.7v12.6a1.8 1.8 0 0 1-1.8 1.8H7.2a1.8 1.8 0 0 1-1.8-1.8V5.7a1.8 1.8 0 0 1 1.8-1.8ZM8 10h8M8 13.6h8M8 17.2h5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function App() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitState, setSubmitState] = useState("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -10% 0px" }
    );

    const targets = document.querySelectorAll(".reveal-on-scroll");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollMotion = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const heroProgress = Math.min(scrollTop / 700, 1);
      const sectionProgress = Math.min(scrollTop / 1400, 1);

      document.documentElement.style.setProperty(
        "--hero-shift",
        `${heroProgress * 36}px`
      );
      document.documentElement.style.setProperty(
        "--page-drift",
        `${sectionProgress * 18}px`
      );
    };

    updateScrollMotion();
    window.addEventListener("scroll", updateScrollMotion, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollMotion);
  }, []);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value
    }));
  };

  const handlePreviewSubmit = async (event) => {
    event.preventDefault();
    setSubmitState("sending");

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("phone", formState.phone);
      formData.append("email", formState.email);
      formData.append("message", formState.message);
      formData.append("_subject", "New portfolio contact submission");
      formData.append("_template", "table");

      const response = await fetch("https://formsubmit.co/ajax/tirth10401@outlook.com", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitState("sent");
      setFormState({
        name: "",
        phone: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setSubmitState("error");
    }
  };

  return (
    <div className="app-shell">
      <header className="hero" id="home">
        <nav className="topbar">
          <a className="brand" href="#home" aria-label="Tirth Patel home">
            <LogoMark />
          </a>
          <div className="brand-copy">
            <span className="brand-tag">Portfolio</span>
            <strong>Tirth Patel</strong>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#project">Project</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-meta fade-up delay-1">
            <p className="kicker">Front-End Developer</p>
            <div className="meta-line"></div>
            <p className="meta-copy">
              Based in Gold Coast, building responsive websites with React,
              JavaScript, and a strong focus on usability and clean delivery.
            </p>
          </div>

          <div className="hero-main fade-up delay-2">
            <p className="hero-intro">Hello, I'm Tirth Patel</p>
            <h1>
              I build modern websites with clean design, clear UX, and practical
              front-end development.
            </h1>
            <p className="lead">
              Master of Information Technology graduate with experience in
              front-end development, freelance website delivery, stakeholder
              communication, and practical software solutions for real-world users.
            </p>

            <div className="hero-actions">
              <a className="primary-button subtle-button" href="#project">
                View Project
              </a>
            </div>

            <div className="hero-strip">
              {highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="hero-summary-grid">
              <div className="metric-card fade-up delay-3">
                <span>Focus</span>
                <strong>User-first interfaces with strong visual clarity</strong>
              </div>
              <div className="metric-card fade-up delay-4">
                <span>Background</span>
                <strong>Freelance web projects, software support, and collaboration</strong>
              </div>
              <div className="metric-card fade-up delay-5">
                <span>Based in</span>
                <strong>Gold Coast, Australia</strong>
              </div>
            </div>
          </div>

          <div className="hero-side-note fade-up delay-3">
            <p>Available for front-end and web development opportunities.</p>
            <div className="side-note-line"></div>
            <p>
              I enjoy building polished, mobile-friendly websites that feel easy
              to navigate and useful in real situations.
            </p>
          </div>
        </section>
      </header>

      <main className="content">
        <section className="section intro-card reveal-on-scroll reveal-soft" id="about">
          <div className="section-heading">
            <p className="kicker">About</p>
            <h2>Building websites that feel polished, simple, and easy to use.</h2>
          </div>
          <div className="about-layout">
            <div className="glass-card statement-card reveal-card">
              <p>
                My background combines front-end development, freelance website
                delivery, project leadership, and client communication. I enjoy
                turning technical requirements into interfaces that feel smooth,
                intentional, and approachable.
              </p>
              <p>
                I care about thoughtful details, accessible design, and building
                products that work well for real people, including users with
                limited technical experience.
              </p>
            </div>
            <div className="glass-card education-stack reveal-card">
              {education.map((item) => (
                <article key={item.title} className="timeline-item">
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal-on-scroll reveal-soft" id="project">
          <div className="section-heading">
            <p className="kicker">Featured Project</p>
            <h2>Real-world project work shaped by actual stakeholder needs.</h2>
          </div>
          <div className="project-layout">
            <article className="feature-card reveal-card">
              <p className="project-label">Hypertonicity Clinic Visualization Tool</p>
              <h3>Interactive dashboard for clinicians tracking long-term patient outcomes.</h3>
              <p>
                Created with Griffith University, HabITec, and Princess Alexandra
                Hospital. The goal was to help clinicians review patient data since
                2009, understand treatment effectiveness, and use a system that felt
                approachable even for non-technical healthcare users.
              </p>
              <div className="project-badges">
                <span>Project Manager for a team of 5</span>
                <span>Requirements gathered from clinicians</span>
                <span>Prototype delivered with positive client feedback</span>
              </div>
            </article>

            <aside className="stack-card reveal-card">
              <h3>Role & Stack</h3>
              <p className="stack-copy">
                I worked as project manager in a team of 5, gathering
                requirements from clinicians and helping shape an interface that
                non-technical users could trust and navigate easily through
                iterative feedback and practical dashboard design.
              </p>
              <div className="chips">
                <span>Python</span>
                <span>Power BI</span>
                <span>Matplotlib</span>
                <span>Plotly</span>
                <span>Microsoft Access</span>
                <span>Git</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section reveal-on-scroll reveal-soft" id="experience">
          <div className="section-heading">
            <p className="kicker">Experience</p>
            <h2>Experience across software work, team leadership, and delivery.</h2>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article key={item.role} className="glass-card experience-card reveal-card">
                <div className="card-topline">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span>{item.period}</span>
                </div>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal-on-scroll reveal-soft" id="skills">
          <div className="section-heading">
            <p className="kicker">Skills</p>
            <h2>Tools I use to build, test, and improve digital products.</h2>
          </div>
          <div className="skills-cloud skills-animated">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section contact-section reveal-on-scroll reveal-soft" id="contact">
          <div className="contact-panel reveal-card">
            <div className="contact-copy-block">
              <p className="kicker">Contact</p>
              <h2>Get in Touch</h2>
              <p className="contact-copy">
                I'd like to hear from you. If you have any inquiries or just want
                to say hi, please use the contact form.
              </p>
              <div className="contact-socials">
                <a
                  className="contact-social"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="contact-social"
                  href="https://github.com/tirthpatel-au"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  className="contact-social"
                  href="/Tirth-Patel-Resume.docx"
                  download
                  aria-label="Download resume"
                >
                  <ResumeIcon />
                </a>
              </div>
            </div>
            <div className="contact-layout">
              <form className="contact-form" onSubmit={handlePreviewSubmit}>
                <div className="form-grid">
                  <label className="field">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleFieldChange}
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label className="field">
                    <span>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleFieldChange}
                      placeholder="Your phone number"
                    />
                  </label>
                  <label className="field field-full">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleFieldChange}
                      placeholder="your@email.com"
                      required
                    />
                  </label>
                  <label className="field field-message field-full">
                    <span>Comment</span>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleFieldChange}
                      placeholder="Tell me about your project or opportunity"
                      rows="5"
                      required
                    />
                  </label>
                </div>
                <div className="form-actions">
                  <button className="primary-button subtle-button subtle-button-active" type="submit">
                    Send
                  </button>
                  <p className="form-note">
                    {submitState === "sending"
                      ? "Sending your message..."
                      : submitState === "sent"
                        ? "Message sent successfully."
                        : submitState === "error"
                          ? "Something went wrong. Please try again."
                          : "Fill in your details and send your message directly from the form."}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
