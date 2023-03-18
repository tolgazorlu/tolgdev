import React from "react";
import Card from "./Card";

const works = [
  {
    title: "Deprem Dayanisma",
    desc: " Due to the 7.7 and 7.6 magnitude earthquakes that took place in Turkey, science and technology-oriented channels provide support to earthquake victims.",
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

export default function Portfolio() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center snap-center gap-10">
      <div>
        <span className="text-2xl font-bold text-slate-600">My Works</span>
      </div>

      <div className="flex flex-row gap-5">
        {works.map((item) => {
          return (
            <Card
              title={item.title}
              desc={item.desc}
              href={item.href}
              url={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
