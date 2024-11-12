"use client";
import CountdownTimer from "@/component/CountDownTimer";
import { HeroBannerProps } from "@/utils/types";
import React from "react";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const HeroBannerComponent = ({ crouselComponent }: HeroBannerProps) => {
  const crouselData = crouselComponent[0];
  const targetDate = new Date("2024-12-01T23:59:59");
  return (
    <div
      style={{ boxShadow: "0px 3.34px 3.34px 0px #0000001A" }}
      className="w-[75%] mx-auto relative my-[40px] rounded-b-[24px]"
    >
      <div className="py-4 px-[66px]">
        <div className="flex flex-col gap-[48px]">
          <div className="flex gap-4">
            <div className="flex flex-col gap-[1.25rem] w-[45%] self-center">
              {crouselData.isTimer && (
                <div className="font-rubik italic font-normal text-[0.625rem] text-[#DE7794] leading-3">
                  {" "}
                  Ends in <CountdownTimer targetDate={targetDate} />{" "}
                </div>
              )}
              <div className="flex flex-col gap-[14px]">
                <h3>{crouselData.title}</h3>
                <div className="flex gap-[30px] items-center">
                  <span className="font-rubik font-normal text-[0.75rem] leading-[14px]">
                    Donald Trump
                  </span>
                  <div className="flex gap-[5px]">
                    <span className="p-2 flex gap-[20px] rounded-lg items-center font-rubik font-medium text-[0.625rem] leading-3 bg-[#62D597] border border-solid border-[#00FF47]">
                      <span className="flex items-center gap-1">
                        <img
                          className="w-[17px] h-[17px]"
                          src="https://res.cloudinary.com/dzanqvp0c/image/upload/v1731220890/Frame_2147223465_1_m99eog.png"
                        />{" "}
                        <span>54</span>
                      </span>
                      <span>Yes</span>
                    </span>
                    <span className="p-2 flex gap-[20px] rounded-lg items-center font-rubik font-medium text-[0.625rem] leading-3 bg-[#FF8585] border border-solid border-[#FF0000]">
                      <span className="flex items-center gap-1">
                        <img
                          className="w-[17px] h-[17px]"
                          src="https://res.cloudinary.com/dzanqvp0c/image/upload/v1731220890/Frame_2147223465_1_m99eog.png"
                        />{" "}
                        <span>54</span>
                      </span>
                      <span>No</span>
                    </span>
                  </div>
                </div>
                <p className="font-rubik text-[0.75rem] leading-4">
                  <span className="font-bold">Market info:</span>{" "}
                  <span className="font-regular">
                    {crouselData?.marketInfo}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="w-[55%]">
              <img src={crouselData.imageUrl} className="rounded-[18px]" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-[1.25rem] items-center cursor-pointer">
              <IoIosArrowDropleft color="#1D1D1D" />{" "}
              <span className="font-rubik font-semibold text-[0.625rem] leading-3 text-[#1D1D1D]">
                Trump: its ours to lose
              </span>
            </div>
            <div className="w-[58px] h-[8px]">
              <img
                src="https://res.cloudinary.com/dzanqvp0c/image/upload/v1731225114/Frame_2147224381_1_byv2xh.png"
                alt="crousel-dots"
              />
            </div>
            <div className="flex gap-[1.25rem] items-center cursor-pointer">
              {" "}
              <span className="font-rubik font-semibold text-[0.625rem] leading-3 text-[#1D1D1D]">
                Trump: its ours to lose
              </span>{" "}
              <IoIosArrowDropright color="#1D1D1D" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerComponent;
