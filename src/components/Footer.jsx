import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-slate-200">
      <footer className="rounded-lg m-4">
        <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <img
                className="w-6 h-6 rounded-lg mr-2"
                src="https://yt3.ggpht.com/iURlWMrJWQd_biexnGGbXx26yvsDa_y4ZJqsveH3ugoSwIbEaSUq4Hrmg9VxTx9yxEqGOHUq=s108-c-k-c0x00ffffff-no-rj"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-700">
                Tolga Zorlu
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#home" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#works" className="mr-4 hover:underline md:mr-6">
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Experiences
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-slate-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Tolga Zorlu™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA"
                className="text-red-500 hover:text-amber-500"
              >
                <AiFillYoutube className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tolgazorlu/"
                className="text-black-500 hover:text-amber-500"
              >
                <AiFillGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tolgazorlu/"
                className="text-blue-500 hover:text-amber-500"
              >
                <AiFillLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
