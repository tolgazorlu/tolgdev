import React from "react";
import Profile from "../assets/tolgazorlu.jpg";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-14 md:h-screen px-4 w-full flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="lg:w-1/4">
        <img
          className="w-full h-full rounded-full ring-4 ring-primary dark:ring-secondary"
          src={Profile}
          alt="Bordered avatar"
        />
      </div>
      <div className="lg:w-1/4">
        <div className="text-3xl text-slate-700 dark:text-slate-300 font-bold">Tolga Zorlu<br></br><span className="text-xl text-slate-500 dark:text-slate-400">Jr.Software Engineer</span></div>
        <br></br>
        <div className="text-slate-600 dark:text-slate-300">I am 23 years old. I am interested about web and mobile technologies. I currently developing small projects with Nodejs, Express, MongoDB and React in Turkey.</div>
      </div>
    </div>
  );
}
