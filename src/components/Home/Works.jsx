import React from "react";
import Card from "./Card";

const works = [
  {
    title: "Deprem Dayanisma",
    desc: " Due to the 7.7 and 7.6 magnitude earthquakes ...",
    href: "https://depremdayanisma.vercel.app/",
    imgUrl:
      "https://raw.githubusercontent.com/tolgazorlu/depremdayanisma/main/Screenshot%202023-03-18%20at%2015.46.12.png",
  },
  {
    title: "Parallax Portfolio",
    desc: " Building Parallax Portfolio using React and Tailwind.",
    href: "https://github.com/tolgazorlu/tolgazorlu-portfolio",
    imgUrl:
      "https://github.com/tolgazorlu/tolgazorlu-portfolio/raw/main/portfolio.gif",
  },
  {
    title: "Web3 Todo",
    desc: "Building Web3 Todo using React, Tailwind, Solidity.",
    href: "https://github.com/tolgazorlu/react-solidity-todo",
    imgUrl:
      "https://github.com/tolgazorlu/react-solidity-todo/blob/update/todo.gif?raw=true",
  },
];

export default function Works() {
  return (
    <div
      id="works"
      className="lg:h-screen w-full flex flex-col justify-center items-center snap-center gap-10"
    >
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-700 dark:text-slate-100">
        My Works
      </h2>

      <div className="flex flex-col lg:flex-row gap-5">
        {works.map((item, index) => {
          return (
            <Card
              title={item.title}
              desc={item.desc}
              href={item.href}
              url={item.imgUrl}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
