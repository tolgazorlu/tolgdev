import React from "react";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Profile from "../../assets/tolgazorlu.jpg";

const footerLinks = [
  { title: "Home", href: "/" },
  {
    title: "Youtube",
    href: "https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA",
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="rounded-lg m-4">
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img
              className="w-6 h-6 rounded-full ring-4 ring-accent dark:ring-secondary mr-2"
              src={Profile}
              alt="Bordered avatar"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-aubette tracking-wider">
              TOLGA ZORLU
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
            {footerLinks.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.href} className="mr-4 hover:underline md:mr-6 ">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2023{" "}
            <a className="hover:underline font-aubette tracking-wider">
              TOLGA ZORLU™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA"
              className="hover:text-accent "
            >
              <AiFillYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tolgazorlu/"
              className="hover:text-accent "
            >
              <AiFillGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tolgazorlu/"
              className="hover:text-accent "
            >
              <AiFillLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
