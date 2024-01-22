import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
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
            <p className="text-justify font-poppins mt-3 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad
              reiciendis voluptatibus amet eveniet aperiam earum consequuntur
              quibusdam veniam in tenetur non doloremque excepturi aspernatur,
              sunt sit autem saepe totam!
            </p>
          </div>
          <div className="mt-5 w-full px-4 md:w-1/2">
            <h1 className="font-poppins text-2xl font-bold dark:text-white">
              Let's Get Mutual
            </h1>
            <p className="text-justify font-poppins mt-3 dark:text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-3 dark:text-white  flex gap-2">
              <div className="border-2 hover:cursor-pointer hover:bg-primary border-black dark:border-white rounded-full p-1">
                <FaGithub className="text-3xl" />
              </div>
              <div className="border-2 hover:cursor-pointer hover:bg-primary border-black dark:border-white rounded-full p-1">
                <FaInstagram className="text-3xl" />
              </div>
              <div className="border-2 hover:cursor-pointer hover:bg-primary border-black dark:border-white rounded-full p-1">
                <FaLinkedin className="text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
