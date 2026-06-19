function App() {
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2>Anamika Singh</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
<section className="hero">
  <h1>Hi, I'm Anamika Singh 👋</h1>

  <h2>Software Development Engineer</h2>

  <p>
    Information Technology student passionate about Full Stack
    Development, Backend Engineering, AI-powered applications,
    and solving Data Structures & Algorithms problems.
  </p>

  <div className="buttons">
    <button
      onClick={() =>
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" })
      }
    >
      View Projects
    </button>

    <a href="/Anamika_Resume.pdf" download>
  <button className="resume">
    Download Resume
  </button>
</a>
  </div>
</section>

      {/* Skills */}
      <section id="skills">
        <h2>Technical Skills</h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Languages</h3>
            <p>Java, C++, JavaScript, SQL</p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React.js, HTML, CSS, Bootstrap</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Express.js, REST APIs</p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>MongoDB, MySQL</p>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>
            <p>Git, GitHub, Postman, VS Code</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2>About Me</h2>

        <p>
          I am Anamika Singh, a B.Tech Information Technology student
          at Pranveer Singh Institute of Technology. I specialize in
          Full Stack Development, Backend Engineering, REST API
          Development, and AI-powered applications.
        </p>

        <p>
          I enjoy building scalable software solutions, developing
          backend systems, and solving Data Structures & Algorithms
          problems.
        </p>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2>Projects</h2>

        {/* Project 1 */}
        <div className="project-card">
          <h3>HerHealth AI</h3>

          <p>
            AI-Powered Women Wellness & Healthcare Management
            Platform supporting menstrual tracking, pregnancy care,
            postpartum guidance, doctor appointments, prescriptions,
            and medicine reminders.
          </p>

          <p>
            <strong>Tech Stack:</strong> React.js, Node.js,
            Express.js, MongoDB, JWT, Postman
          </p>

          <a
            href="https://github.com/AnamikaSingh652/HerHealth-AI"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub Repository</button>
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Krishi Insight Voice</h3>

          <p>
            AI-powered agriculture assistant integrating IoT sensors,
            voice commands, crop recommendations, soil monitoring,
            irrigation automation, and multilingual support.
          </p>

          <p>
            <strong>Tech Stack:</strong> React.js, Node.js,
            MongoDB, ESP32, NLP, Speech-to-Text
          </p>

          <button>Coming Soon</button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2>Contact Me</h2>

        <p>
          <strong>Email:</strong> as4073737@gmail.com
        </p>

        <p>
          <strong>Location:</strong> Lucknow, Uttar Pradesh
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/AnamikaSingh652"
            target="_blank"
            rel="noreferrer"
          >
            AnamikaSingh652
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </p>
      </section>

    </div>
  );
}

export default App;