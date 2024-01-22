import React, { useState } from "react";
import profile_pic from "./img/aslab-nobg.png";
import { FaUserFriends } from "react-icons/fa";
import { IoIosCloseCircle as Close } from "react-icons/io";
export default function Jumbotron() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className="w-full dark:bg-slate-900 flex justify-center min-h-screen">
        <div className="container z-[99] p-8   md:p-16">
          <div className="flex justify-center flex-wrap">
            <div className="mt-3 md:w-1/2">
              <h3 className="font-poppins font-semibold text-lg dark:text-white">
                Hi Visitor 🖐,My name is{" "}
              </h3>
              <h1 className="text-2xl font-monumen uppercase dark:text-primary">
                Fadhly Ramadhan
              </h1>
              <p className="font-mono text-base text-slate-400">
                One day, I'll have{" "}
                <span className="text-slate-800 font-semibold dark:text-white">
                  my own Company
                </span>
              </p>
              <p className="mt-5 font-poppins text-justify dark:text-white">
                An Electrical Engineering student from ITS, Control and
                Automation laboratory assistant, Web Developer, and has the
                ambition to build a business empire
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="mt-3 group overflow-hidden text-white font-semibold relative flex items-center py-2 px-8 bg-primary rounded-md"
                type="button"
              >
                <div className="absolute btn-modal -translate-x-[200%] group-hover:translate-x-0 duration-500">
                  Connect Me
                </div>
                <div
                  className="w-1/4 absolute top-0 left-0 bottom-0 flex items-center justify-center rounded-md group-hover:translate-x-[300%] duration-500
            "
                >
                  <FaUserFriends />
                </div>
                <div className="group-hover:translate-x-[200%] duration-500">
                  Connect Me
                </div>
              </button>
            </div>
            <div className="relative md:w-1/2 flex justify-center items-center">
              <img
                src={profile_pic}
                className="w-[250px] md:w-[350px] rounded-full mx-auto"
                alt="Fadhly"
              />
              <span className="absolute -bottom-10 -z-10">
                <svg
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FBAE3C"
                    d="M36.8,-44.7C47.2,-35.1,54.8,-23.1,57.3,-9.9C59.9,3.3,57.5,17.5,50.2,27.8C42.9,38.2,30.7,44.6,16.6,53C2.4,61.4,-13.8,71.8,-29.2,70.4C-44.6,69,-59.3,55.9,-64.1,40.5C-68.8,25.1,-63.5,7.4,-59.9,-10.1C-56.3,-27.6,-54.2,-44.9,-44.5,-54.6C-34.8,-64.3,-17.4,-66.3,-2.1,-63.8C13.2,-61.3,26.4,-54.3,36.8,-44.7Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 bg-black/60 z-[999] ${
          showModal ? "" : "hidden"
        }`}
      >
        <div className="w-1/2 bg-white dark:bg-slate-600 rounded-md font-poppins">
          <div className="p-3 flex justify-between items-center">
            <p className="dark:text-white">Connect Me</p>
            <Close
              onClick={() => setShowModal(false)}
              className="text-3xl hover:cursor-pointer dark:text-white dark:hover:text-primary hover:text-primary"
            />
          </div>
          <hr className="border-t-4 border-t-primary" />
          <div className="p-3">
            <p className="text-justify dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              laudantium, accusamus dicta eveniet, distinctio facilis,
              perferendis possimus consequuntur praesentium dolore repudiandae
              voluptas a iure saepe dolor aperiam voluptate? Labore, quas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
