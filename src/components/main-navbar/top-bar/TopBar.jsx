import React from "react";
import {GrMail} from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { ImMobile2 } from "react-icons/im";

const TopBar = () => {

  return (
    <div className="mb-4 ml-4">
      <div className="w-full flex justify-end md:justify-between items-center">
        <div className="justify-center">
          <div className="text-xs hidden md:flex lg:flex justify-center items-center font-sans">
            <p className="mr-3">
              <ImMobile2 className="text-green-600 inline"></ImMobile2>
              <span>+8801918-390119</span>
            </p>
            <p>
              <BsTelephoneFill className="text-green-600 inline"></BsTelephoneFill>
              <span className="ml-1">(+880) - 02 - 4895 4791</span>
            </p>
            <p className="mx-2 text-xl">|</p>
            <p>
              <GrMail className="text-green-600 inline"></GrMail>
              <span className="ml-1">info@darulmaaqamfoundation.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
