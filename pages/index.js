import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <header>
        <nav className="header-navbar" id="main" aria-label="site-navigation">
          <ul className="header-menu">
            <li>
              <a className="menu-item" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="menu-item" href="#education">
                Education
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
                Work
              </a>
            </li>
            <li>
              <a className="menu-item" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="back-to-top-wrapper">
          <a className="back-to-top" id="back-to-top" href="#main">
            <i className="fas fa-angle-up" />
          </a>
        </div>
      </header>
      <section className="welcome" id="welcome">
        <h1 className="welcome-heading transparent" id="welcome-heading">
          Hi, I am Prince Thind
        </h1>
        <div
          className="welcome-sub-heading transparent"
          id="welcome-sub-heading"
        >
          <h2 className="welcome-intro-text" id="welcome-intro-text">
            a junior web developer
          </h2>
          <hr className="ruler welcome-ruler" />
        </div>
      </section>
      <section className="about" id="about">
        <div className="profile-picture">
        
            
          <Image className="profile-logo" src={"/images/profile-logo.png"} height={144} width={144} alt="profile-logo" />
        </div>
        <div className="about-main">
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
            {" "}
            Hello, I am Prince Thind, front-end developer and designer working
            to create the best websites with modern technologies like React and
            the fundamentals of usability. Currently Pursuing B.Tech CSE(Hons.)
            at LPU and looking for internship opportunities. Visit my{" "}
            <a
              href="https://github.com/Prince-Thind"
              className="about-github-link"
            >
              {" "}
              github
            </a>{" "}
            to know more about me and my current projects.{" "}
          </p>
        </div>
      </section>
      <section className="education" id="education">
        <h2 className="education-heading">Education</h2>
        <hr className="education-ruler ruler" />
        <ul className="education-list">
          <li className="education-list-item">
            <div className="education-institute">
              <div className="education-main">
                <div className="education-title"> B.Tech in CSE (Hons.)</div>
                <div className="education-institute-name">
                  (Lovely Professional University)
                </div>
              </div>
              <div className="education-institute-duration">2019-2023</div>
            </div>
            <div className="education-institute-grades">CGPA: ~9</div>
            <ul className="education-institute-details">
              <li className="education-institure-points">
                Web Development as Egnineering Minor
              </li>
              <li className="education-institure-points">
                Digital Marketing as Open Minor
              </li>
            </ul>
          </li>
          <li className="education-list-item">
            <div className="education-institute">
              <div className="education-main">
                <div className="education-title">AISSCE(+2)</div>
                <div className="education-institute-name">
                  (GMT Public School)
                </div>
              </div>
              <div className="education-institute-duration">2018-2019</div>
            </div>
            <div className="education-institute-grades">Percentage: ~90%</div>
            <ul className="education-institute-details">
              <li className="education-institure-points">
                Perfect 100 in Informatics Practices
              </li>
              <li className="education-institure-points">94 in Maths</li>
            </ul>
          </li>
          <li className="education-list-item">
            <div className="education-institute">
              <div className="education-main">
                <div className="education-title">Matric(10th)</div>
                <div className="education-institute-name">
                  (GMT Public School)
                </div>
              </div>
              <div className="education-institute-duration">2016-2017</div>
            </div>
            <div className="education-institute-grades">CGPA: 9</div>
            <ul className="education-institute-details">
              <li className="education-institure-points">
                A+ Grade in all Subjects
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="projects" id="projects">
        <h2 className="projects-heading">Projects</h2>
        <hr className="projects-ruler ruler" />
        <ul className="projects-grid" id="projects-grid"></ul>
        <a
          className="projects-other-links"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Prince-Thind"
        >
          View All
        </a>
      </section>
      <footer className="footer" id="footer">
        <h3 className="footer-heading">Connect with me</h3>
        <hr className="footer-ruler ruler" />
        <nav className="footer-navbar" aria-label="other-social-media">
          <ul className="footer-contacts">
            <li>
              <a
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/princethind/"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Prince-Thind"
              >
                <i className="fab fa-github symbol" />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                href="mailto:princethind799@gmail.com"
              >
                <i className="fas fa-envelope" />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/princethind499/"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              {" "}
              <a
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                href="https://discord.com/users/658611922630868992"
              >
                <i className="fab fa-discord" />
              </a>
            </li>
            <li>
              <a
                className="footer-link"
                target="_blank"
                rel="noreferrer"
                href="https://t.me/The_Elevated_One"
              >
                <i className="fab fa-telegram" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer-copyright">Copyright © Prince Thind</div>
      </footer>
    </div>
  );
}
