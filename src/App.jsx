import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const projectsRef = useRef(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.getAll().forEach((trigger) =>
    trigger.kill()
  );

  // HERO

  const heroTl = gsap.timeline();

  heroTl
    .from(".hero-left", {
      x: -150,
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    })
    .from(
      ".hero-center h1",
      {
        y: 150,
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        ease: "expo.out",
      },
      "-=0.7"
    )
    .from(
      ".hero-right",
      {
        x: 150,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      },
      "-=1"
    );

  // ABOUT

  gsap.from(".about-text", {
    y: 200,
    opacity: 0,
    scale: 0.95,
    duration: 1.5,
    ease: "power4.out",

    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      once: true,
    },
  });

  // PROJECTS

  gsap.utils.toArray(".project").forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      y: 150,
      scale: 0.95,
      duration: 1.4,
      ease: "power3.out",

      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // SKILLS

  gsap.utils.toArray(".skill-card").forEach((card, index) => {
  gsap.fromTo(
    card,
    {
      opacity: 0,
      y: 150,
      scale: 0.9,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power4.out",
      delay: index * 0.05,

      scrollTrigger: {
        trigger: card,
        start: "top 90%",
      },
    }
  );
});

  // EDUCATION

  gsap.utils.toArray(".education .timeline-item").forEach(
    (item) => {
      gsap.from(item, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions:
            "play none none reverse",
        },
      });
    }
  );

  // EXPERIENCE

  gsap.utils.toArray(".experience .timeline-item").forEach(
    (item) => {
      gsap.from(item, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions:
            "play none none reverse",
        },
      });
    }
  );

  // CONTACT

  gsap.from(".contact-title", {
    opacity: 0,
    y: 100,
    duration: 1.2,

    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
    },
  });

  gsap.from(".contact-email", {
    opacity: 0,
    y: 50,
    duration: 1,

    scrollTrigger: {
      trigger: ".contact",
      start: "top 75%",
    },
  });

  gsap.from(".resume-btn", {
    opacity: 0,
    y: 50,
    duration: 1,

    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
    },
  });

  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((trigger) =>
      trigger.kill()
    );
  };
  }, []);
  
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p>
            FULL STACK WEB
            <br />
            DEVELOPER
          </p>
        </div>

        <div className="hero-center">
          <h1>
            ABHINAY
            <br />
            KUMAR
          </h1>
        </div>

        <div className="hero-right">
          <p>
            Building modern web experiences with React,
            <br />
            Node.js and MongoDB.
          </p>

          <button onClick={scrollToProjects}>
            View Projects
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <p className="section-label">ABOUT</p>

        <h2 className="about-text">
          I design and develop digital experiences that combine
          creativity, performance and usability.
        </h2>
      </section>

      {/* PROJECTS */}
      <section ref={projectsRef} className="projects">
        <p className="section-label">PROJECTS</p>

        <div className="project">
  <span>01</span>

  <h2>Labour Search Engine</h2>

  <p>HTML • CSS • JavaScript</p>

  <a
    href="https://github.com/abhinaykumar6656-cell/Labour_Search_Engine"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View Repository →
  </a>
</div>

        <div className="project">
  <span>02</span>

  <h2>Medicine Reminder</h2>

  <p>HTML • CSS • JavaScript</p>

  <a
    href="https://github.com/abhinaykumar6656-cell/Medicine_Reminder"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View Repository →
  </a>
</div>

        <div className="project">
  <span>03</span>

  <h2>3D Portfolio Website</h2>

  <p>React • Three.js • GSAP</p>

  <a
    href="https://github.com/abhinaykumar6656-cell/3D-Portfolio-Website"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    View Repository →
  </a>
</div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <p className="section-label">SKILLS</p>

        <h2 className="skills-title">
          Technologies I use to build modern web applications.
        </h2>

        <div className="skills-grid">
          <div className="skill-card">HTML5</div>
          <div className="skill-card">CSS3</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">Node.js</div>
          <div className="skill-card">Express.js</div>
          <div className="skill-card">MySQL</div>
          <div className="skill-card">GSAP</div>
          <div className="skill-card">Three.js</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
        </div>
      </section>

      {/* EDUCATION */}
<section className="education">
  <p className="section-label">EDUCATION</p>

  <div className="timeline-item">
    <span>2022 - 2026</span>
    <div>
      <h2>B.Tech – Computer Science & Engineering</h2>
      <p>Teegala Krishna Reddy Engineering College (TKR), Hyderabad</p>
      <p className="education-score">CGPA:  8.33/ 10</p>
    </div>
  </div>

  <div className="timeline-item">
    <span>2020 - 2022</span>
    <div>
      <h2>Intermediate – MPC</h2>
      <p>Master Minds Junior College (MMJC), Siddipet</p>
      <p className="education-score">Percentage: 95.6%</p>
    </div>
  </div>

  <div className="timeline-item">
    <span>2019 - 2020</span>
    <div>
      <h2>SSC – CBSE</h2>
      <p>Vidya Vardhini High School (VVHS), Siddipet</p>
      <p className="education-score">Percentage: 97%</p>
    </div>
  </div>
  </section>

  {/* EXPERIENCE */}
  <section className="experience">
  <p className="section-label">EXPERIENCE</p>

  <div className="timeline-item">
  <span>2025</span>

  <div>
    <h2>Medicine Reminder Application</h2>

    <p>
      Developed a full-stack medicine reminder system using
      React, Node.js and MongoDB.
    </p>

    <a
      href="https://github.com/abhinaykumar6656-cell/Medicine_Reminder"
      target="_blank"
      rel="noreferrer"
      className="experience-link"
    >
      GitHub Repository →
    </a>
  </div>
</div>

  <div className="timeline-item">
  <span>2025</span>

  <div>
    <h2>Labour Search Engine</h2>

    <p>
      Built a platform connecting labourers and employers
      using HTML, CSS and JavaScript.
    </p>

    <a
      href="https://github.com/abhinaykumar6656-cell/Labour_Search_Engine"
      target="_blank"
      rel="noreferrer"
      className="experience-link"
    >
      GitHub Repository →
    </a>
  </div>
</div>

  <div className="timeline-item">
  <span>2026</span>

  <div>
    <h2>3D Portfolio Website</h2>

    <p>
      Designed an interactive portfolio using React,
      Three.js and GSAP.
    </p>

    <a
      href="https://github.com/abhinaykumar6656-cell/3D-Portfolio-Website"
      target="_blank"
      rel="noreferrer"
      className="experience-link"
    >
      GitHub Repository →
    </a>
  </div>
</div>
</section>

      
     {/* CONTACT */}
<section className="contact">
  <p className="section-label">CONTACT</p>

  <h2 className="contact-title">
    Let's build something amazing together.
  </h2>

  <a
    href="mailto:abhinaykumar@gmail.com"
    className="contact-email"
  >
    abhinaykumar6656@gmail.com
  </a>

  {/* SOCIAL ICONS */}
  <div className="social-icons no-animation">

    <a
      href="https://instagram.com/abhinay_kumar_kotha"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.linkedin.com/in/kotha-abhinay-kumar-82246b3a4/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
    </a>

    <a
      href="https://github.com/abhinaykumar6656-cell"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
    </a>

  </div>
  </section>
    </div>
  );
}

export default App;