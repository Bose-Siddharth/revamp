import React from 'react'

function Home() {
  return (
    <>
    <div className="w-full px-6 py-6 mx-auto">
    <div className="flex flex-wrap -mx-3">

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Clients</p>
                  <h5 className="mb-2 font-bold dark:text-white">9</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">+55% </span>
                    since last month
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-blue-500 to-violet-500">
                  <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Machines</p>
                  <h5 className="mb-2 font-bold dark:text-white">350</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">+3% </span>
                    since last week
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-red-600 to-orange-600">
                  <i className="ni leading-none ni-world text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Newly Registered Devices</p>
                  <h5 className="mb-2 font-bold dark:text-white">+65</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-red-600">+2% </span>
                    since last quarter
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400">
                  <i className="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4">
        <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
          <div className="flex-auto p-4">
            <div className="flex flex-row -mx-3">
              <div className="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p className="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">Sales</p>
                  <h5 className="mb-2 font-bold dark:text-white">$103,430</h5>
                  <p className="mb-0 dark:text-white dark:opacity-60">
                    <span className="text-sm font-bold leading-normal text-emerald-500">+5% </span>
                    than last month
                  </p>
                </div>
              </div>
              <div className="px-3 text-right basis-1/3">
                <div className="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-orange-500 to-yellow-500">
                  <i className="ni leading-none ni-cart text-lg relative top-3.5 text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- cards row 2 --> */}
        <div className="flex flex-wrap mt-6 -mx-3">
          <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
            <div className="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
              <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
                <h6 className="capitalize dark:text-white">Sales overview</h6>
                <p className="mb-0 text-sm leading-normal dark:text-white dark:opacity-60">
                  <i className="fa fa-arrow-up text-emerald-500"></i>
                  <span className="font-semibold">4% more</span> in 2021
                </p>
              </div>
              <div className="flex-auto p-4">
                <div>
                  <canvas id="chart-line" height="300">

                  </canvas>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
            <div slider className="relative w-full h-full overflow-hidden rounded-2xl">
              {/* <!-- slide 1 --> */}
              <div slide className="absolute w-full h-full transition-all duration-500">
                <img className="object-cover h-full" src="./assets/img/carousel-1.jpg" alt="carousel" />
                <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                  <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                    <i className="top-0.75 text-xxs relative text-slate-700 ni ni-camera-compact"></i>
                  </div>
                  <h5 className="mb-1 text-white">Get started with Argon</h5>
                  <p className="dark:opacity-80">There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
                </div>
              </div>

              {/* <!-- slide 2 --> */}
              <div slide className="absolute w-full h-full transition-all duration-500">
                <img className="object-cover h-full" src="./assets/img/carousel-2.jpg" alt="carousel" />
                <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                  <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                    <i className="top-0.75 text-xxs relative text-slate-700 ni ni-bulb-61"></i>
                  </div>
                  <h5 className="mb-1 text-white">Faster way to create web pages</h5>
                  <p className="dark:opacity-80">That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                </div>
              </div>

              {/* <!-- slide 3 --> */}
              <div slide className="absolute w-full h-full transition-all duration-500">
                <img className="object-cover h-full" src="./assets/img/carousel-3.jpg" alt="carousel" />
                <div className="block text-start ml-12 left-0 bottom-0 absolute right-[15%] pt-5 pb-5 text-white">
                  <div className="inline-block w-8 h-8 mb-4 text-center text-black bg-white bg-center rounded-lg fill-current stroke-none">
                    <i className="top-0.75 text-xxs relative text-slate-700 ni ni-trophy"></i>
                  </div>
                  <h5 className="mb-1 text-white">Share with us your design tips!</h5>
                  <p className="dark:opacity-80">Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                </div>
              </div>

              {/* <!-- Control buttons --> */}
               </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home
