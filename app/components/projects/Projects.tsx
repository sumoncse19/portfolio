"use client";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import oeHealth from "@/public/projects/oeHealth.webp";
import fareNowPro from "@/public/projects/farenow-pro.webp";
import storefront from "@/public/projects/Vue-Storefront.webp";
import sharpArchive from "@/public/projects/sharp-archive.webp";
import fareNow from "@/public/projects/farenow.webp";

const Projects = () => {
  const projectsData = [
    {
      name: "Oral e-Health Monitoring Platform",
      image: oeHealth,
      category: "Web",
      techStack: "Nuxt JS, Django, Vuetify, GraphQl",
      links: {
        visit: "https://teethwallet.com",
      },
    },
    {
      name: "FarenowPro Pro",
      image: fareNowPro,
      category: "Web",
      techStack:
        "Next JS, PHP, Ant Design, FullCalendar, OAuth, Tailwind CSS, Rest API",
      links: {
        visit: "https://pro.farenowPro.com",
      },
    },
    {
      name: "Vue StoreFont",
      image: storefront,
      category: "Web",
      techStack: "Vue JS, Tailwind CSS, Storefont UI, Oddo, Graphql",
      links: {
        visit: "https://vsf-dev.labs.odoogap.com",
      },
    },
    {
      name: "Sharp Archive",
      image: sharpArchive,
      category: "Web",
      techStack: "Nuxt JS, Tailwind CSS, Animation, Rest API",
      links: {
        visit: "https://sharparchive.com",
      },
    },
    {
      name: "Farenow",
      image: fareNow,
      category: "Web",
      techStack: "Next JS, Tailwind CSS, Rest API",
      links: {
        visit: "https://farenow.com/",
      },
    },
  ];

  const [projects, setProjects] = useState([...projectsData]);

  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [viewAll, setViewAll] = useState(false);

  return (
    <SectionWrapper id="projects" className="mx-4 md:mx-0 mb-12 lg:mb-20">
      <h2 className="text-4xl text-center">Projects</h2>

      <div className="md:mx-6 lg:mx-auto lg:w-5/6 max-w-[1220px] my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
        {projects
          .slice(0, viewAll ? filteredProjects.length : 6)
          .map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
      </div>

      {filteredProjects.length > 6 && (
        <ViewAll
          scrollTo="projects"
          title={viewAll ? "Okay, I got it" : "View All"}
          handleClick={() => setViewAll(!viewAll)}
        />
      )}
    </SectionWrapper>
  );
};

export default Projects;

export const ViewAll = ({ handleClick, title, scrollTo }: any) => {
  return (
    <>
      <div className="bg-white w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
      <div className="text-center -translate-y-24">
        {title === "View All" ? (
          <button
            onClick={handleClick}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } py-1.5 rounded-md hover:shadow-xl transition-all`}
          >
            {title}
          </button>
        ) : (
          <Link
            href={`#${scrollTo}`}
            className={`bg-violet-600 text-white px-4 ${
              title === "View All" ? "animate-bounce" : "animate-none"
            } cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        )}
      </div>
    </>
  );
};
