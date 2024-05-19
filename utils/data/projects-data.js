import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Parkolay",
    description:
      "Me and my team built an application for monitoring car parking system. This is a website for track the current position of car in a car parking system. Also move the lift position and move the car from entry to exit through this website through a 3d panel. The 3d panel made by using baylon.js.",
    tools: [
      "Tailwind CSS",
      "React",
      "TypeScript",
      "GraphQL",
      "Babylon JS",
      "Redux",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://parkolay.netlify.app/",
    image: crefin,
  },
  {
    id: 2,
    name: "SharpArchive",
    description:
      "This is a social data-archiving website where a user can archive their social account data like Facebook (Business Account), Instagram (Business Account), LinkedIn (Group of an account), Twitter, Gmail, Microsoft, TikTok and many more. Interactive UI and user-friendly animation.",
    tools: ["NuxtJS", "Tailwind CSS", "SCSS", "Stripe", "TypeScript"],
    role: "Frontend Developer",
    code: "",
    demo: "https://dev.sharparchive.com/",
    image: travel,
  },
  {
    id: 3,
    name: "SK Mobile School",
    description:
      "Managed every part of the project from start to finish, supervising the creation of a learning portal similar to Udemy. Provided leader ship and direction to the development team, fostering collaboration and ensuring a cohesive work environment. Conceptualized and oversaw the implementation of a single-device login system for enhanced security. Defined the workflow and specifications for user registration on a single device and subsequent device change requests. Communicate with the client and try to understand his requirement properly then discuss and assign task with the development team and ensuring alignment with client expectations and needs.",
    tools: ["Vue 3", "Tailwind CSS", "SCSS", "Aamar Pay", "TypeScript"],
    code: "",
    role: "Frontend Developer",
    demo: "https://skmobileschool.com/",
    image: realEstate,
  },
  {
    id: 4,
    name: "Student Progress Tracker",
    description:
      "Implement a secure signup and authentication system for students, teachers, and administrators. Implement an approval system for teacher and student accounts. Develop a form for administrators to add new users and assign roles. Create a system for tracking student work progress and allowing teacher feedback. Implement a document writer for students to write and submit their defense or project reports, and for teachers to review and approve them. Develop a system to display all approved papers and reports for all students.",
    tools: ["Vue 3", "Tailwind CSS", "Express JS", "MongoDB", "Node Mailer"],
    code: "",
    demo: "https://students-progress-tracker.netlify.app/",
    image: ayla,
    role: "Full Stack Developer(Alone)",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
