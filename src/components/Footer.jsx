import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className="bg-slate-200">
      <footer className="rounded-lg shadow  m-4">
        <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#fcd34d"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clipRule="evenodd"
              />
            </svg>
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
                <a href="#experiences" className="mr-4 hover:underline md:mr-6 ">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Tolga Zorlu™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA" class="text-red-500 hover:text-amber-500">
                    <AiFillYoutube className="w-6 h-6"/>
                </a>
                <a href="https://www.linkedin.com/in/tolgazorlu/" class="text-black-500 hover:text-amber-500">
                  <AiFillGithub className="w-6 h-6"/>
              </a>
              <a href="https://www.linkedin.com/in/tolgazorlu/" class="text-blue-500 hover:text-amber-500">
                  <AiFillLinkedin className="w-6 h-6"/>
              </a>
          </div>
      </div>
        </div>
      </footer>
    </div>
  );
}
