import React, { useEffect, useState } from "react";
import Profile from "../../assets/tolgazorlu.jpg";
import TolgaZorluPdf from "../../assets/TolgaZorluCV.pdf";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA",
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default function Navbar() {
  const localTheme = JSON.parse(localStorage.getItem("theme"));

  const [theme, setTheme] = useState(localTheme);
  const clickThemeHandler = (e) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    document.getElementById("screen")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className="navbar lg:px-48 font-poppins">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <a className="font-bold" href={item.href}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img className="w-7 rounded-full ring ring-accent" src={Profile} />
          <a className="text-xl font-bold font-aubette">TOLGA ZORLU</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item, index) => {
            return (
              <li key={index}>
                <a className="font-bold text-lg" href={item.href}>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href={TolgaZorluPdf}
          download="TolgaZorluCV"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-accent"
        >
          Download CV
        </a>
        <div className="drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              className="btn btn-ghost swap swap-rotate"
              htmlFor="my-drawer"
            >
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* hamburger icon */}

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {themes.map((item) => {
                return (
                  <li key={item}>
                    <button
                      className={
                        theme === item ? "btn btn-sm btn-accent" : "btn btn-sm"
                      }
                      value={item}
                      onClick={(e) => clickThemeHandler(e)}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
