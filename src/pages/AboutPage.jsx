import React from "react";
import Profile from "../assets/tolgazorlu.jpg";

export default function AboutPage() {
  return (
    <div className="h-[80vh] px-4 w-full flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="lg:w-1/4">
        <img
          className="w-full h-full rounded-full ring-4 ring-accent"
          src={Profile}
          alt="Bordered avatar"
        />
      </div>
      <div className="lg:w-1/4">
        <div className="text-3xl font-bold">
          Tolga Zorlu<br></br>
          <span className="text-xl ">Jr.Software Engineer</span>
        </div>
        <br></br>
        <div>
          I am 24 years old. I am interested about web and mobile technologies.
          I currently developing small projects with Nodejs, Express, MongoDB
          and React in Turkey.
        </div>
      </div>
    </div>
  );
}
