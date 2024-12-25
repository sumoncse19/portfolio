"use client";
import { useState } from "react";
import SkillCard from "./SkillCard";
import SectionWrapper from "../SectionWrapper";

const Skills = () => {
  const skillData = [
    {
      name: "HTML5",
      category: "Frontend",
      image: "/skills/frontend/html.webp",
    },
    {
      name: "CSS3",
      category: "Frontend",
      image: "/skills/frontend/css.png",
    },
    {
      name: "Tailwind",
      category: "Frontend",
      image: "/skills/frontend/tailwindcss.webp",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      image: "/skills/frontend/javascript.webp",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      image: "/skills/frontend/ts.png",
    },
    {
      name: "ReactJS",
      category: "Frontend",
      image: "/skills/frontend/react.webp",
    },
    {
      name: "NextJS",
      category: "Frontend",
      image: "/skills/frontend/next.png",
    },
    {
      name: "Redux",
      category: "Frontend",
      image: "/skills/frontend/redux.webp",
    },
    {
      name: "VueJS",
      category: "Frontend",
      image: "/skills/frontend/vue.png",
    },
    {
      name: "NuxtJS",
      category: "Frontend",
      image: "/skills/frontend/next.png",
    },
    {
      name: "Pinia",
      category: "Frontend",
      image: "/skills/frontend/pinia.png",
    },
    {
      name: "Vuetify",
      category: "Frontend",
      image: "/skills/frontend/vuetify.png",
    },
    {
      name: "Storefront UI",
      category: "Frontend",
      image: "/skills/frontend/storefront-ui.webp",
    },
    {
      name: "Vue Storefront",
      category: "Frontend",
      image: "/skills/frontend/store.svg",
    },
    {
      name: "Material UI",
      category: "Frontend",
      image: "/skills/frontend/material-ui.webp",
    },
    {
      name: "NodeJS",
      category: "Backend",
      image: "/skills/backend/node-js.webp",
    },
    {
      name: "ExpressJS",
      category: "Backend",
      image: "/skills/backend/express.png",
    },
    {
      name: "MongoDB",
      category: "Backend",
      image: "/skills/backend/mongodb.png",
    },
    {
      name: "Mongoose",
      category: "Backend",
      image: "/skills/backend/mongoose.png",
    },
    {
      name: "Firebase",
      category: "Backend",
      image: "/skills/backend/firebase.webp",
    },
    {
      name: "GraphQl",
      category: "Others",
      image: "/skills/others/graphql.png",
    },
    {
      name: "Eslint",
      category: "Others",
      image: "/skills/others/eslint.webp",
    },
    {
      name: "Prettier",
      category: "Others",
      image: "/skills/others/prettier.png",
    },
    {
      name: "Jest",
      category: "Others",
      image: "/skills/others/jest.webp",
    },
    {
      name: "Vitest",
      category: "Others",
      image: "/skills/others/vitest.png",
    },
    {
      name: "Git",
      category: "Others",
      image: "/skills/others/git.webp",
    },
    {
      name: "GitHub",
      category: "Others",
      image: "/skills/others/github.webp",
    },
    {
      name: "Docker",
      category: "Others",
      image: "/skills/others/docker.png",
    },
    {
      name: "Jira",
      category: "Others",
      image: "/skills/others/jira.webp",
    },
    {
      name: "Trello",
      category: "Others",
      image: "/skills/others/jira.webp",
    },
    {
      name: "Vercel",
      category: "Others",
      image: "/skills/others/vercel.png",
    },
    {
      name: "Netlify",
      category: "Others",
      image: "/skills/others/netlify.webp",
    },
  ];

  const categories = Array.from(new Set(skillData.map((s) => s.category)));
  const [category, setCategory] = useState(categories[0]);

  return (
    <SectionWrapper id="skills" className="mb-28 lg:mb-40 ">
      <h2 className="text-4xl text-center">Tech Stack</h2>

      <div className="w-11/12 md:w-10/12 max-w-[740px] overflow-x-auto scroll-hide lg:w-1/2 mx-auto mt-6 bg-white p-2 flex justify-between items-center gap-3 rounded-md">
        {categories.map((c, i) => (
          <span
            key={i}
            onClick={() => setCategory(c)}
            className={`p-1.5 md:p-2 text-sm md:text-base w-full text-center cursor-pointer rounded-md ${
              category.toLowerCase() === c.toLowerCase()
                ? "bg-violet-600 text-white"
                : "bg-white hover:bg-gray-100"
            } transition-all capitalize`}
          >
            {c}
          </span>
        ))}
      </div>

      <div className="lg:w-3/4 max-w-[1220px] my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
        {skillData
          .filter((s) => s.category.toLowerCase() === category.toLowerCase())
          .map((s, i) => (
            <SkillCard key={i} {...s} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
