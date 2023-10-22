import React from "react";
import { navLinks } from "../navLinks";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropup } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useTranslation } from "react-i18next";

const MenuBar = () => {
  const [activeRoute, setActiveRoute] = useState("home");
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const openMenuClass = "top-[100px] opacity-100";
  const closeMenuClass = "top-[-400px] opacity-0";
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const submenuOpenHandler = (data) => {
    if (openSubMenu) {
      if (openSubMenu?.menu === data) {
        setOpenSubMenu({
          menu: data,
          status: !openSubMenu.status,
        });
      } else {
        setOpenSubMenu({
          menu: data,
          status: true,
        });
      }
    } else {
      setOpenSubMenu({
        menu: data,
        status: true,
      });
    }
  };

  return (
    <div className="flex justify-between items-center mt-2">

        {/* Hamburger Menu Button  */}
      <div class="block lg:hidden cursor-pointer">
        <div className="text-2xl" onClick={() => setOpen(!open)}>
          {open ? (
            <GiHamburgerMenu className="inline"></GiHamburgerMenu>
          ) : (
            <AiOutlineClose className="inline"></AiOutlineClose>
          )}
        </div>
      </div>
      
      {/* Main Menu  */}
      <div
        className={`flex-none lg:flex bg-green-100 lg:bg-white  items-center lg:items-start text-xs lg:text-sm z-[1] lg:z-auto  absolute md:absolute lg:static w-full lg:w-auto py-4 lg:py-0 lg:pl-0 pl-6 lg:opacity-100 left-0 transition-all ease-in duration-500 ${
          open ? closeMenuClass : openMenuClass
        }`}
      >
        {navLinks.map((nav) => {
          return (
            <div key={nav?._id}>
              <div
                onClick={() => setOpen(!nav?.isSubmenu ? true : false)}
                className="px-4 my-6 lg:my-0 font-semibold"
              >
                {!nav.isSubmenu ? (
                  <div
                    onClick={() => setActiveRoute(nav?.menu.toLowerCase())}
                    className={`${
                      activeRoute === nav.menu.toLowerCase() && "text-green-600"
                    } hover:text-green-600 duration-500`}
                  >
                    <Link to={nav?.link}>{t(nav.menu.toLowerCase())}</Link>
                  </div>
                ) : (
                  <div className="relative ">
                    <h1
                      onClick={() => submenuOpenHandler(nav?.menu)}
                      className="hover:text-green-600 duration-500 cursor-pointer"
                    >
                      {t(nav?.menu.toLowerCase())}
                      <span className="ml-2">
                        {openSubMenu?.menu === nav?.menu &&
                        openSubMenu?.status ? (
                          <IoMdArrowDropup className="inline"></IoMdArrowDropup>
                        ) : (
                          <AiFillCaretDown className="inline"></AiFillCaretDown>
                        )}
                      </span>
                    </h1>

                    {/* Desktop Device  */}
                    <div
                      className={
                        openSubMenu?.menu === nav?.menu && openSubMenu?.status
                          ? "hidden lg:block absolute z-[1] top-5 ml-4 mt-2 w-48 bg-blue-100 rounded duration-500 border-t-8 border-green-600"
                          : "mt-4 hidden duration-500"
                      }
                    >
                      {nav?.submenu.map((item) => {
                        return (
                          <div
                            key={item?._id}
                            onClick={() => submenuOpenHandler(nav?.menu)}
                            className=" pl-4 lg:pl-2 my-6 lg:my-4 font-semibold hover:text-green-600 duration-500 border-b border-green-300 hover:border-green-600"
                          >
                            <Link to={item?.link + item?._id}>
                              {item?.menu}
                            </Link>
                          </div>
                        );
                      })}
                    </div>

                    {/* Mobile Device  */}

                    <div
                      className={
                        openSubMenu?.menu === nav?.menu && openSubMenu?.status
                          ? "duration-500 inline-block lg:hidden pl-4 lg:pl-2"
                          : "mt-4 hidden duration-500"
                      }
                    >
                      {nav?.submenu.map((item) => {
                        return (
                          <button
                            key={item?._id}
                            onClick={() => setOpen(!open)}
                            className=" block my-6 lg:my-4 font-semibold hover:text-green-600 duration-500 border-b border-green-300 hover:border-green-600"
                          >
                            <Link to={item?.link + item?._id}>
                              {item?.menu}
                            </Link>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuBar;
