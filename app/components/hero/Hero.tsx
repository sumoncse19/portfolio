import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import TypeWrite from "./TypeWrite";
import hero from "@/public/hero/herobg.jpg";
import waveHand from "@/public/hero/waving-hand.gif";

const Hero = () => {
  return (
    <section id="home" className={`relative w-full mx-auto overflow-hidden`}>
      <div className="absolute top-0 bottom-0 -z-10 h-full w-full">
        <Image src={hero} fill alt="hero image" />
      </div>

      <div className="py-16 lg:py-48 2xl:max-w-[1560px] mx-auto flex flex-col-reverse lg:flex-row justify-around gap-10 lg:gap-0">
        <div className="flex flex-col gap-4 md:gap-6 text-left lg:w-1/2 2xl:w-1/3 mx-4 md:mx-6 xl:mx-0">
          <div className="flex items-center gap-1">
            <Image src={waveHand} alt="waving-hand" width={30} height={30} />
            <p className="text-lg md:text-xl mt-2 md:mt-1.5">Hey</p>
          </div>
          <h1 className="text-3xl md:text-5xl text-gray-800 font-bold relative">
            I&apos;m Md. Sumon
          </h1>
          <TypeWrite />
          <p className="text-sm md:text-base text-gray-600">
            I focus on developing user-friendly web applications that meet the
            clients requirements, with attention to detail, scalability, and
            performance.
          </p>

          <Link
            className="w-fit text-sm md:text-base py-2 px-4 cursor-pointer flex items-center gap-1 rounded-md bg-violet-600 hover:bg-violet-700 transition-colors group text-white"
            href={"#about"}
          >
            About Me
            <IoIosArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="relative mx-auto lg:mx-0 mt-12 md:mt-16 lg:mt-0">
          <div className="w-56 h-56 md:w-80 md:h-80 lg:-translate-x-16">
            <Image
              alt="avatar"
              width={1000}
              height={1000}
              className="rounded-full w-full h-full object-cover"
              src="/hero/hero.png"
              priority
            />
          </div>

          <div className="absolute grid -top-6 -left-12 lg:-top-14 lg:-left-32 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full place-items-center hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src="/hero/js.webp"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid top-0 -right-12 lg:-right-4 w-14 h-14 bg-white rounded-full place-items-center hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-8 w-8 md:h-10 md:w-10 object-cover"
              src="/hero/vue.webp"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid bottom-[4rem] md:bottom-24 -right-16 md:-right-20 lg:bottom-[8.5rem] lg:-right-12 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full place-items-center hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-6 w-6 md:h-10 md:w-10 object-cover"
              src="/hero/react.webp"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute grid -bottom-10 -right-8 lg:-bottom-0 lg:right-6 w-14 md:w-16 h-14 md:h-16 bg-white rounded-full place-items-center hover:shadow-lg transition-shadow">
            <Image
              alt="tech-stack"
              className="h-10 w-10 object-cover"
              src="/hero/node-js.webp"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
