export default function TailwindResponsiveDesign() {
    return (
      <div className="font-sans">
        <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50">
          <div className="md:flex">
            <div className="relative md:w-90 md:shrink-0">
              <img
                className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-90"
                src="/images/skyliner34.jpg"
                alt="Devarshi"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-600">
                {/* <svg
                  viewBox="0 0 24 24"
                  className="h-24 w-24"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="2.05" fill="currentColor" />
                  <g fill="none" stroke="currentColor" strokeWidth="1">
                    <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4.2"
                      transform="rotate(60 12 12)"
                    />
                    <ellipse
                      cx="12"
                      cy="12"
                      rx="10"
                      ry="4.2"
                      transform="rotate(120 12 12)"
                    />
                  </g>
                </svg> */}
                <div className="mt-50 text-2xl font-semibold">Nissan Skyline</div>
              </div>
            </div>
            <div className="min-w-0 p-8 lg:p-12">
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                My Interests
              </div>
              <a
                href="#"
                className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
              >
                Cars
              </a>
              <p className="mt-2 text-gray-500">
                I love cars and I love to drive them.
                My favorite car is the Nissan Skyline R34.
              </p>
            </div>
          </div>
        </div>

        <div
          id="wd-ai-responsive"
          className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-emerald-50"
        >
          <div className="md:flex">
            <div className="flex h-48 w-full items-center justify-center bg-slate-900 text-sky-400 md:h-auto md:w-48 md:shrink-0">
              <svg viewBox="0 0 24 24" className="h-24 w-24" aria-hidden="true">
                <circle cx="12" cy="12" r="2.05" fill="currentColor" />
                <g fill="none" stroke="currentColor" strokeWidth="1">
                  <ellipse cx="12" cy="12" rx="10" ry="4.2" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
                </g>
              </svg>
            </div>
            <div className="min-w-0 p-8 lg:p-16">
              <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">
                Case study
              </div>
              <a
                href="#"
                className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
              >
                Finding customers for your new business
              </a>
              <p className="mt-2 text-gray-500">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }