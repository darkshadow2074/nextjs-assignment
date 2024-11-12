import React from "react";
import { FaXTwitter, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white py-8 mt-[30px]">
      <div className="w-[70%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold font-mulish italic leading-5 text-[1rem] text-white mb-2">
              Balshi
            </h3>
            <div className="flex items-center gap-[2px]">
              <span className="w-[21px] h-[21px] flex items-center justify-center">
                {" "}
                <FaXTwitter />{" "}
              </span>
              <span className="w-[21px] h-[21px] flex items-center justify-center">
                {" "}
                <FaInstagram />
              </span>
              <span className="w-[21px] h-[21px] flex items-center justify-center">
                {" "}
                <FaTiktok />
              </span>
              <span className="w-[21px] h-[21px] flex items-center justify-center">
                {" "}
                <FaDiscord />
              </span>
              <span className="w-[21px] h-[21px] flex items-center justify-center">
                {" "}
                <FaThreads />
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-rubik font-bold text-[12px] leading-3 text-white mb-4">
              Balshi
            </h3>
            <ul className="space-y-2">
              <li className="font-rubik font-normal text-[12px] leading-3 text-white ">
                Terms & conditions
              </li>
              <li className="font-rubik font-normal text-[12px] leading-3 text-white ">
                Privacy policy
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-rubik font-bold text-[12px] leading-3 text-white mb-4">
              Balshi Creations
            </h3>
            <ul className="space-y-2">
              <li className="font-rubik font-normal text-[12px] leading-3 text-white ">
                Marketplace
              </li>
              <li className="font-rubik font-normal text-[12px] leading-3 text-white ">
                Affiliate Program
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
