import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import sumon from "@/public/about/sumon.jpeg";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="mb-28 lg:mb-40 pt-5 bg-gradient-to-b from-white to-gray-100/20"
    >
      <h2 className="text-4xl text-center text-gray-800">About Me</h2>

      <div className="w-full lg:w-11/12 max-w-[1220px] mx-auto mt-6  flex flex-col md:gap-4 lg:flex-row justify-between items-center">
        <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
          <Image
            src={sumon}
            alt="profile"
            width={1000}
            height={1000}
            className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-violet-100"
          />
          <span className="font-medium font-sans">
            {"< I Build Stuff 👨🏻‍💻 />"}
          </span>
        </div>

        <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-6 lg:mx-0">
          <div className="flex flex-col gap-2.5">
            <p className="text-3xl font-semibold">Md. Sumon</p>
            <p className="text-violet-800 w-fit rounded py-1 px-2 text-sm bg-violet-50">
              Full Stack Engineer
            </p>
            <p className="text-sm md:text-base my-2 text-gray-600">
              Detail-oriented Full stack web developer with more than 3 years of
              professional experience experience in full stack development.
              Adept at delivering intricate projects and passionate about
              technology impact on business transformation. Skilled problem
              solver with a positive attitude, effective in leadership,
              communication, and innovation. Proficient in React, Next.js,
              Vue.js (Vue2 and Vue3), Nuxt.js (Nuxt2 and Nuxt3), Redux, GraphQL,
              WebSocket for frontend development. Backend expertise in Node.js
              with Express, MongoDB, including familier with Python and basic
              level Django and Mongoose for server-side technologies. Committed
              to delivering high-quality solutions and collaborating effectively
              with cross-functional teams.
            </p>
            <div className="flex items-center gap-4 md:mt-4">
              <Link
                href="https://drive.google.com/file/d/1fktZbdFC1GgUcY19kuZ8PU9g_lphKrL5/view?usp=sharing"
                target="_blank"
                className="text-sm md:text-base bg-violet-600 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow"
              >
                Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
