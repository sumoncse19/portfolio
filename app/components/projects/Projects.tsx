"use client";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import oeHealth from "@/public/projects/oeHealth.webp";
import skMobileSchool from "@/public/projects/sk-mobile-school.png";
import ecopass from "@/public/projects/ecopass.png";
import parkolay from "@/public/projects/parkolay.png";
import childCareSystem from "@/public/projects/child-care-system.png";
import bondhuGroup from "@/public/projects/bondhu-group.png";
import fareNowPro from "@/public/projects/farenow-pro.webp";
import storefront from "@/public/projects/Vue-Storefront.webp";
import sharpArchive from "@/public/projects/sharp-archive.webp";
import fareNow from "@/public/projects/farenow.webp";

const Projects = () => {
  const projectsData = [
    {
      name: "Sharp Archive",
      image: sharpArchive,
      category: "Web",
      techStack: "Nuxt JS, Tailwind CSS, Animation, Rest API",
      links: {
        visit: "https://dev.sharparchive.com/",
      },
    },
    {
      name: "SK Mobile School",
      image: skMobileSchool,
      category: "Web",
      techStack: "Nuxt JS, Tailwind CSS, Rest API",
      links: {
        visit: "https://skmobileschool.com/",
      },
    },
    {
      name: "Ecopass",
      image: ecopass,
      category: "Web",
      techStack: "Next JS, Tailwind CSS, Rest API",
      links: {
        visit: "https://dev--parkolay-main.netlify.app/auth/login/",
      },
    },
    {
      name: "Bondhu Group MLM System",
      image: bondhuGroup,
      category: "Web",
      techStack: "Next JS, Tailwind CSS, Rest API, Express JS, Mongoose",
      links: {
        visit: "https://bondhu-group-dev.vercel.app/",
        GitHub_client: "https://github.com/sumoncse19/bondhu-group-client/",
        GitHub_backend: "https://github.com/sumoncse19/bondhu-group-server/",
      },
    },
    {
      name: "Parkolay - A Parking Solution",
      image: parkolay,
      category: "Web",
      techStack: "Nuxt JS, Tailwind CSS, Rest API",
      links: {
        visit: "https://dev--parkolay-main.netlify.app/auth/login/",
      },
    },
    {
      name: "Pulikids - Child Care Management",
      image: childCareSystem,
      category: "Web",
      techStack:
        "Node.js, Typescript, PostgreSQL, MongoDB, TypeORM, Mongoose, Zod, Clerk, Module Pattern",
      links: {
        visit: "https://github.com/sumoncse19/childcare-management/",
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
