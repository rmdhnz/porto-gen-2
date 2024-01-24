import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaGit } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaFigma,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiCodeigniter,
  SiWebpack,
  SiMysql,
} from "react-icons/si";
export default function About() {
  return (
    <section className="w-full dark:bg-slate-900 flex px-8 py-32 justify-center">
      <div className="container">
        <h1 className="font-monumen px-4 text-primary text-3xl">About Me</h1>
        <div className="flex flex-wrap">
          <div className="mt-5 w-full px-4 md:w-1/2">
            <h3 className="font-poppins font-semibold text-slate-400">
              Your Network is Your{" "}
              <span className="text-slate-900 dark:text-white">Net Worth</span>
            </h3>
            <p className="text-justify font-poppins my-3 dark:text-white">
              An ITS Electrical Engineering student from Palembang, South
              Sumatra. Developing websites both front end and backend. Also
              interested in learning machine learning such as Neural Network,
              Fuzzy, Computer Vision, etc
            </p>
            <div className="dark:text-white flex flex-wrap gap-2 justify-around text-3xl">
              <FaHtml5 />
              <FaCss3 />
              <FaJs />
              <FaBootstrap />
              <SiTailwindcss />
              <SiCodeigniter />
              <FaPython />
              <FaPhp />
              <FaReact />
              <FaFigma />
              <SiMysql />
              <FaGitAlt />
              <SiWebpack />
            </div>
          </div>
          <div className="mt-5 w-full px-4 md:w-1/2">
            <h1 className="font-poppins text-2xl font-bold dark:text-white">
              Let's Get Mutual
            </h1>
            <p className="text-justify font-poppins mt-3 dark:text-white">
              let's get to know each other and get closer to me through
            </p>
            <div className="mt-3 dark:text-white  flex gap-2">
              <a
                href="https://github.com/rmdhnz/"
                target="_blank"
                className="border-2 hover:cursor-pointer hover:bg-primary border-black dark:border-white rounded-full p-1"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/fadhlyrmdhnz/"
                target="_blank"
                className="border-2 hover:cursor-pointer hover:bg-primary border-black dark:border-white rounded-full p-1"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/fadhly-ramadhan/"
                target="_blank"
                className="border-2 hover:cursor-pointer hover:bg-primary border-black dark:border-white rounded-full p-1"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
