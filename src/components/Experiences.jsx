import React from "react";

export default function Experiences() {
  return (
    <div id="experiences" className="bg-slate-200 h-screen w-full flex flex-col justify-center items-center snap-center gap-10 p-10">
      <div>
        <span className="text-2xl font-bold text-slate-700">
          My Experiences
        </span>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            October 2021 - February 2022 | INTERN
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">
            PATH Product and Software House
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I worked on A&D Team and fixed front-end problems. <br></br> I have
            experienced a lot of things about team working, responsibilities,
            communication skills <br></br>I have experienced woocommerce and
            shopify e-commerce system and made e-commerce websites.
          </p>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2021 - July 2021 | INTERN
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">
            SNI
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Mobile App Development <br></br> I learned things about fullstack
            developement and developed small music player mobile project with
            nodejs, express, mongodb and flutter
          </p>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2021 - August 2021 | Junior Software Engineer
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-700">
            Mimix | ITU Cekirdek Startup
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Machine Learning Research with AWS SageMaker<br></br> Mobile App
            Development with React Native, Amazon Web Services (AWS Route52,
            Amplify)
          </p>
        </li>
      </ol>
    </div>
  );
}
