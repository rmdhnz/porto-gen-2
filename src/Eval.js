import React from "react";
import { ImSpinner2 as Spinner } from "react-icons/im";
export default function Eval() {
  let scriptURL =
    "https://script.google.com/macros/s/AKfycbxXfi_CvrRf5FO0xcNp6N-7RwPS7hcd4J3rsmkozSkum1iCd2rukAMwuSSsXqp-NSuFzQ/exec";
  return (
    <section className="w-full min-h-screen dark:bg-slate-900">
      <h1 className="text-center text-black dark:text-white font-monumen pt-5 text-3xl lg:text-5xl">
        Form Evaluasi
      </h1>
      <hr className="w-[250px] mx-auto border-t-4 border-t-primary dark:border-t-white" />
      <form
        action=""
        id="myform"
        onSubmit={(e) => {
          document.querySelector(".btnLoading").classList.toggle("hidden");
          document.querySelector(".btnLoading").classList.toggle("flex");
          document.querySelector(".btnSubmit").classList.toggle("hidden");
          e.preventDefault();
          fetch(scriptURL, {
            method: "POST",
            body: new FormData(document.getElementById("myform")),
          })
            .then((response) => {
              console.log("Success!", response);
              document.getElementById("myform").reset();
              document.querySelector(".btnLoading").classList.toggle("hidden");
              document.querySelector(".btnLoading").classList.toggle("flex");
              document.querySelector(".btnSubmit").classList.toggle("hidden");
            })
            .catch((error) => console.error("Error!", error.message));
        }}
        className="px-4 mt-3 font-poppins"
      >
        <div className="sm:flex w-full">
          <div className="mb-3 sm:w-1/2 px-4">
            <label htmlFor="" className="text-black block dark:text-white">
              Tingkat Kedisiplinan Asisten (0-10)
            </label>
            <input
              type="number"
              step={0.5}
              className="block bg-primary dark:bg-white w-full p-2 rounded-md focus:shadow-lg focus:shadow-blue-600 focus:border-0"
              name="disiplin"
            />
          </div>
          <div className="mb-3 sm:w-1/2 px-4">
            <label htmlFor="" className="text-black block dark:text-white">
              Seberapa ramah asisten (0-10):
            </label>
            <input
              type="number"
              step={0.5}
              name="ramah"
              className="block bg-primary dark:bg-white w-full p-2 rounded-md focus:shadow-lg focus:shadow-blue-600 focus:border-0"
            />
          </div>
        </div>
        <div className="sm:flex w-full">
          <div className="mb-3 sm:w-1/2 px-4">
            <label htmlFor="" className="text-black block dark:text-white">
              Tingkat Kepahaman Asisten (0-10)
            </label>
            <input
              type="number"
              step={0.5}
              name="paham"
              className="block bg-primary dark:bg-white w-full p-2 rounded-md focus:shadow-lg focus:shadow-blue-600 focus:border-0"
            />
          </div>
          <div className="mb-3 sm:w-1/2 px-4">
            <label htmlFor="" className="text-black block dark:text-white">
              Kritik dan Saran untuk asisten
            </label>
            <textarea
              type="text"
              name="pesan"
              className="block bg-primary dark:bg-white w-full p-2 rounded-md focus:shadow-lg focus:shadow-blue-600 focus:border-0"
            />
          </div>
        </div>
        <button
          type="submit"
          className="ml-4 mt-3 btnSubmit py-2 px-4 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-800"
        >
          Submit
        </button>
        <button
          className="ml-4 hidden py-2 px-4 gap-2 btnLoading items-center rounded-md bg-blue-300 text-white font-bold"
          disabled
        >
          <Spinner className="animate-spin" /> Loading
        </button>
      </form>
    </section>
  );
}
