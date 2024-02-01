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
  resumeLink: `https://the-cipher-vivek-resume.vercel.app/root/index.html`,
  username: "The Cipher Vivek",
  title: "Hi all, I'm Vivek Shah",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / RustLang / Actix Web / Rocket and some other cool libraries and frameworks."
  ),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Vivek-C-shah",
  linkedin: "https://www.linkedin.com/in/the-cipher-vivek/",
  gmail: "vivekchiragshah2004@gmail.com",
  // gitlab: "https://gitlab.com/Vivek-C-Shah",
  // medium: "https://medium.com/@VivekShah",
  // stackoverflow: "https://stackoverflow.com/users/22082472/vivek-shah",
  instagram: "https://www.instagram.com/shhh_vivek/",
  // twitter: "https://twitter.com/ShVivek25",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly Logical Back-end for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Large Language Models",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pandit Deendayal Energy University",
      logo: require("./assets/images/unilogo.png"),
      subHeader:
        "Bachelor of Technology in Information and Communication Technology",
      duration: "July 2021 - Present"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
    //   {
    //     schoolName: "Stanford University",
    //     logo: require("./assets/images/stanfordLogo.png"),
    //     subHeader: "Bachelor of Science in Computer Science",
    //     duration: "September 2013 - April 2017",
    //     desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //     descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    //   }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Web Development Intern",
      company: "TechInnovate Mobility",
      companylogo: require("./assets/images/techinnovate.jpeg"),
      date: "October 2022 - March 2023",
      desc: "Developed a full stack web application for the company to manage their data and for the marketting of sales.",
      descBullets: [
        "Developed Backend using NodeJS and ExpressJS with Database as MongoDB",
        "techinnovatemobility.com/"
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Marwiz Tech Pvt. Ltd.",
      companylogo: require("./assets/images/marwiz.jpeg"),
      date: "April 2023 - June 2023",
      desc: "Developed the Backend of the Web Application for the company to manage their data and for the marketting of sales.",
      descBullets: [
        "Applied rust(Actix Web Framework) to build and migrated the backend from NodeJS to Rust which improved the website’s performance by 50-60%.",
        "Also used many security tools to check the security of the website."
      ]
    },
    {
      role: "Software Development Intern",
      company: "Cybertag",
      companylogo: require("./assets/images/cybertag.png"),
      date: "June 2023 - August 2023",
      desc: "Learnt about the working of the company and developed many full stack web application for the company's clients.",
      descBullets: [
        "Applied Core Computer Concepts to improve the website’s security and Database.",
        "Developed finished projects for the clients using JavaScript, Python and Rust."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME PROJECTS, STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Effitto.png"),
      projectName: "Effitto",
      projectDesc: "A Rental MarketPlace for the people of Ahmedabad, India",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://effitto.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/sih.png"),
      projectName: "SIH Finals Project",
      projectDesc: "Created an offline Large Language Model for the Government of India as the part of Smart India Hackathon 2023, where I contributed in the backend of the project and the fine-tuning of AI model.",
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Vivek-C-Shah/sih_IF"
        }
        //  you can add extra buttons here.
      ]
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DotSlash 6.0 Hackathon Finalist",
      subtitle:
        "DotSlash is a 36 hour hackathon organized by Coding Blocks for students all over India. I was selected as a finalist for my project 'BSCM - Blockchain Supply Chain Management System' and got a chance to present my project in front of the judges.",
      image: require("./assets/images/dotslash.png"),
      imageAlt: "Dotsalsh 6.0",
      footerLink: [
        {
          name: "Certification",
          url: "https://certificate.givemycertificate.com/c/dd4e026b-e56c-463e-a944-e985c68ad6ba"
        }
      ]
    },
    {
      title: "Certified Ethical Hacker (CEH) - EC-Council",
      subtitle:
        "Skills: Digital Forensics · Ethical Hacking · Penetration Testing · Cybersecurity · Information Security",
      image: require("./assets/images/eccouncil.png"),
      imageAlt: "EC-Counsil Logo",
      footerLink: [
        {
          name: "Certificate",
          url: "https://www.coursera.org/account/accomplishments/certificate/T5NJ9GXTPKJD"
        }
      ]
    },

    {
      title: "IBM Cyber Security Analyst - IBM",
      subtitle:
        "Completed Cyber Security Certifcation from IBM.",
      image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/W6FL67SLTC2D"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@VivekShah/",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "N/A",
      subtitle: "N/A",
      slides_url: "N/A",
      event_url: "N/A"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7383123796",
  email_address: "vivekchiragshah2004@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "ShVivek25", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
