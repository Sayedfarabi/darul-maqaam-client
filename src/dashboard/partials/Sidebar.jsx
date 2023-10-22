import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand/logo.png";
import {AiFillHome} from 'react-icons/ai';

function Sidebar() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <div
        className={`static flex flex-col z-40 left-0 top-0 transition-all duration-500 ease-in-out ${sidebarOpen ? 'h-auto' : 'h-20'}  lg:h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar ${
          sidebarOpen ? "w-screen lg:w-64" : "w-screen lg:w-20"
        } shrink-0 bg-slate-800 p-4 transition-all duration-500 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-0"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-start mb-10 pr-3 sm:px-2">
          {/* Logo  */}
          <div className={`${sidebarOpen ? 'block mx-start lg:mx-auto' : 'block lg:hidden mx-start lg:mx-auto'}`}>
            <Link to={"/"}>
              <img src={logo} className="w-28 h-16" alt="" />
            </Link>
          </div>
          <div className={`${sidebarOpen ? 'hidden' : 'hidden lg:block'}`}>

            <Link to={"/"}>
              <button className="">
                <AiFillHome className="text-3xl text-white hover:text-green-600 duration-500"/>
              </button>
            </Link>
          </div>

          {/* Close Button  */}
          <div>
            <button
              className="lg:hidden text-slate-500 hover:text-slate-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className={`w-6 h-6 fill-current ${
                  sidebarOpen
                    ? "rotate-90 transition-transform duration-500"
                    : "-rotate-90 transition-transform duration-500"
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="">
          <div
            className={`space-y-8 text-white ${
              sidebarOpen
                ? "block lg:block duration-500"
                : "hidden lg:block duration-500"
            }`}
          >
            <ul className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              <li className="mb-4 text-xl">
                <Link to={'/dashboard'} className="text-green-600 border-b border-green-600">DASHBOARD</Link>
              </li>
              <li>
                <Link to={'/dashboard/homepage'}>Edit Home Page</Link>
              </li>
              <li>
                <Link to={'/dashboard/item2'}>Item 2</Link>
              </li>
              <li>
                <Link to={'/dashboard/item3'}>Item 3</Link>
              </li>
              <li>
                <Link to={'/dashboard/item4'}>Item 4</Link>
              </li>
              <li>
                <Link to={'/dashboard/item5'}>Item 5</Link>
              </li>
              <li>
                <Link to={'/dashboard/item6'}>Item 6</Link>
              </li>
              <li>
                <Link to={'/dashboard/item7'}>Item 7</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}>
              <span className="sr-only text-white">
                Expand / collapse sidebar
              </span>
              <svg
                className={`w-6 h-6 fill-current ${
                  sidebarOpen
                    ? "rotate-180 transition-transform duration-500"
                    : "rotate-0 transition-transform duration-500"
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
