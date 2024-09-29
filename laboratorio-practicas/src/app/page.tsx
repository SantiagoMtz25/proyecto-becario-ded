import NavCard from "./components/NavCard";
import homedata from "../../public/homedata.json";
import { NavCardProps } from "./components/NavCard";
import Image from "./tips-for-easier-studying-860x420.jpg";
import NavBar from "./components/NavBar";

interface Course {
  title: string;
  description: string;
  path: string;
}

interface HomeProps extends NavCardProps {
  courses: Course[];
  footer: string;
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

      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[1120px] flex-1">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[50vh] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                style={{
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url(https://cdn.usegalileo.ai/sdxl10/26ef9197-abce-4237-9780-601e6f017889.png)`,
                }}
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-black text-5xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    {title}
                  </h1>
                  <h2 className="text-black text-sm font-light leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    {description}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flew-row flex-wrap gap-3 items-stretch justify-between pb-3 p-4">
            {courses.map((course, index) => (
              <NavCard
                num={index + 1}
                key={index}
                title={course.title}
                description={course.description}
                path={course.path}
              />
            ))}
          </div>
        </div>
      </div>

      <footer className="w-100% text-center p-4 text-xl font-semibold">
        {footer}
      </footer>
    </div>
  );
}
