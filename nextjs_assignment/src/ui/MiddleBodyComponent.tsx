"use client";
import CountdownTimer from "@/component/CountDownTimer";
import React, { useState, useEffect } from "react";

import { LuUpload } from "react-icons/lu";
import { IoStatsChart } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { PostContent, TabContentProps, TabItem } from "@/utils/types";


const MiddleBodyComponent = ({ tabContent }: TabContentProps) => {
  const [tabClicked, setTabClicked] = useState("Crypo");
  const [tabSelectedData, setTabSelectedData] = useState<PostContent[]>([]);
  const [displayedData, setDisplayedData] = useState<PostContent[]>([]);
  const itemsPerPage = 5;
  const targetDate = new Date("2024-12-01T23:59:59");

  useEffect(() => {
    const selectedData =
      tabContent.content.find(({ label }) => label === tabClicked)?.content ||
      [];
    setTabSelectedData(selectedData);
    setDisplayedData(selectedData.slice(0, itemsPerPage));
  }, [tabClicked, tabContent]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [displayedData, tabSelectedData]);

  const loadMoreItems = () => {
    if (displayedData.length < tabSelectedData.length) {
      const nextItems = tabSelectedData.slice(
        displayedData.length,
        displayedData.length + itemsPerPage
      );
      setDisplayedData((prevData) => [...prevData, ...nextItems]);
    }
  };

  const handleTabClick = (tabData: TabItem) => {
    setTabClicked(tabData.label);
  };

  return (
    <div className="w-[70%] mx-auto">
      <div className="flex gap-[36px] items-center pb-4 border-b border-solid border-[#CECECECE]">
        <div className="flex gap-[12px] items-center">
          {tabContent.showSvgs && (
            <img
              src="https://res.cloudinary.com/dzanqvp0c/image/upload/v1731297810/Frame_2147223260_xpypkp.png"
              className="w-[21px] h-[21px]"
            />
          )}
          {tabContent.label && (
            <span className="font-rubik font-normal text-[0.625rem] leading-3">
              {tabContent.label}
            </span>
          )}
        </div>
        <div className="flex-1 overflow-auto self-center">
          <div className="flex gap-4 items-center whitespace-nowrap">
            {tabContent.content.map((item, index) => (
              <span
                key={index}
                className={`font-rubik text-[10px] leading-3 ${
                  tabClicked === item.label
                    ? "text-[#1D1D1D] font-bold"
                    : "text-[#969696] font-normal"
                } cursor-pointer`}
                onClick={() => handleTabClick(item)}
              >
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
      {displayedData.length > 0 ? (
        <div className="grid grid-cols-3 gap-6 mt-[30px]">
          {displayedData.map((tabItem, idx) => (
            <div
              className="p-4 border border-[#CECECE80] rounded-lg w-full"
              key={idx}
            >
              <div className="flex items-center mb-1 justify-between">
                <div className="flex items-center mb-2">
                  <img
                    src={tabItem.avatarUrl}
                    alt={tabItem.name}
                    className="w-[30px] h-[30px] rounded-full mr-2"
                  />
                  <span className="font-rubik font-bold text-[0.75rem] leading-3">
                    {tabItem.name}
                  </span>
                </div>
                <div className="font-rubik  font-normal text-[0.625rem] text-[#DE7794] leading-3">
                  {" "}
                  Ends in <CountdownTimer targetDate={targetDate} />{" "}
                </div>
              </div>

              <p className=" font-poppins font-semibold text-[0.875rem] leading-4">
                {tabItem.postDescription}
              </p>
              <div className="flex gap-2 mb-2">
                {tabItem.hashTags.map((tag, index) => (
                  <span
                    key={index}
                    className="font-rubik font-normal text-[0.625rem] "
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <span className="p-2 flex justify-between gap-[20px] rounded-lg items-center font-rubik font-semibold text-[0.625rem] leading-3 bg-[#62D597] border border-solid border-[#00FF47] w-[100%] max-w-[118px]">
                  <span className="flex items-center gap-1">
                    <img
                      className="w-[17px] h-[17px]"
                      src="https://res.cloudinary.com/dzanqvp0c/image/upload/v1731220890/Frame_2147223465_1_m99eog.png"
                    />{" "}
                    <span className="text-white font-medium">{tabItem.secondaryCTA.coins}</span>
                  </span>
                  <span className="text-white font-medium">{tabItem.secondaryCTA.ctaLabel}</span>
                </span>
                <span className="p-2 flex justify-between gap-[20px] rounded-lg items-center font-rubik font-semibold text-[0.625rem] leading-3 bg-[#FF8585] border border-solid border-[#FF0000] w-[100%] max-w-[118px]">
                  <span className="flex items-center gap-1">
                    <img
                      className="w-[17px] h-[17px]"
                      src="https://res.cloudinary.com/dzanqvp0c/image/upload/v1731220890/Frame_2147223465_1_m99eog.png"
                    />{" "}
                    <span className="text-white font-medium">{tabItem.secondaryCTA.coins}</span>
                  </span>
                  <span className="text-white font-medium">{tabItem.secondaryCTA.ctaLabel}</span>
                </span>
              </div>
              <div className="flex justify-between mt-[14px] items-center">
                <div className="flex gap-[10px] items-center">
                   <span> <LuUpload/> </span>
                   <span><IoStatsChart /></span>
                </div>
                <div className="flex items-center gap-[4px] font-rubik font-normal text-[10px]">
                    <FaReact /> {tabItem.postViewed}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>Loading....</>
      )}
    </div>
  );
};

export default MiddleBodyComponent;
