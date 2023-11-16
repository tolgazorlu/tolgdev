import { motion } from "framer-motion";

export default function Example() {
  return (
    <main
      className="flex justify-center items-center relative px-6 py-20"
      id="home"
    >
      <div className="mx-auto max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full py-1 px-3 text-sm leading-6 ring ring-primary">
            NextJS ve TailwindCSS kurulum.{" "}
            <a
              href="https://www.youtube.com/watch?v=MUCRr26kDYM"
              className="font-semibold text-primary dark:text-secondary"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Watch video <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-aubette mt-6 text-4xl font-bold bg-primary text-primary-content rounded-xl p-2 sm:text-6xl">
            TOLGA ZORLU
          </h1>
          <p className="mt-6 text-lg leading-8">
            I am interested about web and mobile technologies. I currently
            developing small projects with <span className="">Nodejs</span>,{" "}
            <span className="">Express</span>, <span className="">MongoDB</span>{" "}
            and <span className="">React</span>.
          </p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="btn bg-primary-content border-primary-content text-primary hover:bg-primary-content/50"
              >
                Let's contact!
              </a>
            </div>
          </motion.div>
          <div className="flex justify-center items-center h-24">
            <div className="animate-bounce">
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
    </main>
  );
}
