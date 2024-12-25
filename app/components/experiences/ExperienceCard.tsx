"use client";
import { MdSchool, MdWork } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Key } from "react";

const Experience = ({
  index,
  company,
  url,
  location,
  position,
  desc,
  institute,
  degree,
  duration,
  skills,
}: any) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const cardVariants = {
    hidden: { x: index % 2 === 0 ? 20 : -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <div
      className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${
        index % 2 === 0 ? "md:flex-row-reverse left-timeline" : "right-timeline"
      }`}
    >
      <div className="order-1 md:w-5/12"></div>

      <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-violet-200 rounded-full ring-4 md:ring-8 ring-white dark:ring-grey-800 dark:bg-violet-900">
        {company && (
          <MdWork className="text-base md:text-xl text-violet-600 dark:text-violet-400" />
        )}
        {institute && (
          <MdSchool className="text-base md:text-xl text-violet-600 dark:text-violet-400" />
        )}
      </span>

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="order-1 rounded-lg w-full ml-3 md:ml-0 bg-white dark:bg-grey-800 md:w-5/12 p-3 md:px-4 md:py-4"
      >
        {url ? (
          <Link
            href={url}
            target="_blank"
            className="mb-2 font-medium text-lg md:text-xl hover:text-violet-600"
          >
            {company || institute}
          </Link>
        ) : (
          <h3 className="mb-2 font-medium text-lg md:text-xl">
            {company || institute}
          </h3>
        )}
        <p className="text-sm text-gray-500 font-medium">
          {position || degree} | {duration}
        </p>
        {location && (
          <p className="text-sm text-gray-500 font-medium">{location}</p>
        )}
        <ul className="text-sm text-gray-400 mt-2 mb-2 ml-4 list-disc">
          {desc &&
            desc.map((d: any, i: Key | null | undefined) => (
              <li key={i} className="mb-0.5">
                {d}
              </li>
            ))}
        </ul>
        {skills && (
          <div className="flex items-start space-x-2">
            <p className="text-lg text-gray-500 font-medium">*</p>
            <p className="text-sm text-gray-400">{skills}</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Experience;
