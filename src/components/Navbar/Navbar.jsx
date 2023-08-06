import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Profile from '../../assets/tolgazorlu.jpg'

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCbQ2CNMwWjNeRDaXoKi9eAA",
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "light" ? "dark" : "light"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <nav
        className="w-full p-6 md:px-32 xl:px-48 flex items-center justify-between z-10 bg-light dark:bg-dark fixed"
        aria-label="Global"
      >
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <div>
              <img
                className="w-6 h-6 rounded-full ring-4 ring-primary dark:ring-secondary"
                src={Profile}
                alt="Bordered avatar"
              />
            </div>
          </a>
          <div>
            <a className="ml-2 text-md font-semibold leading-6 text-slate-700 dark:text-slate-100">
              Tolga Zorlu
            </a>
          </div>
        </div>

        <div className="flex lg:hidden">
          <div>
            <button onClick={changeTheme} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-dark dark:text-light hover:text-primary dark:hover:text-secondary"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </button>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-100"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold leading-6 text-slate-600 hover:text-primary dark:hover:text-secondary dark:text-slate-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex justify-center items-center lg:gap-x-4">
          <div>
            <button onClick={changeTheme} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-dark dark:text-light hover:text-primary dark:hover:text-secondary"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            </button>
          </div>
          <a
          href="#"
            className="text-white dark:text-slate-700 bg-primary dark:bg-secondary hover:bg-secondary hover:text-slate-700 dark:hover:bg-primary dark:hover:text-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Download CV
          </a>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-light dark:bg-dark px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
          <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <div>
              <img
                className="w-6 h-6 rounded-full ring-4 ring-primary dark:ring-secondary"
                src={Profile}
                alt="Bordered avatar"
              />
            </div>
          </a>
          <div>
            <a className="ml-2 text-md font-semibold leading-6 text-slate-700 dark:text-slate-100">
              Tolga Zorlu
            </a>
          </div>
        </div>
            <div>
              <button onClick={changeTheme} className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-dark dark:text-light hover:text-primary dark:hover:text-secondary"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-slate-700 dark:text-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-100 dark:text-slate-700 bg-primary dark:bg-secondary hover:bg-secondary hover:text-slate-700 dark:hover:bg-primary dark:hover:text-slate-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
