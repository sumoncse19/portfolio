"use client";
import { useState } from "react";
import { ViewAll } from "../projects/Projects";
import SectionWrapper from "../SectionWrapper";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  const experienceData = [
    {
      company: "Developer Experience Hub",
      url: "https://www.linkedin.com/company/devxhubcom/mycompany/",
      location: "Rajshahi, Bangladesh | Remote",
      position: "Full Stack Developer",
      desc: [
        "Designed and implemented interactive user interfaces with animations to enhance user experience; led frontend development for an educational course-selling platform.",
        "Developed a social data-archiving platform with multi-account support, integrating social media platforms like Facebook, Instagram, and LinkedIn.",
        "Provided technical leadership by mentoring junior developers and contributing to backend REST API development using Express.",
      ],
      duration: "December 2021 - Present",
      // skills:
      //   "Storefront UI · Odoo · Animation · Vuex · Pinia · Scrum · Vuetify · Nuxt JS · Vue StoreFront · GraphQL · REST APIs · TypeScript · Agile Methodologies · Quasar Framework · Bootstrap · Tailwind CSS · Vue.js",
    },
    {
      company: "Hi-Tech Bangla",
      url: "https://www.linkedin.com/company/hi-tech-bangla-bangladesh/",
      location: "Rajshahi, Bangladesh | Remote",
      position: "Intern Frontend Engineer",
      desc: [
        "Collaborated with designers and developers to design and implement user interfaces, ensuring seamless integration with backend functionality.",
        "Developed clean, efficient, and maintainable code using HTML, CSS, and JavaScript; performed testing and debugging to deliver a high-quality user experience.",
        "Optimized frontend components for performance, ensuring cross-browser compatibility and responsiveness across various devices.",
      ],
      duration: "June 2021 - November 2021",
      // skills:
      //   "SCSS · Animation · Nuxt JS · CSS · REST APIs · Communication · JavaScript · Tailwind CSS · Responsive Web Design · Vue.js",
    },
  ];

  const educationData = [
    {
      institute: "Port City International University",
      degree: "Bachelor of Science in Computer Science & Engineering",
      desc: [],
      duration: "2019 - 2023",
    },
    {
      institute: "Hajera Taju Degree College",
      degree: "HSC",
      desc: [],
      duration: "2016 - 2017",
    },
    {
      institute: "Lamabazar A.A.S. City Corp. High School",
      degree: "SSC",
      desc: [],
      duration: "2014 - 2015",
    },
  ];

  const [show, setShow] = useState("Professional");
  const [viewAll, setViewAll] = useState(false);

  const [experiences, setExperiences] = useState([...experienceData]);
  const [educations, setEducations] = useState([...educationData]);

  return (
    <SectionWrapper id="experience" className="mb-12 lg:mb-20">
      <h2 className="text-4xl text-center">Experience</h2>

      <div className="w-fit mx-auto mt-6 p-2 bg-white rounded-md flex gap-2 items-center">
        {["Professional", "Education"].map((e, i) => (
          <button
            key={i}
            onClick={() => setShow(e)}
            className={`py-2 px-4 rounded-md transition-colors ${
              show === e
                ? "bg-violet-600 text-white"
                : "hover:bg-gray-100 text-black"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6">
        <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0 max-w-[1220px] mx-auto">
          <div className="left-6 md:left-1/2 absolute border-opacity-20 border-gray-400 h-full border"></div>

          {viewAll
            ? (show === "Professional" ? experiences : educations).map(
                (e, i) => <ExperienceCard key={i} {...e} index={i} />
              )
            : (show === "Professional" ? experiences : educations)
                .slice(0, 2)
                .map((e, i) => <ExperienceCard key={i} {...e} index={i} />)}
        </div>
      </div>

      {(show === "Professional" ? experiences : educations).length > 2 && (
        <ViewAll
          scrollTo="experience"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Experiences;
