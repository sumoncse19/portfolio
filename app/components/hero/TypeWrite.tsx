"use client";
import Typewriter from "typewriter-effect";

const TypeWrite = () => {
  return (
    <div className="flex flex-row items-start md:items-center gap-1.5">
      <h2 className="text-lg md:text-2xl">I am a</h2>
      <Typewriter
        options={{
          strings: [
            "Full Stack Software Developer",
            "MERN Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "React Developer",
            "Node.js(Express) Developer",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 50,
          wrapperClassName: "text-violet-700 text-lg md:text-2xl font-medium",
          cursorClassName: "text-violet-700 text-lg md:text-2xl",
        }}
      />
    </div>
  );
};

export default TypeWrite;
