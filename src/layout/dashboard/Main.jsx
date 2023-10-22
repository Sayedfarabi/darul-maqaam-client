import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../dashboard/partials/Sidebar";
import Header from "../../dashboard/partials/Header";
import WelcomeBanner from "../../dashboard/partials/dashboard/WelcomeBanner";

const Main = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/* Top-Right Site header */}
            <Header/>

            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                {/* Welcome banner */}
                <WelcomeBanner />

                <Outlet/>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
