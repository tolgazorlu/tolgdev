import React from "react";
import Card from "./Card";

const works = [
  {
    title: "DACO",
    desc: "DACO - Where Challenges Ignite Brilliance! ...",
    href: "https://github.com/tolgazorlu/daco",
    imgUrl:
      "https://github.com/tolgazorlu/daco/blob/main/daco-banner.png?raw=true",
  },
  {
    title: "BIGBANG SPACE C.",
    desc: "Building Space Commerce using Mern and Typescript.",
    href: "https://github.com/tolgazorlu/tolgazorlu-portfolio",
    imgUrl:
      "https://github.com/tolgazorlu/bigbang/blob/main/space%20commerce.png?raw=true",
  },
  {
    title: "WEB3 TODO",
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
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
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
