import React from "react";
import Link from "next/link";
import { FaCode, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = () => {
  const socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/sumoncse19/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/sumoncse19/",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://leetcode.com/sumoncse19/",
      icon: <FaCode />,
    },
    {
      id: 4,
      link: "https://www.instagram.com/sumoncse19/",
      icon: <FaInstagram />,
    },
    {
      id: 5,
      link: "https://twitter.com/sumoncse19/",
      icon: <FaSquareXTwitter />,
    },
  ];

  return (
    <section
      id="socials"
      className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20"
    >
      {socials.map((social) => {
        return (
          <Link
            href={social.link}
            target="_blank"
            rel="noreferrer"
            key={social.id}
            className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-violet-700 text-white"
          >
            {social.icon}
          </Link>
        );
      })}
    </section>
  );
};

export default Socials;
