import React from "react";
import { motion } from "framer-motion";

export default function Card({ title, desc, href, url }) {
  return (
    <div className="max-w-xs border rounded-lg bg-primary text-primary-content shadow-xl">
      <a href="#">
        <img className="rounded-t-lg w-full h-52" src={url} alt="" />
      </a>
      <div className="p-5 flex flex-col justify-around items-start">
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold font-aubette tracking-wider">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal">{desc}</p>
          <br></br>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a
            href={href}
            className="btn bg-secondary-content border-secondary-content text-secondary hover:bg-secondary-content/50"
          >
            Click more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
