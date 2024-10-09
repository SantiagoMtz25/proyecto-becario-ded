"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import GoBackBtn from "./GoBackBtn";

interface SideBarProps {
  elements: string[];
}

const SideBar: React.FC<SideBarProps> = ({ elements }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="hidden md:block layout-content-container flex flex-col w-80">
        <div className="flex h-full flex-col justify-between bg-slate-50 p-4 rounded-2xl">
          <div className="flex flex-col gap-4">
            <GoBackBtn />
            <div className="flex flex-col gap-2">
              {elements.map((element, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
                    selected === index ? "bg-blue-300" : "bg-[#e7eef4]"
                  }`}
                  onClick={() => setSelected(index)}
                >
                  <div
                    className="text-[#0d151c]"
                    data-icon="House"
                    data-size="24px"
                    data-weight="fill"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </div>
                  <p className="text-[#0d151c] text-base font-medium leading-normal">
                    {element}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
