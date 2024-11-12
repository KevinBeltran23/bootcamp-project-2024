import type { Section, Entry } from "@/typings/resume.ts";

const entries: Entry[] = [
    // education
    {
        name: "Bachelor of Science in Computer Science, Minor in Mathematics",
        info: "California Polytechnic State University",
        description: [
            "- San Luis Obispo, CA",
            "- Expected Graduation Spring 2026",
            "- 3.489 GPA"
        ],
        type: "education",
    },
    // experience
    {
        name: "Mustang Mentorship Program",
        info: "Mentor",
        description: [
            "- Advised high school seniors through their college application process",
            "- Met on a weekly basis for check-ups and academic counseling",
            "- Referred my mentees to additional resources and further support",
        ],
        type: "experience",
    },
    // projects
    {
        name: "Poly Planner",
        info: "JavaScript/CSS/HTML, React.js, Node.js, MongoDB, Azure",
        description: [
            "- Worked with a team to create and deploy a web planner application",
            "- Used version control and code reviews to produce high-quality code through sprint sessions",
            "- Developed a RESTful API backend",
            "- Implemented authentication and route protection using JWTs and encryption through middleware",
            "- Created an automated test suite using Jest",
        ],
        type: "project",
    },
    {
        name: "Personal Website",
        info: "HTML/CSS",
        description: [
            "- Designed and built a personal website using HTML and CSS",
            "- Implemented multiple pages, focusing on semantic HTML design",
            "- Used best practices for Git and GitHub",
        ],
        type: "project",
    },
    {
        name: "Interactive Animation",
        info: "Java",
        description: [
            "- Created a themed animation with user interaction. Leveraged and organized an established database",
            "- Employed OOP principles to achieve a maintainable code structure",
            "- Ensured seamless integration with the animation framework for smooth performance",
            "- Implemented pathing for individual entities and created original sprites for some entities",
        ],
        type: "project",
    },
    {
        name: "Dynamic Shell",
        info: "C",
        description: [
            "- Developed a functional UNIX shell interface with batch-processing interactive capabilities",
            "- Implemented features such as recursive directory commands, escape characters, and I/O redirection",
            "- Built reliable error handling and signal management that properly addresses failures and interruptions",
        ],
        type: "project",
    },
    // skills
    {
        name: "Languages",
        info: "",
        description: [
            "Python, Java, Racket, Risc-V Assembly, C/C++",
            "JavaScript, CSS, HTML, SQL, BASH"
        ],
        type: "skill",
    },
    {
        name: "Tools/Frameworks/Libraries",
        info: "",
        description: [
            "React, Node, Express, JavaFX, MySQL, MongoDB",
            "Linux, Git, CI/CD, Microsoft Azure",
            "Pandas, Numpy, PyCryptoDome, Matplotlib, Requests, Selenium",
        ],
        type: "skill",
    },
    {
        name: "Non-Technical",
        info: "",
        description: [
            "Experience with team projects, communication, adaptability, and resourcefulness",
            "Fluent in Spanish",
            "3+ years of leadership experience through marching band and track/cross country",
        ],
        type: "skill",
    },
    // coursework
    {
        name: "Coursework",
        info: "",
        description: [
            "Systems Programming",
            "Computer Organization",
            "Database Systems",
            "Software Engineering",
            "Cryptography Engineering",
            "Object Oriented Programming",
            "Data Structures",
            "Programming Languages",
            "Knowledge Discovery from Data",
            "Discrete Structures",
            "Deep Learning",
            "Design and Analysis of Algorithms",
            "Linear Algebra",
        ],
        type: "coursework",
    },
];

const sections: Section[] = [
    {
      name: "Education",
      children: entries.filter(entry => entry.type === "education"),
    },
    {
      name: "Experience",
      children: entries.filter(entry => entry.type === "experience"),
    },
    {
      name: "Projects",
      children: entries.filter(entry => entry.type === "project"),
    },
    {
      name: "Skills",
      children: entries.filter(entry => entry.type === "skill"),
    },
    {
      name: "Coursework",
      children: entries.filter(entry => entry.type === "coursework"),
    },
  ];

export default { sections, entries };
