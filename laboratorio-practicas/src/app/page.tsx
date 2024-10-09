"use client";

import NavCard from "./components/NavCard";
import homedata from "../../public/homedata.json";
import NavBar from "./components/NavBar";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import FooterComponent from "./components/Footer";
import LandingCarousel from "./components/LandingCarousel";
import {
  faBrain,
  faBook,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";
import 'flowbite';

const iconMap: { [key: string]: IconProp } = {
  "fa-solid fa-brain": faBrain,
  "fa-solid fa-book": faBook,
  "fa-solid fa-calculator": faCalculator,
};

interface Course {
  title: string;
  description: string;
  path: string;
  icon: string;
}

export default function Home() {
  const [showFullDescription, setShowFullDescription] =
      useState<boolean>(false);

  const courses: Course[] = homedata.courses.flatMap((course) =>
    Object.values(course)
  );

  const title: string[] = homedata.title;
  const description: string[] = homedata.description;
  const imageUrls: string[] = homedata.imageURL;

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full lg:max-w-[1120px] self-center">
        <NavBar />
      </div>
      <div className="lg:px-3 flex flex-1 justify-center">
        <div className="layout-content-container lg:w-[90%] max-w-[1120px] flex flex-col flex-1">
          {/* <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[70vh] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 rounded-2xl"
                style={{
                  backgroundImage: `linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(145,145,145,0.5019257703081232) 100%, rgba(255,255,255,0) 100%), url(https://www.coe.int/documents/16695/63022230/0/ecd788db-d4c0-3688-bab2-630843f09f17)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col gap-2 text-left pl-2 sm:w-3/4 md:w-3/4 lg:w-3/5">
                  <h1 className="text-gray-200 text-4xl md:text-4xl lg:text-5xl font-black leading-tight tracking</div>-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    {title}
                  </h1>
                  <h2 className="text-white font-extralight leading-6 @[480px]:text-base @[480px]:font-normal @[480px]:leading-nor</div>mal">
                    {showFullDescription ? (
                      <>
                        {description}
                        <button
                          onClick={() => setShowFullDescription(false)}
                          className="select-none rounded-lg bg-indigo_blue ml-2 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                          Leer Menos
                        </button>
                      </>
                    ) : (
                      <>
                        {description.slice(0, 200)}...
                        {description.length > 200 && (
                          <button
                            onClick={() => setShowFullDescription(true)}
                            data-ripple-light="true"
                            type="button"
                            className="select-none rounded-lg bg-indigo_blue ml-2 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          >
                            Leer Más
                          </button>
                        )}
                      </>
                    )}
                  </h2>
                </div>
              </div>
            </div>
          </div> */}
          <LandingCarousel
            showFullDescription={showFullDescription}
            setShowFullDescription={setShowFullDescription}
            title={title}
            description={description}
            imageURL={imageUrls}
          />
          <div className="flex flex-row flex-wrap gap-3 justify-center px-3 lg:px-0 lg:justify-between pb-3 py-5">
            {courses.map((course, index) => (
              <NavCard
                num={index + 1}
                key={index}
                title={course.title}
                description={course.description}
                path={course.path}
                icon={iconMap[course.icon]}
              />
            ))}
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
