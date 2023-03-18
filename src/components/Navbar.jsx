import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
  { name: "Youtube", href: "https://www.youtube.com/@tolgzorlu/videos" },
  { name: "Blog", href: "http://kiraathane.dev/" },
  { name: "Github", href: "https://github.com/tolgazorlu?tab=repositories" },
  { name: "Linkedin", href: "https://www.linkedin.com/in/tolgazorlu/" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 animate-spin">
            <span className="sr-only">tolgdev</span>
            <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#21c55d"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clipRule="evenodd"
              />
            </svg>
            </div>
          </a>
          <div>
            <a className="ml-2 text-md font-semibold leading-6 text-gray-500">Tolga Zorlu</a>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold leading-6 text-gray-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://export-download.canva.com/5rwGs/DAEYKx5rwGs/1079/0-46456010335.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230205T092106Z&X-Amz-Expires=19974&X-Amz-Signature=a21ec92e505a1ea1889dff3a5386d22ab2ccc6a4d2759736774c8826fcad41f8&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Tolga%2520Zorlu.pdf&response-expires=Sun%2C%2005%20Feb%202023%2014%3A54%3A00%20GMT" className="text-md font-semibold leading-6 text-gray-500">
            Download CV
          </a>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel
          focus="true"
          className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 animate-spin">
            <span className="sr-only">tolgdev</span>
            <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                clipRule="evenodd"
              />
            </svg>
            </div>
            
          </a>
          <div>
            <a className="ml-2 text-md font-semibold leading-6 text-gray-500">Tolga Zorlu</a>
          </div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
