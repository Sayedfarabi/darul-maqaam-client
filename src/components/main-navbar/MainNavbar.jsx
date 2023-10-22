import React from "react";
import logo from "../../assets/images//brand/logo.png";
import TopBar from "./top-bar/TopBar";
import MenuBar from "./menu-bar/MenuBar";
import SocialLinks from "./social-link/SocialLinks";
import MyAccount from "./my-account/MyAccount";

const MainNavbar = () => {
  return (
    <section className="px-8 md:px-10 lg:px-12 py-4">
      <div className="flex justify-between items-center">
        {/* Logo for large device */}
        <div className="hidden md:hidden lg:block">
          <div>
            <img src={logo} alt="" className="w-40 h-20" />
          </div>
        </div>

        <div>
          <TopBar></TopBar>
          <MenuBar></MenuBar>
        </div>

        <div>
          <SocialLinks></SocialLinks>
          <MyAccount></MyAccount>
        </div>
      </div>
    </section>
  );
};

export default MainNavbar;
