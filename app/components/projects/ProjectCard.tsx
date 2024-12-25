"use client";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Project = ({ name, image, techStack, links }: any) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex flex-col gap-2 bg-white rounded-lg p-4"
    >
      <div className="relative group rounded-lg bg-violet-50">
        <Image
          alt={name}
          className="max-w-full h-[196px] max-h-full object-fit object-top rounded-lg"
          src={image}
        />
        {links.visit.trim() && (
          <div className="absolute top-0 scale-x-0 group-hover:scale-100 transition-transform origin-left duration-200 ease-linear bg-gray-800 bg-opacity-60 w-full h-full rounded-lg flex items-center gap-4 justify-center">
            {links.visit.trim() && (
              <Link
                href={links.visit}
                target="_blank"
                className="bg-white text-black p-2 rounded-lg hover:bg-black hover:text-white transition-all"
              >
                <BiLinkExternal size={20} />
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="my-2 flex flex-col gap-3">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-sm text-gray-400">
          {" "}
          <span className="font-medium">Tech Stack:</span> {techStack}
        </p>
      </div>
    </motion.div>
  );
};

export default Project;
