"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";

const SearchContainer = ({ scrollPosition }: { scrollPosition: number }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div
      className={`w-[850px] flex items-center  h-[65px] bg-white border border-gray-300 shadow-md absolute rounded-full  transition-all duration-500 ${
        scrollPosition > 0
          ? " scale-[.7] w-[490px] translate-y-[0%] top-[5px] pl-4"
          : "scale-100 translate-y-[100%]  top-3"
      }`}
    >
      {scrollPosition < 1 ? (
        <div
          className={`flex w-full transition-all duration-1000 delay-200 h-full ${
            scrollPosition < 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="hover:bg-gray-200 flex-grow-[1] h-full rounded-full cursor-pointer pt-[12px] pl-6 relative">
            <div className="flex flex-col">
              <p className="text-[12px] text-black font-semibold">Where</p>
              <Input
                type="text"
                className="w-[90%] border-0 pt-1 h-[30px] pl-0 bg-transparent mt-[-3px]"
                placeholder="Search destinations"
              />
            </div>

            <div className="bg-gray-300 w-[1px] h-[60%] absolute top-[50%] right-0 translate-y-[-50%]" />
          </div>
          <div className="hover:bg-gray-200 flex-grow h-full rounded-full cursor-pointer pt-[12px] pl-8 relative">
            <div className="flex flex-col">
              <p className="text-[12px] text-black font-semibold">Check in</p>
              <p className="text-[14px] text-gray-500">Add dates</p>
            </div>

            <div className="bg-gray-300 w-[1px] h-[60%] absolute top-[50%] right-0 translate-y-[-50%]" />
          </div>
          <div className="hover:bg-gray-200 flex-grow h-full rounded-full cursor-pointer pt-[12px] pl-8 relative">
            <div className="flex flex-col h-full">
              <p className="text-[12px] text-black font-semibold">Check out</p>
              <p className="text-[14px] text-gray-500">Add dates</p>
            </div>

            <div className="bg-gray-300 w-[1px] h-[60%] absolute top-[50%] right-0 translate-y-[-50%]" />
          </div>

          <div className="hover:bg-gray-200 flex-grow-[4] h-full rounded-full cursor-pointer pt-[10px] pl-6 relative">
            <div className="flex items-center justify-between pr-2">
              <div className="flex flex-col">
                <p className="text-[12px] text-black font-semibold">Who</p>
                <div className="w-[100%] text-[14px] text-gray-500">
                  Add guests
                </div>
              </div>

              <div className="w-10 h-10 bg-main-foreground rounded-full mt-[0px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#fff"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex-grow flex items-center justify-center relative">
            <p className="text-[20px] font-semibold text-gray-500">Anywhere</p>
            <div className="bg-gray-300 w-[1px] h-[90%] absolute top-[50%] right-0 translate-y-[-50%]" />
          </div>
          <div className="flex-grow flex items-center justify-center text-[14px] relative">
            <p className="text-[20px] font-semibold text-gray-500">Any week</p>
            <div className="bg-gray-300 w-[1px] h-[90%] absolute top-[50%] right-0 translate-y-[-50%]" />
          </div>
          <div className="flex-grow flex items-center justify-between px-6 pr-2 pt-[0px]">
            <p className="text-[20px] text-gray-500">Add guests</p>

            <div className="w-12 h-12 bg-main-foreground rounded-full flex items-center justify-center relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#fff"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchContainer;
