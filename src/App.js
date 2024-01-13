import React from "react";
import img from "./img/code.png";
export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-52 h-52 ">
        <img src={img} alt="" className="rounded-lg" />
      </div>
      <h1 className="text-5xl font-sans font-semibold">
        The quick brown fox jumps over the lazy dog
      </h1>
    </div>
  );
}
