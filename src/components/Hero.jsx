import { motion } from "framer-motion";

export default function Example() {
  return (
    <main className="snap-center" id="home">
      <div className="relative px-6 lg:px-8 z-0">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              React Three Fiber'da GLTF modeli kullanmak.{" "}
              <a
                href="https://www.youtube.com/watch?v=3iPZCljw2l8"
                className="font-semibold text-indigo-700"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Watch video <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-700 bg-gradient-to-r to-amber-300 from-yellow-400 rounded-xl p-2 sm:text-6xl">
              Tolga Zorlu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am interested about web and mobile technologies. I currently
              developing small projects with Nodejs, Express, MongoDB and React.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://drive.google.com/file/d/1IKD5QtKgBeURHlvYk-jIUGYGpEQZrsTD/view?usp=sharing"
                  className="rounded-md bg-amber-300 px-3.5 py-1.5 text-base font-semibold leading-7 text-slate-700 shadow-sm hover:bg-slate-700 hover:text-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
            <div className="flex justify-center items-center h-48">
              <div className="animate-bounce text-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
