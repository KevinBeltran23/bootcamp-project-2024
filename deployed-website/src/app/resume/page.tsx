import style from "@styles/resume.module.css";
import Link from "next/link";
import React from 'react';

export default function Resume() {
  return (
    <div>
      <main>
        <h1 className={style.resumeTitle}>Resume</h1>
        <Link href="KevinBeltran_Resume.pdf" download className={style.downloadButton}>
          Download Resume
        </Link>
        <div className={style.resume}>
          <section className={style.section}>
            <h2 className={style.educationTitle}>Education</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Bachelor of Science in Computer Science, Minor in Mathematics</h3>
              <p className={style.entryInfo}>
                California Polytechnic State University | Expected Graduation Spring 2026 | 3.489 GPA
                <br />
                <em>San Luis Obispo, CA</em>
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.experienceTitle}>Experience</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Mustang Mentorship Program</h3>
              <p className={style.entryInfo}><em>Mentor</em></p>
              <p className={style.entryDescription}>
                - Advised high school seniors through their college application process
                <br /> - Met on a weekly basis for check-ups and academic counseling
                <br /> - Refer my mentees to additional resources and further support
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.projectsTitle}>Projects</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Poly Planner</h3>
              <p className={style.entryInfo}><em>JavaScript/CSS/HTML, React.js, Node.js, MongoDB, Azure</em></p>
              <p className={style.entryDescription}>
                - Worked with a team to create and deploy a web planner application
                <br /> - Used version control and code reviews to produce high-quality code through sprint sessions
                <br /> - Developed a RESTful API backend
                <br /> - Implemented authentication and route protection using JWTs and encryption through middleware
                <br /> - Created an automated test suite using Jest
              </p>
            </div>

            <div className={style.entry}>
              <h3 className={style.entryTitle}>Personal Website</h3>
              <p className={style.entryInfo}><em>HTML/CSS</em></p>
              <p className={style.entryDescription}>
                - Designed and built a personal website using HTML and CSS
                <br /> - Implemented multiple pages, focusing on semantic HTML design
                <br /> - Used best practices for Git and GitHub
              </p>
            </div>

            <div className={style.entry}>
              <h3 className={style.entryTitle}>Interactive Animation</h3>
              <p className={style.entryInfo}><em>Java</em></p>
              <p className={style.entryDescription}>
                - Created a themed animation with user interaction. Leveraged and organized an established database
                <br /> - Employed OOP principles to achieve a maintainable code structure
                <br /> - Ensured seamless integration with the animation framework for smooth performance
                <br /> - Implemented pathing for individual entities and created original sprites for some entities
              </p>
            </div>

            <div className={style.entry}>
              <h3 className={style.entryTitle}>Dynamic Shell</h3>
              <p className={style.entryInfo}><em>C</em></p>
              <p className={style.entryDescription}>
                - Developed a functional UNIX shell interface with batch-processing interactive capabilities
                <br /> - Implemented features such as recursive directory commands, escape characters, and I/O redirection
                <br /> - Built reliable error handling and signal management that properly addresses failures and interruptions
              </p>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.skillsTitle}>Skills</h2>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Languages</h3>
              <ul className={style.skillsList}>
                <li>Python, Java, Racket, Risc-V Assembly, C/C++</li>
                <li>JavaScript, CSS, HTML, SQL, BASH</li>
              </ul>
            </div>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Tools/Frameworks/Libraries</h3>
              <ul className={style.skillsList}>
                <li>React, Node, Express, JavaFX, MySQL, MongoDB</li>
                <li>Linux, Git, CI/CD, Microsoft Azure</li>
                <li>Pandas, Numpy, PyCryptoDome, Matplotlib, Requests, Selenium</li>
              </ul>
            </div>
            <div className={style.entry}>
              <h3 className={style.entryTitle}>Non-Technical</h3>
              <ul className={style.skillsList}>
                <li>Experience with team projects, communication, adaptability, and resourcefulness</li>
                <li>Fluent in Spanish</li>
                <li>3+ years of leadership experience through marching band and track/cross country</li>
              </ul>
            </div>
          </section>

          <section className={style.section}>
            <h2 className={style.courseworkTitle}>Course Work</h2>
            <div className={style.entry}>
              <ul className={style.courseList}>
                <li>Systems Programming</li>
                <li>Computer Organization</li>
                <li>Database Systems</li>
                <li>Software Engineering</li>
                <li>Cryptography Engineering</li>
                <li>Object Oriented Programming</li>
                <li>Data Structure</li>
                <li>Programming Languages</li>
                <li>Knowledge Discovery from Data</li>
                <li>Discrete Structures</li>
                <li>Deep Learning</li>
                <li>Design and Analysis of Algorithms</li>
                <li>Linear Algebra</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}