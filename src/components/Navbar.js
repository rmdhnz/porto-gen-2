import React, { useState } from "react";
import logo from "../img/logo-web.png";
import { FaMoon as Moony } from "react-icons/fa";
import { IoIosSunny as Sunny } from "react-icons/io";
export default function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const html = document.querySelector("html");
  const toDark = () => {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };
  const toLight = () => {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  };
  const selectedTheme = localStorage.getItem("theme");
  if (selectedTheme === "dark") {
    toDark();
  }

  return (
    <nav className="w-full px-8 flex items-center justify-between bg-california dark:bg-slate-950 shadow-md sticky top-0 z-[999]">
      <div className="">
        <img
          src={logo}
          alt=""
          className="h-[50px] shadow-lg rounded-full shadow-black dark:shadow-primary"
        />
      </div>
      <div className="flex items-center justify-between">
        <ul className="flex text-white">
          <li className="h-[50px] flex items-center">
            <a
              href="/"
              className="h-full font-poppins px-2 font-semibold flex items-center hover:bg-black hover:text-primary dark:hover:text-white dark:hover:bg-primary"
            >
              Dashboard
            </a>
          </li>
          <li className="h-[50px] flex items-center">
            <a
              href="/project"
              className="h-full font-poppins px-2 font-semibold flex items-center hover:bg-black hover:text-primary dark:hover:text-white dark:hover:bg-primary"
            >
              Project
            </a>
          </li>
        </ul>
        <div
          className="flex hover:cursor-pointer text-white relative dark:border-primary border-2 rounded-full w-14 justify-between py-1"
          onClick={() => {
            setDark(!dark);
            if (dark) {
              toLight();
            } else {
              toDark();
            }
          }}
        >
          <div>
            <Sunny className="dark:text-primary" />
          </div>
          <div
            className={`w-1/2 ${
              dark ? "translate-x-[100%]" : "translate-x-0"
            } top-0 h-full rounded-full absolute bg-white duration-500 opacity-70 `}
          ></div>
          <div>
            <Moony className="dark:text-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
}
