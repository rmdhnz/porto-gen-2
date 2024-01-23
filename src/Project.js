import React from "react";
import cselogo from "./img/cselogo.png";
import Card from "./components/Card";
import { FaGithub } from "react-icons/fa";
import ieee from "./img/IEEE_footer.png";
import logo_web from "./img/logo-web.png";
import ieeebig from "./img/background_ieeebig.png";
export default function Project() {
  return (
    <section className="w-full px-4 min-h-screen dark:bg-slate-900 py-5">
      <h1 className="text-center dark:text-white text-wrap font-semibold text-3xl font-monumen">
        My Project & Portofolio
      </h1>
      <div className="w-full flex justify-center flex-wrap">
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={ieee} title="IEEE ITS SB">
              <div className="flex justify-around gap-4">
                <a
                  href="https://ieee-its-sb.vercel.app/"
                  target="_blank"
                  className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-800"
                >
                  View
                </a>
                <a
                  href=""
                  className="p-2 flex justify-center items-center bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={ieeebig} title="IEEE BIG 2023">
              <div className="flex justify-around gap-4">
                <a
                  href="https://ieeebig-23.vercel.app//"
                  target="_blank"
                  className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-800"
                >
                  View
                </a>
                <a
                  href=""
                  className="p-2 flex justify-center items-center bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={logo_web} title="Portofolio Web">
              <div className="flex justify-around gap-4">
                <a
                  href="https://divspan-rmdhnz.vercel.app/"
                  target="_blank"
                  className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-800"
                >
                  View
                </a>
                <a
                  href=""
                  className="p-2 flex justify-center items-center bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </Card>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={logo_web} title="Portofolio Web GEN 2">
              <div className="flex justify-around gap-4">
                <a
                  href="/"
                  target="_blank"
                  className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-800"
                >
                  View
                </a>
                <a
                  href=""
                  className="p-2 flex justify-center items-center bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={cselogo} title="Control System Website">
              <div className="flex justify-around gap-4">
                <a
                  href="http://cse.ee.its.ac.id/"
                  target="_blank"
                  className="py-2 px-4 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-800"
                >
                  View
                </a>
                <a
                  href=""
                  className="p-2 flex justify-center items-center bg-blue-600 text-white font-semibold hover:bg-blue-800 rounded-md"
                >
                  <FaGithub className="text-3xl" />
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
