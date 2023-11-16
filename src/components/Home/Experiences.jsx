import React from "react";

export default function Experiences() {
  return (
    <div
      id="experiences"
      className="w-full flex flex-col justify-center items-center snap-center gap-10 py-20 px-6"
    >
      <h2 className="text-4xl tracking-tight font-extrabold text-center">
        My Experiences
      </h2>

      <ol className="relative border-l">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-accent dark:bg-secondary rounded-full mt-1.5 -left-1.5 border border-accent dark:border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-accent">
            October 2021 - February 2022 | INTERN
          </time>
          <h3 className="text-lg font-semibold">
            PATH Product and Software House
          </h3>
          <p className="mb-4 font-normal text-base-content/50">
            I worked on A&D Team and solved front-end problems. <br></br> I have
            experienced a lot of things about team working, responsibilities,
            communication skills <br></br>I have experienced woocommerce and
            shopify e-commerce system and made e-commerce websites.
          </p>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-accent dark:bg-secondary rounded-full mt-1.5 -left-1.5 border border-accent dark:border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-accent">
            June 2021 - July 2021 | INTERN
          </time>
          <h3 className="text-lg font-semibold">SNI</h3>
          <p className="mb-4 font-normal text-base-content/50">
            Mobile App Development <br></br> I learned things about fullstack
            developement and developed small music player mobile project with
            nodejs, express, mongodb and flutter
          </p>
        </li>

        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-accent dark:bg-secondary rounded-full mt-1.5 -left-1.5 border border-accent dark:border-secondary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-accent">
            August 2021 - August 2021 | Junior Software Engineer
          </time>
          <h3 className="text-lg font-semibold">
            Mimix | ITU Cekirdek Startup
          </h3>
          <p className="mb-4 font-normal text-base-content/50">
            Machine Learning Research with AWS SageMaker<br></br> Mobile App
            Development with React Native, Amazon Web Services (AWS Route52,
            Amplify)
          </p>
        </li>
      </ol>
    </div>
  );
}
