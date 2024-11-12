import { HeaderProps } from "@/utils/types";
import React from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

const HeaderComponent = ({ headerConfig }: HeaderProps) => {
  const { brandName, navLinks, ctaButton } = headerConfig;

  return (
    <div className="border-b border-solid border-[#CECECE]">
      <header className=" w-[75%] mx-auto flex justify-between items-center py-[18px] ">
        <div className="font-bold font-mulish italic leading-5 text-[1rem] text-[#1D1D1D]">
          {brandName}
        </div>

        <nav className="flex gap-[58px] items-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-rubik font-normal leading-3 text-[0.625rem] text-[#1D1D1D] flex items-center gap-[6px]"
            >
              {link.label}
              {link.isDropdown && <IoIosArrowDown color="#1D1D1D" />}
            </a>
          ))}
          <div className="flex justify-between items-center min-w-[299px] max-w-[300px] border border-solid border-[#CECECE] px-[30px] py-[10px] rounded-[50px]">
            <input
              type="text"
              placeholder="Search markets"
              className="font-rubik font-medium text-[0.625rem] leading-3 placeholder:text-[#CECECE] border-none outline-0 flex-1"
            />
            <span className="cursor-pointer">
              <IoIosSearch color="#CECECE" />
            </span>
          </div>
        </nav>

        <div className="flex items-center gap-[1.125rem]">
          <a
            href={ctaButton.secondaryCtaButton.href}
            className="font-rubik font-normal text-[0.625rem] leading-3 text-[#1D1D1D]"
          >
            {ctaButton.secondaryCtaButton.label}
          </a>
          <a
            href={ctaButton.primaryCtaButton.href}
            className="px-[30px] py-[18px] rounded-[15px] bg-[#62D597] font-rubik font-medium text-[0.625rem] leading-3 text-[#1D1D1D]"
          >
            {ctaButton.primaryCtaButton.label}
          </a>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
