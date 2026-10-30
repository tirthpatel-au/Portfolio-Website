import React, { useEffect } from "react";

const skillGroups = [
  [
    { name: "HTML", image: "/skills/html.png" },
    { name: "CSS", image: "/skills/css.png" },
    { name: "JavaScript", image: "/skills/js.png" },
    { name: "React", image: "/skills/react.png" },
    { name: "TypeScript", image: "/skills/ts.png" }
  ],
  [
    { name: "Node.js", image: "/skills/node.png" },
    { name: "MongoDB", image: "/skills/mongodb.png" },
    { name: "MySQL", image: "/skills/mysql.png" },
    { name: "Firebase", image: "/skills/firebase.png" },
    { name: "Figma", image: "/skills/figma.png" }
  ],
  [
    { name: "Tailwind CSS", image: "/skills/tailwind.png" },
    { name: "Material UI", image: "/skills/mui.png" },
    { name: "Redux", image: "/skills/redux.png" },
    { name: "GraphQL", image: "/skills/graphql.png" },
    { name: "Linux", image: "/skills/docker.png" }
  ]
];

const projectList = [
  {
    title: "Custom Hand Gesture Recognition",
    description:
      "Interactive browser-based gesture recognition with live hand tracking and custom motion input.",
    codeUrl: "https://github.com/tirthpatel-au/custom-hand-gesture-recognition",
    demoUrl: "https://tirthpatel-au.github.io/custom-hand-gesture-recognition/",
    accent: "from-cyan-400 to-blue-500"
  },
  {
    title: "ZoraChat App",
    description:
      "Chat-focused front-end app with a polished messaging interface and a live interactive demo.",
    codeUrl: "https://github.com/tirthpatel-au/zorachat-app",
    demoUrl: "https://tirthpatel-au.github.io/zorachat-app/",
    accent: "from-violet-400 to-fuchsia-500"
  },
  {
    title: "OpenAir Weather",
    description:
      "Clean weather dashboard that presents forecasts in a simple and approachable interface.",
    codeUrl: "https://github.com/tirthpatel-au/openair-weather",
    demoUrl: "https://tirthpatel-au.github.io/openair-weather/",
    accent: "from-sky-400 to-indigo-500"
  },
  {
    title: "Hypertonicity Clinic Visualization Tool",
    description:
      "Industry-linked data visualization project built to support clinicians with long-term patient outcome analysis.",
    codeUrl: "https://github.com/tirthpatel-au/HypertonicityClinicVisualizationTool",
    demoUrl: "",
    accent: "from-purple-400 to-cyan-500"
  },
  {
    title: "Password Strength Checker",
    description:
      "Password feedback tool that gives instant strength insights through a clean web interface.",
    codeUrl: "https://github.com/tirthpatel-au/password-strength-checker",
    demoUrl: "https://tirthpatel-au.github.io/password-strength-checker/",
    accent: "from-pink-400 to-violet-500"
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website showcasing projects, experience, and front-end design work.",
    codeUrl: "https://github.com/tirthpatel-au/Portfolio-Website",
    demoUrl: "https://tirthpatel.au",
    accent: "from-cyan-400 to-purple-500"
  }
];

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

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM18.5 16l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2ZM5 15l1 2.8 2.8 1-2.8 1L5 22l-1-2.2-2.8-1 2.8-1L5 15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M9.5 7H17v7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    const targets = document.querySelectorAll(".reveal-on-scroll");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-site">
      <div className="stars-layer" />
      <div className="falling-stars-layer" />
      <div className="falling-stars-layer layer-two" />

      <header className="space-navbar">
        <a className="brand-lockup" href="#about-me">
          <img src="/tp-logo.svg" alt="Tirth Patel logo" className="brand-logo" />
          <div className="brand-copy">
            <strong>Tirth Patel</strong>
          </div>
        </a>

        <nav className="space-nav-links">
          <a href="#about-me">About me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="https://github.com/tirthpatel-au/Portfolio-Website" target="_blank" rel="noreferrer">
            Source Code
          </a>
        </nav>

        <div className="space-socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/tirthpatel-au" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="/Tirth-Patel-Resume.docx" download aria-label="Resume">
            <ResumeIcon />
          </a>
        </div>

        <button className="space-menu-button" type="button" aria-label="Menu">
          <MenuIcon />
        </button>
      </header>

      <main className="space-main">
        <section className="hero-section" id="about-me">

          <div className="hero-video-wrap">
            <video autoPlay muted loop playsInline className="hero-video">
              <source src="/videos/blackhole.webm" type="video/webm" />
            </video>
          </div>

          <div className="hero-content-grid">
            <div className="hero-copy">
              <div className="welcome-pill">
                <SparkleIcon />
                <span>Front-End Developer Portfolio</span>
              </div>

              <h1>
                Building{" "}
                <span className="gradient-text">the best</span>{" "}
                digital project experience.
              </h1>

              <p>
                I&apos;m Tirth Patel, a front-end developer with experience in
                responsive websites, UI-focused web projects, dashboards, and practical
                software delivery. Explore my projects, skills, and development work.
              </p>

              <a className="hero-button" href="#projects">
                View my work
              </a>
            </div>

            <div className="hero-visual">
              <img src="/hero-bg.svg" alt="Technology illustration" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <h2>About me</h2>
            <p>
              I build modern front-end experiences with a strong focus on clarity,
              responsiveness, and interfaces that feel polished and easy to use.
            </p>
          </div>

          <div className="about-grid">
            <article className="about-card">
              <h3>What I do</h3>
              <p>
                My work combines freelance website delivery, front-end development,
                project communication, and practical implementation with React,
                JavaScript, and modern UI tooling.
              </p>
            </article>

            <article className="about-card">
              <h3>Experience</h3>
              <p>
                Freelance Web Developer, Self-Employed
                <br />
                Jan 2025 - Present
              </p>
              <p>
                Jr. Computer Programmer, Sun InfoTech, India
                <br />
                2022 - 2023
              </p>
            </article>

            <article className="about-card">
              <h3>Education</h3>
              <p>
                Master of Information Technology
                <br />
                Griffith University
                <br />
                2023 - 2025
              </p>
              <p>
                Professional Year
                <br />
                Performance Education
                <br />
                2025 - Present
              </p>
              <p>
                Bachelor of Computer Application
                <br />
                CHARUSAT University, India
                <br />
                2018 - 2021
              </p>
            </article>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="skills-video-wrap">
            <video autoPlay muted loop playsInline className="skills-video">
              <source src="/videos/skills-bg.webm" type="video/webm" />
            </video>
          </div>

          <div className="skills-inner">
            <div className="section-heading center reveal-on-scroll">
              <h2>Skills</h2>
              <p>
                Technologies and tools I use to design, build, test, and deliver web
                experiences.
              </p>
            </div>

            {skillGroups.map((group, index) => (
              <div
                key={`skill-group-${index}`}
                className="skill-row reveal-on-scroll"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {group.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <img src={skill.image} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="focus-section">
          <div className="focus-video-wrap">
            <video autoPlay muted loop playsInline className="focus-video">
              <source src="/videos/encryption-bg.webm" type="video/webm" />
            </video>
          </div>

          <div className="focus-content">
            <h2>
              Practical delivery{" "}
              <span className="gradient-text">&</span>{" "}
              strong communication.
            </h2>

            <div className="focus-center-mark">
              <div className="focus-logo-shell">
                <img src="/tp-logo.svg" alt="Tirth Patel logo" />
              </div>
              <div className="welcome-pill compact-pill">
                <span>Frontend • UX • Delivery</span>
              </div>
            </div>

            <p className="focus-quote">
              Built for real users, practical outcomes, and interfaces that feel
              smooth from first look to final interaction.
            </p>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2>My Projects</h2>

          <div className="projects-grid">
            {projectList.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card-visual">
                  <div className="project-orbit-grid" />
                  <div className="project-symbol">{project.title}</div>
                </div>

                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-actions">
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      <GithubIcon />
                      <span>Code</span>
                    </a>
                    {project.demoUrl ? (
                      <a className="demo-link" href={project.demoUrl} target="_blank" rel="noreferrer">
                        <ArrowUpRightIcon />
                        <span>Demo</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-columns">
          <div>
            <h3>Connect</h3>
            <a href="https://github.com/tirthpatel-au" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
          <div>
            <h3>Portfolio</h3>
            <a href="#about-me">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
        </div>

        <div className="footer-bottom">&copy; Tirth Patel {new Date().getFullYear()}. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
