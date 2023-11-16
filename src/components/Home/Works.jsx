import React from "react";
import Card from "./Card";
import Daco from '../../assets/daco.png';
import Bigbang from '../../assets/space-commerce.png';
import RST from '../../assets/rst.gif'

const works = [
  {
    title: "DACO",
    desc: "DACO - Where Challenges Ignite Brilliance! ...",
    href: "https://daco.space",
    imgUrl: Daco
  },
  {
    title: "BIGBANG SPACE C.",
    desc: "Building Space Commerce using Mern and Typescript.",
    href: "https://github.com/tolgazorlu/bigbang",
    imgUrl: Bigbang
  },
  {
    title: "WEB3 TODO",
    desc: "Building Web3 Todo using React, Tailwind, Solidity.",
    href: "https://github.com/tolgazorlu/react-solidity-todo",
    imgUrl: RST
  },
];

export default function Works() {
  return (
    <div
      id="works"
      className="w-full flex flex-col justify-center items-center snap-center gap-10 py-20"
    >
      <h2 className="mb-4 text-4xl tracking-wider font-extrabold text-center">
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
