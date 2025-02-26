/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nikhilesh Siddanthi",
  title: "Hi all, I'm Nikhilesh",
  subTitle: emoji(
    "A highly skilled and experienced business analyst, scrum master, and product analyst with 11 years of experience in the IT industry. I have a proven track record of delivering successful projects in Agile environments and am well-versed in key project management tools and techniques, project documentation, scrum ceremonies, and stakeholder management."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cusvJtThjTe5IHRshxD2X5rtuhowdkTM/view?usp=drive_link", // Link to your resume
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/NikhileshSiddanthi",
  linkedin: "https://www.linkedin.com/in/nikhileshsiddanthi/",
  gmail: "siddanthinikhilesh@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "EXPERIENCED BUSINESS ANALYST AND SCRUM MASTER WITH EXPERTISE IN AGILE METHODOLOGIES AND PROJECT MANAGEMENT",
  skills: [
    emoji("⚡ Facilitate collaboration among cross-functional teams to streamline project workflows"),
    emoji("⚡ Proficient in Jira Align, Confluence, and Azure DevOps for project management and documentation"),
    emoji("⚡ Conduct user research, usability testing, and create detailed product backlogs and user stories")
  ],

  softwareSkills: [
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Confluence",
      fontAwesomeClassname: "fas fa-book"
    },
    {
      skillName: "Azure DevOps",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "Microsoft 365",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "Adobe Illustrator",
      fontAwesomeClassname: "fab fa-adobe"
    },
    {
      skillName: "Balsamiq",
      fontAwesomeClassname: "fas fa-pencil-ruler"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amity University",
      logo: require("./assets/images/amityLogo.png"), // Replace with actual Amity logo
      subHeader: "Bachelor of Technology (B.Tech)",
      duration: "2008 - 2012",
      desc: "Studied Computer Science and Engineering",
      descBullets: ["Developed foundational knowledge in software development and IT"]
    }
  ]
};

// Work Experience Section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Product Owner",
      company: "Mindtree",
      companylogo: require("./assets/images/mindtreeLogo.png"), // Replace with actual Mindtree logo
      date: "May 2021 – Present",
      desc: "Facilitated collaboration among cross-functional teams to gain insights into interdependencies and streamline project workflows effectively.",
      descBullets: [
        "Utilized Jira Align proficiently to log and monitor project dependencies, PI objectives, and Program boards.",
        "Leveraged Confluence to document PI objectives, features, and functional requirements."
      ]
    },
    {
      role: "Product Owner/Business Analyst",
      company: "Franklin Templeton",
      companylogo: require("./assets/images/franklinLogo.png"), // Replace with actual Franklin Templeton logo
      date: "Feb 2019 – May 2021",
      desc: "Ensured strict compliance with HIPAA regulations and contributed to streamlined operations in healthcare standards.",
      descBullets: [
        "Conducted user research and usability testing to inform product design and improvements.",
        "Created and managed product backlogs, user stories, and acceptance criteria in JIRA."
      ]
    },
    {
      role: "Business Analyst",
      company: "Deloitte",
      companylogo: require("./assets/images/deloitteLogo.png"), // Replace with actual Deloitte logo
      date: "Jun 2016 – Feb 2019",
      desc: "Collaborated with cross-functional teams to develop and implement product roadmaps for healthcare software products.",
      descBullets: [
        "Worked with engineering teams to develop requirements, user stories, and acceptance criteria.",
        "Conducted product demonstrations and training sessions for end-users and stakeholders."
      ]
    },
    {
      role: "Business Analyst",
      company: "Caliber Technologies",
      companylogo: require("./assets/images/caliberLogo.png"), // Replace with actual Caliber logo
      date: "Dec 2012 – Apr 2016",
      desc: "Created and maintained project documentation, including BRD, FRD, and Use Case Documents.",
      descBullets: [
        "Managed stakeholder relationships and conducted project costing and risk management."
      ]
    }
  ]
};

// Certifications Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications that validate my expertise in business analysis and Agile methodologies",
  achievementsCards: [
    {
      title: "Diploma in Product Management",
      subtitle: "Completed a comprehensive program in product management.",
      footerLink: [
        { name: "Certification", url: "#" } // Add certification URL if available
      ]
    },
    {
      title: "ECBA (Entry Certificate in Business Analysis)",
      subtitle: "Certified by IIBA in business analysis fundamentals.",
      footerLink: [
        { name: "Certification", url: "#" } // Add certification URL if available
      ]
    },
    {
      title: "CCBA (Certification of Capability in Business Analysis)",
      subtitle: "Advanced certification in business analysis practices.",
      footerLink: [
        { name: "Certification", url: "#" } // Add certification URL if available
      ]
    },
    {
      title: "CSM (Certified ScrumMaster)",
      subtitle: "Certified in Scrum methodologies and Agile practices.",
      footerLink: [
        { name: "Certification", url: "#" } // Add certification URL if available
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Projects Section

const bigProjects = {
  title: "Big Projects",
  subtitle: "KEY PROJECTS THAT I HAVE CONTRIBUTED TO",
  projects: [
    {
      projectName: "Elevance Health",
      projectDesc: "Contributed to the development of healthcare solutions ensuring compliance with HIPAA regulations.",
      footerLink: [
        { name: "Project Details", url: "#" } // Add project URL if available
      ]
    },
    {
      projectName: "Unilever Sustainable Future",
      projectDesc: "Worked on sustainability initiatives and process improvements.",
      footerLink: [
        { name: "Project Details", url: "#" } // Add project URL if available
      ]
    },
    {
      projectName: "Vue Insurance Symmetry CRM",
      projectDesc: "Implemented CRM solutions for insurance products.",
      footerLink: [
        { name: "Project Details", url: "#" } // Add project URL if available
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 986 617 2757",
  email_address: "siddanthinikhilesh@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "yourTwitterUsername", // Replace with your Twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  achievementSection,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable
};
