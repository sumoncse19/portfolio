"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { merienda } from "@/app/fonts";
import logo from "@/public/logo.png";

export default function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  const navs = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "testimonials",
    "contact",
  ];

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      }border-gray-200 z-30 min-w-full flex flex-col fixed`}
    >
      <nav className="lg:w-11/12 max-w-[1220px] w-full md:px-6 lg:px-0 2xl:px-0 mx-auto py-4 hidden lg:flex items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-2 font-bold">
          <div className="h-10 w-10">
            <Image src={logo} alt="logo" priority></Image>
          </div>
          <span className={`${merienda.className} text-gray-700`}>
            Md. Sumon
          </span>
        </Link>

        <ul className="flex items-center gap-8">
          {navs.slice(0, 6).map((e, i) => (
            <li key={i}>
              <Link
                className="hover:text-violet-700 transition-colors capitalize cursor-pointer"
                href={`#${e}`}
              >
                {e}
              </Link>
            </li>
          ))}
          <Link
            href="#contact"
            onClick={() => setNavCollapse(true)}
            className="hover:text-violet-700 transition-colors capitalize cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </nav>

      <nav className="font-bold p-4 flex lg:hidden items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-2 font-bold">
          <div className="w-8 h-8">
            <Image src={logo} alt="logo"></Image>
          </div>
          <span className={`${merienda.className} text-gray-700`}>
            Md. Sumon
          </span>
        </Link>
        <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
      </nav>

      <div
        className={`flex min-h-screen w-screen absolute lg:hidden top-0 ${
          !navCollapse ? "right-0" : "right-[-100%]"
        } bottom-0 z-50 ease-in duration-300`}
      >
        <div
          className="w-1/4 md:w-2/4"
          onClick={() => setNavCollapse(true)}
        ></div>

        <div className="flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm w-3/4 md:w-2/4">
          <CgClose
            className="self-end my-2"
            size={20}
            onClick={() => setNavCollapse(true)}
          />

          {navs.slice(0, 6).map((e) => (
            <Link
              key={e}
              className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
              href={`#${e}`}
              onClick={() => setNavCollapse(true)}
            >
              {e}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setNavCollapse(true)}
            className="hover:text-purple-600 py-1.5 px-4 rounded transition-colors capitalize cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
