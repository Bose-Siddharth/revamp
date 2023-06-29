import { useWindowSize } from "@uidotdev/usehooks";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar(props) {
  const location = useLocation();
  const size = useWindowSize();
  console.log(props.showNav);
  return (
    <>
      <div className="absolute w-full bg-gradient-to-t from-violet-500 to-violet-400 dark:hidden min-h-75 h-75"></div>

      <aside className={`fixed inset-y-0 flex-wrap items-center justify-between block w-80 p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 ${size.width<1200 ? props.showNav===true? '-translate-x-full': '':''} bg-white border-0 shadow-xl dark:shadow-none dark:bg-slate-850 max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-2xl xl:left-0 xl:translate-x-0`}>
        <div className="h-19">
          <i
            className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
            onClick={props.onClick}
          ></i>
          <a
            className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
            href="/"
          >
            <img
              src="/logo.png"
              className="inline h-full max-w-full transition-all duration-200 dark:hidden ease-nav-brand max-h-8 mr-3"
              alt="main_logo"
            />
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              SAIL REVAMP
            </span>
          </a>
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

        <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
          <ul className="flex flex-col pl-0 mb-0">
            <li className="mt-0.5 w-full">
              <Link
                className={`${location.pathname==="/"?"bg-blue-500/13": ""} py-2.7 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors`}
                to="/"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-blue-500 ni ni-tv-2"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Dashboard
                </span>
              </Link>
            </li>

            <li className="mt-0.5 w-full">
              <Link
                className={`${location.pathname==="/sites"?"bg-blue-500/13": ""} dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
                to="/sites"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-orange-500 fas fa-hdd"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  Sites
                </span>
              </Link>
            </li>

            <li className="mt-0.5 w-full">
              <Link
                className={`dark:text-white dark:opacity-80 py-2.7 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors`}
                to="/"
              >
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current stroke-0 text-center xl:p-2.5">
                  <i className="relative top-0 text-sm leading-normal text-emerald-500 ni ni-credit-card"></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                  TBA
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
