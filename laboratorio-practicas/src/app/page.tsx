import NavCard from "./components/NavCard";
import homedata from "../../public/homedata.json";
import NavBar from "./components/NavBar";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faBook,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

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
  const courses: Course[] = homedata.courses.flatMap((course) =>
    Object.values(course)
  );

  const title: string = homedata.title;
  const description: string = homedata.description;
  const footer: string = homedata.footer;

  return (
    <div className="">
      <NavBar title="Laboratorio de Prácticas" />

      <div className="lg:px-3 flex flex-1 justify-center">
        <div className="layout-content-container lg:w-[90%] max-w-[1120px] flex flex-col flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[70vh] md:min-h-[60vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10 rounded-b-2xl"
                style={{
                  backgroundImage: 
                    `linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(145,145,145,0.5019257703081232) 98%, rgba(255,255,255,0) 100%), url(https://postsecondaryreadiness.org/wp-content/uploads/2019/09/cal-state-math-1.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col gap-2 text-left pl-2 sm:w-3/4 md:w-3/4 lg:w-3/5">
                  <h1 className="text-gray-200 text-4xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    {title}
                  </h1>
                  <h2 className="text-white font-extralight leading-6 @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    {description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flew-row flex-wrap gap-3 justify-center lg:justify-between pb-3 py-5">
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

      <footer className="w-100% text-center p-4 text-base md:text-xl font-semibold">
        {footer}
      </footer>
    </div>
  );
}
