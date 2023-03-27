import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Profile from '../../assets/tolgazorlu.jpg'

const footerLinks = [
  {title: "Home", href: "/"},
  {title: "Blog", href: "/blog"},
  {title: "About", href: "/about"},
  {title: "Contact", href: "/contact"},
]


export default function Footer() {
  return (
    <footer className="rounded-lg m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img
              className="w-6 h-6 rounded-full ring-4 ring-primary dark:ring-secondary mr-2"
              src={Profile}
              alt="Bordered avatar"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-700 dark:text-slate-100">
              Tolga Zorlu
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerLinks.map((item,index) => {
              return(
                <li key={index}>
                <a href={item.href} className="mr-4 hover:underline md:mr-6 ">
                  {item.title}
                </a>
              </li>
              )
            })}
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
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-secondary"
            >
              <AiFillYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tolgazorlu/"
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-secondary"
            >
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tolgazorlu/"
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-secondary"
            >
              <AiFillLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
