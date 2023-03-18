export default function Example() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              React Three Fiber'da GLTF modeli kullanmak.{" "}
              <a
                href="https://www.youtube.com/watch?v=3iPZCljw2l8"
                className="font-semibold text-slate-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Watch video <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-100 bg-slate-600 rounded-xl p-2 sm:text-6xl">
              Tolga Zorlu
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I am interested about web and mobile technologies. I currently
              developing small projects with Nodejs, Express, MongoDB and React.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/file/d/1IKD5QtKgBeURHlvYk-jIUGYGpEQZrsTD/view?usp=sharing"
                className="rounded-md bg-slate-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-100 shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
