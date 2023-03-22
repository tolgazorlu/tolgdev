import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [isSended, setIsSended] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iry8ehi",
        "template_bvnal8d",
        form.current,
        "H_UkTD1Hja8fE4XQx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSended(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-slate-200 h-screen mt-[200px] sm:mt-[100px] md:mt-20 lg:mt-0"
    >
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-slate-700">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Do you have a question or you have an idea? Just send a massage!
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="What is your name?"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Your email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="name@mail.com"
              required
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-slate-700">
              Your message
            </label>
            <textarea
              name="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-500"
          >
            Send message
          </button>
          {isSended ? (
            <div
              class="flex p-4 mb-4 text-sm text-green-800 border border-blue-300 rounded-lg bg-blue-50 "
              role="alert"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Message sended!</span> Check your e-mail.
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </div>
    </section>
  );
}
