import React from "react";
import img from "./img/aslab.JPG";
import Card from "./components/Card";
export default function Project() {
  return (
    <section className="w-full px-4 min-h-screen dark:bg-slate-900 py-5">
      <h1 className="text-center dark:text-white text-wrap font-semibold text-3xl font-monumen">
        My Project & Portofolio
      </h1>
      <div className="w-full flex justify-center flex-wrap">
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={img} title="First Project">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              consequuntur fugit libero soluta quae perferendis!
            </Card>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={img} title="First Project">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              consequuntur fugit libero soluta quae perferendis!
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={img} title="First Project">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              consequuntur fugit libero soluta quae perferendis!
            </Card>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={img} title="First Project">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              consequuntur fugit libero soluta quae perferendis!
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={img} title="First Project">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              consequuntur fugit libero soluta quae perferendis!
            </Card>
          </div>
          <div className="w-full sm:w-2/3 lg:w-1/3">
            <Card img={img} title="First Project">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
              consequuntur fugit libero soluta quae perferendis!
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
