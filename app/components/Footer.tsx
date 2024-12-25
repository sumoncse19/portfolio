"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  const socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/sumoncse19/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/sumoncse19",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "/",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      link: "/",
      icon: <BsTwitterX />,
    },
  ];

  return (
    <footer className="w-full  bg-white text-gray-500 dark:text-gray-300">
      <div className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between xl:justify-center items-center">
        <p className="text-sm mt-2 md:mt-0">
          <span className="animate-pulse"> © </span>
          All Rights Reserved by
          <span className="text-violet-600"> Md. Sumon</span>
        </p>

        <div className="flex xl:hidden items-center gap-2">
          {socials.map((s) => (
            <Link
              key={s.id}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors"
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
