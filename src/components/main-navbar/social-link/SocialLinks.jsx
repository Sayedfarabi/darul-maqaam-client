import React from "react";
import { useState } from "react";
import i18next from "i18next";
import {
  GrMail,
  GrFacebookOption,
  GrYoutube,
  GrContactInfo,
  GrGallery,
  GrProjects,
  GrHomeRounded,
} from "react-icons/gr";

const SocialLinks = () => {
  const [Lan, setLan] = useState("en");

  const toggleHandle = (e) => {
    setLan(e);
    i18next.changeLanguage(e);
  };

  return (
    <div className="justify-end mb-4">
      <div className="flex justify-center  items-center">
        <div className="mr-4">
          <GrFacebookOption className="text-green-600 inline"></GrFacebookOption>
          <GrYoutube className="text-green-600 inline mx-2 md:mx-3"></GrYoutube>
        </div>
        <div className="font-bold text-sm bg-green-500 rounded-lg">
          <button
            onClick={() => toggleHandle("en")}
            className={`mr-1 text-sm rounded-lg ${Lan === "en" && "bg-gray-200"} px-2`}
          >
            EN
          </button>
          <button
            onClick={(e) => toggleHandle("bn")}
            className={`rounded-lg text-sm ${Lan === "bn" && "bg-gray-200"} px-2`}
          >
            BAN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
