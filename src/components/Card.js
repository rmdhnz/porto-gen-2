import React from "react";
export default function Card(props) {
  return (
    <div className="flex w-full rounded-lg overflow-hidden shadow-lg shadow-slate-400 dark:shadow-black bg-primary dark:text-white mt-5">
      <img src={props.img} className="w-1/4" alt="foto" />
      <div className="p-2">
        <h1 className="font-bold capitalize text-xl font-poppins mb-3">
          {props.title}
        </h1>
        <p className="text-justify">{props.children}</p>
      </div>
    </div>
  );
}
