"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import GoBackBtn from "./GoBackBtn";
import Link from "next/link";

interface SideBarProps {
  elements: string[];
  onSelect?: (index: number) => void;
}

const SideBar: React.FC<SideBarProps> = ({ elements, onSelect }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelected = (index: number) => {
    setSelected(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  return (
    <div className="hidden md:block layout-content-container flex flex-col min-w-80">
      <div className="flex h-full flex-col justify-between bg-slate-50 p-4 rounded-2xl">
        <div className="flex flex-col gap-4">
          <GoBackBtn />
          <div className="flex flex-col gap-2">
            {elements.map((element, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:scale-105 duration-200 ${
                  selected === index ? "bg-slate-300" : "bg-[#e7eef4]"
                }`}
                onClick={() => handleSelected(index)} // Cambiar selección
              >
                <div
                  className="text-[#0d151c]"
                  data-icon="House"
                  data-size="24px"
                  data-weight="fill"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </div>
                <Link className="w-full" href="#">
                  <p className="w-full text-[#0d151c] text-base font-medium leading-normal">
                    {element}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
